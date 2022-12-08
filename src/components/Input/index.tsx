import { MaskedTextInputProps } from "react-native-mask-text";
import { TextInput, TextInputProps, TextProps } from "react-native";
import { Container, InputCustom, Label, InputSizeStyleProps } from "./styles";

type Props = TextInputProps & TextProps & {
  label: string;
  size?: InputSizeStyleProps;
  inputRef?: React.RefObject<TextInput>;
};

export function Input({ label, size = 'MD', inputRef, ...rest }: Props){
  return(
    <Container size={size}>
      <Label {...rest}>
        {label}
      </Label>

      <InputCustom size={size} ref={inputRef} {...rest}/>
    </Container>
  )
};