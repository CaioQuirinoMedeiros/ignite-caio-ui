import * as React from "react";
import * as RadixToast from "@radix-ui/react-toast";
import { styled } from "../../styles";

import {
  ToastClose,
  ToastContainer,
  ToastContentContainer,
  ToastDescription,
  ToastTitle,
} from "./styles";
import { X } from "phosphor-react";

export interface ToastProps
  extends React.ComponentProps<typeof RadixToast.Root> {
  title: string;
  description: string;
  action?: React.ReactNode;
}

export function Toast(props: ToastProps) {
  const { title, description, action: Action, ...rest } = props;

  return (
    <ToastContainer {...rest}>
      <ToastContentContainer>
        <ToastTitle>{title}</ToastTitle>
        <ToastDescription>{description}</ToastDescription>
      </ToastContentContainer>
      {Action}
      <ToastClose>
        <X size={20} />
      </ToastClose>
    </ToastContainer>
  );
}

export const ToastViewport = styled(RadixToast.Viewport, {
  position: "fixed",
  bottom: "$6",
  right: "$6",
  display: "flex",
  flexDirection: "column",
  gap: "$2",
  maxWidth: "100vw",
  paddingInlineStart: 0,
  maxHeight: "100vh",
  margin: 0,
  listStyle: "none",
  zIndex: 99999,
  outline: "none",
});

export const ToastAction = styled(RadixToast.Action, {});
