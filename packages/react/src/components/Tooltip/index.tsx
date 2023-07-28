import * as RadixTooltip from "@radix-ui/react-tooltip";

import { TooltipContent, TooltipArrow } from "./styles";
import { ComponentProps } from "react";

export interface TooltipProps extends ComponentProps<typeof TooltipContent> {
  tooltipText: string;
}

export function Tooltip(props: TooltipProps) {
  const { children, tooltipText, ...rest } = props;

  return (
    <RadixTooltip.Root>
      <RadixTooltip.Trigger asChild>{children}</RadixTooltip.Trigger>
      <RadixTooltip.Portal>
        <TooltipContent {...rest}>
          {tooltipText}
          <TooltipArrow />
        </TooltipContent>
      </RadixTooltip.Portal>
    </RadixTooltip.Root>
  );
}
