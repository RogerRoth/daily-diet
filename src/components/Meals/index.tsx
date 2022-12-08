import { Container, Title } from "./styles";
import { FlatList } from 'react-native';
import { MealItem, MealItemProps } from "@components/MealItem";

export type MealsProps = {
  title: string;
  data: MealItemProps[];
};

type Props = MealsProps & {
  onEnter: ( itemDescription:string ) => void;
};

export function Meals({ title, data, onEnter }: Props){
  return(
    <Container>
      <Title>
        {title}
      </Title>

      <FlatList 
        data={data}
        keyExtractor={item => item.description}
        renderItem={({ item }) => (
          <MealItem 
            hour={item.hour} 
            description={item.description} 
            isInsideOfDiet={item.isInsideOfDiet}
            onPress={() => { onEnter(item.description) }}
          />
        )}
        showsVerticalScrollIndicator={false}
      />
    </Container>
  )
};