import { useState } from "react";
import { Alert, KeyboardAvoidingView, ScrollView } from "react-native";
import { Container, Form, RowContainer, Title, Submit } from "./styles";
import { useNavigation, useRoute } from "@react-navigation/native";

import { Button } from "@components/Button";
import { ChooseInDiet } from "@components/ChooseInDietButton";
import { Header } from "@components/Header";
import { Input } from "@components/Input";
import { MealsProps } from "@components/Meals";

import { mealEdit } from "@storage/meal/mealEdit";

import { AppError } from "@utils/AppError";

type RouteParams = {
  mealName: string;
  mealDescription?: string;
  dateMeal: string;
  hourMeal: string;
  isInsideDiet: boolean;
};

export function EditMeal(){
  const navigation = useNavigation();
  const route = useRoute();

  const { mealName, mealDescription, dateMeal, hourMeal, isInsideDiet } = route.params as RouteParams;

  const [name, setName] = useState<string>(mealName);
  const [description, setDescription] = useState<string | undefined>(mealDescription);
  const [date, setDate] = useState<string>(dateMeal);
  const [hour, setHour] = useState<string>(hourMeal);
  const [editIsInsideDiet, setEditIsInsideDiet] = useState<boolean>(isInsideDiet);

  async function handleSaveMeal() {

    try {
      const oldMeal = {
        title: dateMeal,
        data: [{
          meal: mealName,
          hour: hourMeal,
          description: mealDescription,
          isInsideOfDiet: isInsideDiet
        }]
      } as MealsProps
  
      const newMeal = {
        title: date,
        data: [{
          meal: name,
          hour: hour,
          description: description,
          isInsideOfDiet: editIsInsideDiet
        }]
      } as MealsProps
  
      await mealEdit(newMeal, oldMeal)
  
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

  return(
    <Container>
      <Header size="SM" title="Editar refeição" type="TERTIARY"/>

      <Form>
        <ScrollView showsVerticalScrollIndicator={false}>
          <KeyboardAvoidingView
            behavior="padding"
            >
            <Input 
              label="Nome"
              value={name}
              onChangeText={setName}
            />
            <Input 
              label="Descrição" 
              size="LG" 
              value={description}
              textAlignVertical="top"
              onChangeText={setDescription}
            />

            <RowContainer>
              <Input 
                label="Data" 
                value={date}
                style={{ marginRight: 10 }}
                keyboardType="numeric"
                placeholder="00.00.0000"
                onChangeText={setDate}
              />
              <Input 
                label="Hora" 
                value={hour}
                style={{ marginLeft: 10 }}
                keyboardType="numbers-and-punctuation"
                placeholder="00:00"
                onChangeText={setHour}
              />
            </RowContainer>

            <Title>
              Está dentro da dieta?
            </Title>

            <RowContainer style={{ paddingBottom: 60 }}>
              <ChooseInDiet 
                title="Sim" 
                isActive={editIsInsideDiet}
                style={{ marginRight: 4}}
                onPress={() => {setEditIsInsideDiet(true)}}
              />
              <ChooseInDiet 
                title="Não" 
                isActive={!editIsInsideDiet} 
                type="SECONDARY" 
                style={{ marginLeft: 4}}
                onPress={() => {setEditIsInsideDiet(false)}}
              />
            </RowContainer>
          </KeyboardAvoidingView>
        </ScrollView>


        <Submit>
          <Button title="Salvar alterações" onPress={handleSaveMeal}/>
        </Submit>
      </Form>
    </Container>
  )
}