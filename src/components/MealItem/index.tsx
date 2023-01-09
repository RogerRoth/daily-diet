import { TouchableOpacityProps } from 'react-native'
import { Container, Divider, Hour, Description, InsideOfDiet, MealItemStyleProps } from "./styles";

export type MealItemProps = TouchableOpacityProps & {
  hour: string;
  meal: string;
  description?: string;
  isInsideOfDiet: boolean;
};

export function MealItem({ hour, meal, isInsideOfDiet = true, ...rest }: MealItemProps){
  return(
    <Container {...rest}>
      <Hour>
        {hour}
      </Hour>
      <Divider />
      <Description>
        {meal}
      </Description>
      <InsideOfDiet isInsideOfDiet={isInsideOfDiet}/>
    </Container>
  )
};