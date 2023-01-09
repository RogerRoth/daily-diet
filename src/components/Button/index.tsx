import { TouchableOpacityProps } from "react-native";
import { Container, Title, Icon, ButtonTypeStyleProps } from "./styles";
import { Feather } from '@expo/vector-icons';

type Props = TouchableOpacityProps & {
  title: string;
  type?: ButtonTypeStyleProps;
  icon?: keyof typeof Feather.glyphMap;
};

export function Button({ title, type='PRIMARY', icon, ...rest }: Props) {
  return(
    <Container type={type} {...rest}>
      { icon && 
        <Icon name={icon} type={type}/> 
      }
      
      <Title type={type}>
        {title}
      </Title>
    </Container>
  )
};