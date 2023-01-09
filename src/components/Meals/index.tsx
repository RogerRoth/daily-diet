import { Container, Title } from "./styles";
import { FlatList } from 'react-native';
import { MealItem, MealItemProps } from "@components/MealItem";

export type MealsProps = {
  title: string;
  data: MealItemProps[];
};

type Props = MealsProps & {
  onEnter: ( meal:MealItemProps ) => void;
};

export function Meals({ title, data, onEnter }: Props){
  return(
    <Container>
      <Title>
        {title}
      </Title>

      <FlatList 
        data={data}
        keyExtractor={item => item.meal}
        renderItem={({ item }) => (
          <MealItem 
            hour={item.hour} 
            meal={item.meal} 
            isInsideOfDiet={item.isInsideOfDiet}
            onPress={() => { onEnter(item) }}
          />
        )}
        showsVerticalScrollIndicator={false}
      />
    </Container>
  )
};