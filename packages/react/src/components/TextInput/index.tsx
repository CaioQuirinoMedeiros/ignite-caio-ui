import { ComponentProps } from "react";
import { TextInputContainer, Prefix, Input } from "./styles";
import { Text } from "../Text";

export interface TextInputProps extends ComponentProps<typeof Input> {
  prefix?: string;
}

export function TextInput(props: TextInputProps) {
  const { prefix, ...rest } = props;

  return (
    <TextInputContainer>
      {!!prefix && <Prefix>{prefix}</Prefix>}
      <Input {...rest} />
    </TextInputContainer>
  );
}
