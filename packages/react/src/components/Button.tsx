import { ComponentProps } from "react";
import { styled } from "../styles";

export interface ButtonProps extends ComponentProps<typeof Button> {}

export const Button = styled("button", {
  all: "unset",
  borderRadius: "$sm",
  fontSize: "$sm",
  fontWeight: "$medium",
  fontFamily: "$default",
  textAlign: "center",
  minWidth: 120,
  boxSizing: "border-box",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "$2",
  padding: "0 $4",

  cursor: "pointer",
  transition: "all 0.2s",

  svg: {
    width: "$4",
    height: "$4",
  },

  "&:disabled": {
    cursor: "not-allowed",
  },

  variants: {
    variant: {
      primary: {
        color: "$white",
        backgroundColor: "$main500",
        "&:not(:disabled):hover": {
          backgroundColor: "$main300",
        },
        "&:disabled": {
          backgroundColor: "$gray200",
        },
      },

      secondary: {
        color: "$main300",
        border: "2px solid $main500",
        "&:not(:disabled):hover": {
          backgroundColor: "$main500",
          color: "$white",
        },
        "&:disabled": {
          color: "$gray200",
          borderColor: "$gray200",
        },
      },

      tertiary: {
        color: "$gray100",
        "&:not(:disabled):hover": {
          color: "$white",
        },
        "&:disabled": {
          color: "$gray600",
        },
      },
    },

    size: {
      sm: {
        height: 38,
      },

      md: {
        height: 46,
      },
    },
  },

  defaultVariants: {
    variant: "primary",
    size: "md",
  },
});

Button.displayName = "Button"