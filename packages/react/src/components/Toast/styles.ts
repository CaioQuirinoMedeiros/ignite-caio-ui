import * as RadixToast from "@radix-ui/react-toast";
import { keyframes, styled } from "../../styles";

const hide = keyframes({
  from: {
    opacity: 1,
  },
  to: {
    opacity: 0,
  },
});

const slideIn = keyframes({
  from: {
    transform: "translateX(100%)",
  },
  to: {
    transform: "translateX(0)",
  },
});

const swipeOut = keyframes({
  from: {
    transform: "translateX(var(--radix-toast-swipe-end-x))",
  },
  to: {
    transform: "translateX(100%)",
  },
});

export const ToastContainer = styled(RadixToast.Root, {
  backgroundColor: "$gray800",
  borderRadius: "$sm",
  borderColor: "$gray600",
  borderWidth: 1,
  padding: "$4 $5",
  color: "$white",
  display: "flex",
  flexDirection: "row",
  gap: "$2",
  fontFamily: "$default",
  minWidth: "22rem",
  maxWidth: "30rem",

  '&[data-state="open"]': {
    animation: `${slideIn} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  },
  '&[data-state="closed"]': {
    animation: `${hide} 100ms ease-in`,
  },
  '&[data-swipe="move"]': {
    transform: "translateX(var(--radix-toast-swipe-move-x))",
  },
  '&[data-swipe="cancel"]': {
    transform: "translateX(0)",
    transition: "transform 200ms ease-out",
  },
  '&[data-swipe="end"]': {
    animation: `${swipeOut} 100ms ease-out`,
  },
});

export const ToastContentContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  flex: 1,
  gap: "$2",
});

export const ToastTitle = styled(RadixToast.Title, {
  color: "$white",
  fontSize: "$xl",
  fontWeight: "$bold",
});

export const ToastDescription = styled(RadixToast.Description, {
  color: "$gray200",
  fontSize: "$sm",
  fontWeight: "$regular",
});

export const ToastClose = styled(RadixToast.Close, {
  all: "unset",
  alignSelf: "flex-start",
  color: "$gray200",
});
