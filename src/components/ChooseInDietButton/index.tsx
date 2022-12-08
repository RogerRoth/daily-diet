import { TouchableOpacityProps } from "react-native";
import { Container, Icon, Title, ChooseInDietProps } from "./styles";

type Props = TouchableOpacityProps & ChooseInDietProps & {
  title: string;
};

export function ChooseInDiet({ title, type='PRIMARY', isActive=false, ...rest }: Props){
  return (
    <Container 
      type={type} 
      isActive={isActive} 
      {...rest}
    >
      <Icon type={type}/>

      <Title>
        {title}
      </Title>
    </Container>
  )
};