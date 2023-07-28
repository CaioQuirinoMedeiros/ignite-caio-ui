import * as RadixTooltip from "@radix-ui/react-tooltip";
import { ToastProvider } from "./components/Toast/ToastProvider";

export interface ProviderProps {
  children: React.ReactNode;
}

export function Provider(props: ProviderProps) {
  const { children } = props;

  return (
    <RadixTooltip.Provider>
      <ToastProvider>{children}</ToastProvider>
    </RadixTooltip.Provider>
  );
}
