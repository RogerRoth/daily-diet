import { useRoute, useNavigation } from "@react-navigation/native";

import { Button } from "@components/Button";
import { Header } from "@components/Header";
import { Tag } from "@components/Tag";

import { Container, Form, MealName, DateHourTitle, Description, ButtonView } from "./styles";
import { mealRemoveByName } from "@storage/meal/mealRemoveByName";
import { Alert } from "react-native";
import { AppError } from "@utils/AppError";

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

  async function mealRemove() {
    try {
      await mealRemoveByName(mealName, dateMeal)

      navigation.navigate('home')
    } catch (error) {
      if(error instanceof AppError){
        Alert.alert('Remover Refeição', error.message)

      }else{
        Alert.alert('Remover Refeição', 'Não foi possível remover a refeição.')
        console.log(error)
      }
    }
  }

  async function handleMealRemove(){
    Alert.alert(
      'Remover',
      'Deseja realmente excluir o registro da refeição?',
      [
        { text: 'Cancelar', style: 'cancel'},
        { text: 'Sim, excluir', onPress: () => mealRemove()}
      ]
    )
  }

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
          <Button icon="trash-2" title="Excluir refeição" type="SECONDARY" onPress={handleMealRemove} style={{ marginTop: 9 }}/>
        </ButtonView>
      </Form>
    </Container>
  )
};