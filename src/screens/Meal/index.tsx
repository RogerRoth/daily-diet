import { useRoute, useNavigation } from "@react-navigation/native";

import { Button } from "@components/Button";
import { Header } from "@components/Header";
import { Tag } from "@components/Tag";

import { Container, Form, MealName, DateHourTitle, Description, ButtonView } from "./styles";

export type RouteParams = {
  mealName: string;
  mealDescription?: string;
  dateMeal: string;
  hourMeal: string;
  isInsideDiet: boolean;
};

export function Meal(){
  const navigation = useNavigation();
  const route = useRoute();

  const { mealName, mealDescription, dateMeal, hourMeal, isInsideDiet } = route.params as RouteParams;

  function handleEditMeal(){
    navigation.navigate('editMeal', {
      mealName,
      mealDescription,
      dateMeal,
      hourMeal,
      isInsideDiet
    })
  }

  return(
    <Container isInsideDiet={isInsideDiet}>
      <Header size="SM" title="Refeição" type={isInsideDiet ? 'PRIMARY' : 'SECONDARY'}/>

      <Form>
        <MealName>
          {mealName}
        </MealName>
        <Description>
          {mealDescription}
        </Description>
        <DateHourTitle>
          Data e hora
        </DateHourTitle>
        <Description>
          {dateMeal} às {hourMeal}
        </Description>

        <Tag isInsideDiet={isInsideDiet} title={isInsideDiet ? "dentro da dieta" : "fora da dieta"}/>

        <ButtonView>
          <Button icon="edit-3" title="Editar refeição" onPress={handleEditMeal}/>
          <Button icon="trash-2" title="Excluir refeição" type="SECONDARY" style={{ marginTop: 9 }}/>
        </ButtonView>
      </Form>
    </Container>
  )
};