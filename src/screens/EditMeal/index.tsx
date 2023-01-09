import { KeyboardAvoidingView, ScrollView } from "react-native";
import { Container, Form, RowContainer, Title, Submit } from "./styles";
import { useNavigation, useRoute } from "@react-navigation/native";

import { Button } from "@components/Button";
import { ChooseInDiet } from "@components/ChooseInDietButton";
import { Header } from "@components/Header";
import { Input } from "@components/Input";
import { useState } from "react";

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

  function handleSaveMeal() {
    navigation.navigate('home')
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
              onChangeText={()=>{}}
            />
            <Input 
              label="Descrição" 
              size="LG" 
              value={description}
              textAlignVertical="top"
              onChangeText={()=>{}}
            />

            <RowContainer>
              <Input 
                label="Data" 
                value={date}
                style={{ marginRight: 10 }}
                keyboardType="numeric"
                placeholder="00/00/0000"
                onChangeText={()=>{}}
              />
              <Input 
                label="Hora" 
                value={hour}
                style={{ marginLeft: 10 }}
                keyboardType="numbers-and-punctuation"
                placeholder="00:00"
                onChangeText={()=>{}}
              />
            </RowContainer>

            <Title>
              Está dentro da dieta?
            </Title>

            <RowContainer style={{ paddingBottom: 60 }}>
              <ChooseInDiet title="Sim" isActive={editIsInsideDiet} style={{ marginRight: 4}}/>
              <ChooseInDiet title="Não" type="SECONDARY" isActive={!editIsInsideDiet} style={{ marginLeft: 4}}/>
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