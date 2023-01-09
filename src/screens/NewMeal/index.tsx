import { KeyboardAvoidingView, ScrollView } from "react-native";
import { Container, Form, RowContainer, Title, Submit } from "./styles";
import { useNavigation } from "@react-navigation/native";

import { Button } from "@components/Button";
import { ChooseInDiet } from "@components/ChooseInDietButton";
import { Header } from "@components/Header";
import { Input } from "@components/Input";

export function NewMeal(){
  const navigation = useNavigation();

  const title = 'Continue assim!';
  const isInsideDiet = true;
  const subtitlePartA = 'Você continua ';
  const subtitlePartB = '. Muito bem!';
  const subtitlePartBold = 'dentro da dieta';

  function handleCreateMeal() {
    navigation.navigate('mealCreated', {title, isInsideDiet, subtitlePartA, subtitlePartB, subtitlePartBold})
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
              onChangeText={()=>{}}
            />
            <Input 
              label="Descrição" 
              size="LG" 
              textAlignVertical="top"
              onChangeText={()=>{}}
            />

            <RowContainer>
              <Input 
                label="Data" 
                style={{ marginRight: 10 }}
                keyboardType="numeric"
                placeholder="00/00/0000"
                onChangeText={()=>{}}
              />
              <Input 
                label="Hora" 
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
              <ChooseInDiet title="Sim" style={{ marginRight: 4}}/>
              <ChooseInDiet title="Não" type="SECONDARY" isActive style={{ marginLeft: 4}}/>
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