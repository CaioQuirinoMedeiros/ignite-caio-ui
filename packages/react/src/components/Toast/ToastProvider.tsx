import * as React from "react";

import * as RadixToast from "@radix-ui/react-toast";
import { ToastViewport, Toast } from ".";

type ToasterToast = {
  id: string;
  title: string;
  description?: string;
};

type ToastProps = {
  id?: string;
  title: string;
  description?: string;
};

type ToastReturn = {
  id: string;
  remove(): void;
};

type ToastProviderState = {
  toast(props: ToastProps): ToastReturn;
  removeToast(toastId: string): void;
};

export const ToastContext = React.createContext<ToastProviderState>(
  {} as ToastProviderState,
);

interface ToastProviderProps {
  children: React.ReactNode;
}

export function ToastProvider(props: ToastProviderProps) {
  const { children } = props;

  const [toasts, setToasts] = React.useState<ToasterToast[]>([]);

  const removeToast = React.useCallback((toastId: string) => {
    setToasts((prevToasts) => {
      return prevToasts.filter((prevToast) => {
        return prevToast.id !== toastId;
      });
    });
  }, []);

  const toast = React.useCallback((toastProps: ToastProps): ToastReturn => {
    const { title, description, id } = toastProps;

    const toastToAdd = {
      id: id ?? Math.random().toString(16).slice(2),
      title,
      description,
    };

    setToasts((prevToasts) => {
      const existingToast = prevToasts.findIndex((prevToast) => {
        return prevToast.id === toastToAdd.id;
      });

      if (existingToast) {
        return [...prevToasts, toastToAdd];
      } else {
        return prevToasts.map((prevToast) => {
          if (prevToast.id === toastToAdd.id) {
            return toastToAdd;
          } else {
            return prevToast;
          }
        });
      }
    });

    return { id: toastToAdd.id, remove: () => removeToast(toastToAdd.id) };
  }, [removeToast]);

  return (
    <ToastContext.Provider value={{ toast, removeToast }}>
      <RadixToast.ToastProvider swipeDirection="right">
        {children}
        {toasts.map((toast) => {
          return (
            <Toast
              key={toast.id}
              title={toast.title}
              description={toast.description ?? ""}
            />
          );
        })}
        <ToastViewport />
      </RadixToast.ToastProvider>
    </ToastContext.Provider>
  );
}
