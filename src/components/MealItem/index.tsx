import { TouchableOpacityProps } from 'react-native'
import { Container, Divider, Hour, Description, InsideOfDiet, MealItemStyleProps } from "./styles";

export type MealItemProps = TouchableOpacityProps & {
  hour: string;
  description: string;
  isInsideOfDiet: boolean;
}

export function MealItem({ hour, description, isInsideOfDiet = true, ...rest }: MealItemProps){
  return(
    <Container {...rest}>
      <Hour>
        {hour}
      </Hour>
      <Divider />
      <Description>
        {description}
      </Description>
      <InsideOfDiet isInsideOfDiet={isInsideOfDiet}/>
    </Container>
  )
}