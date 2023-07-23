import { ComponentProps } from "react";
import { styled } from "./styles";

export type ButtonProps = ComponentProps<typeof Button>;

export const Button = styled("button", {
  fontFamily: "$default",
  backgroundColor: "$main300",
  borderRadius: "$sm",
  border: 0,
  fontWeight: "$bold",
  color: "$white",

  variants: {
    size: {
      small: {
        fontSize: "$sm",
        padding: "$2 $4",
      },
      big: {
        fontSize: "$lg",
        padding: "$3 $6",
      },
    },
  },

  defaultVariants: {
    size: "small",
  },
});
