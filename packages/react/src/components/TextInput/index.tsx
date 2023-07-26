import { ComponentProps, ElementRef, Ref, forwardRef } from "react";
import { TextInputContainer, Prefix, Input } from "./styles";
import { Text } from "../Text";

export interface TextInputProps extends ComponentProps<typeof Input> {
  prefix?: string;
}

function TextInput_(props: TextInputProps, ref: Ref<ElementRef<typeof Input>>) {
  const { prefix, ...rest } = props;

  return (
    <TextInputContainer>
      {!!prefix && <Prefix>{prefix}</Prefix>}
      <Input {...rest} ref={ref} />
    </TextInputContainer>
  );
}

export const TextInput = forwardRef(TextInput_);

TextInput.displayName = "TextInput";
