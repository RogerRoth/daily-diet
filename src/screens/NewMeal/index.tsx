import { Alert, KeyboardAvoidingView, ScrollView } from "react-native";
import { Container, Form, RowContainer, Title, Submit } from "./styles";
import { useNavigation } from "@react-navigation/native";

import { AppError } from "@utils/AppError";

import { mealCreate } from "@storage/meal/mealCreate"

import { Button } from "@components/Button";
import { ChooseInDiet } from "@components/ChooseInDietButton";
import { Header } from "@components/Header";
import { Input } from "@components/Input";
import { useState } from "react";

export function NewMeal(){
  const [mealName, setMealName] = useState('');
  const [mealDescription, setMealDescription] = useState('');
  const [mealDate, setMealDate] = useState('');
  const [mealHour, setMealHour] = useState('');
  const [isInsideDiet, setIsInsideDiet] = useState(true);

  const navigation = useNavigation();

  async function handleCreateMeal() {
    try {
      await mealCreate({
        title: mealDate,
        data: [{
          meal: mealName,
          hour: mealHour,
          isInsideOfDiet: isInsideDiet,
          description: mealDescription
        }]
      })
  
      navigation.navigate('mealCreated', {isInsideDiet})

    } catch (error) {
      if(error instanceof AppError){
        Alert.alert('Nova Refeição', error.message)

      }else{
        Alert.alert('Nova Refeição', 'Não foi possível criar uma nova refeição.')
        console.log(error)
      }
    }
    
  }

  return(
    <Container>
      <Header size="SM" title="Nova refeição" type="TERTIARY"/>

      <Form>
        <ScrollView showsVerticalScrollIndicator={false}>
          <KeyboardAvoidingView
            behavior="padding"
            >
            <Input 
              label="Nome"
              value={mealName}
              onChangeText={setMealName}
            />
            <Input 
              label="Descrição" 
              value={mealDescription}
              size="LG" 
              textAlignVertical="top"
              onChangeText={setMealDescription}
            />

            <RowContainer>
              <Input 
                label="Data"
                value={mealDate}
                style={{ marginRight: 10 }}
                keyboardType="numeric"
                placeholder="00.00.0000"
                onChangeText={setMealDate}
              />
              <Input 
                label="Hora"
                value={mealHour}
                style={{ marginLeft: 10 }}
                keyboardType="default"
                placeholder="00:00"
                onChangeText={setMealHour}
              />
            </RowContainer>

            <Title>
              Está dentro da dieta?
            </Title>

            <RowContainer style={{ paddingBottom: 60 }}>
              <ChooseInDiet 
                title="Sim" 
                isActive={ isInsideDiet === true }
                style={{ marginRight: 4}} 
                onPress={() => {setIsInsideDiet(true)}}
              />
              <ChooseInDiet 
                title="Não" 
                type="SECONDARY" 
                isActive={ isInsideDiet === false }
                style={{ marginLeft: 4}} 
                onPress={() => {setIsInsideDiet(false)}}
              />
            </RowContainer>
          </KeyboardAvoidingView>
        </ScrollView>


        <Submit>
          <Button title="Cadastrar refeição" onPress={handleCreateMeal}/>
        </Submit>
      </Form>
    </Container>
  )
}