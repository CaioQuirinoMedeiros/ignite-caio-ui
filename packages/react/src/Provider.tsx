import * as RadixTooltip from "@radix-ui/react-tooltip";

export interface ProviderProps {
  children: React.ReactNode;
}

export function Provider(props: ProviderProps) {
  const { children } = props;

  return <RadixTooltip.Provider>{children}</RadixTooltip.Provider>;
}
