import { useState } from 'react';
import { FlatList } from 'react-native';

import { Button } from "@components/Button";
import { HomeHeader } from "@components/HomeHeader";
import { Meals, MealsProps } from "@components/Meals";
import { Statistics } from "@components/Statistics";

import { Container, Title } from "./styles";

export function Home(){
  const [meals, setMeals] = useState<MealsProps[]>([]);
  
  return(
    <Container>
      <HomeHeader userImageUrl='https://github.com/RogerRoth.png'/>

      <Statistics title="90,86%" subtitle="das refeições dentro da dieta"/>

      <Title>
        Refeições
      </Title> 

      <Button title="Add" icon="edit-3" />

      <FlatList 
        data={meals}
        keyExtractor={item => item.title}
        renderItem={({ item }) => (
          <Meals 
            title={item.title} 
            data={item.data} 
            onEnter={() => {}}
          />
        )}
        showsVerticalScrollIndicator={false}
        style={{ marginTop: 36 }}
      />

    </Container>
  )
}