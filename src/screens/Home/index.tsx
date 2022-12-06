import { useState } from 'react';
import { FlatList } from 'react-native';

import { Button } from "@components/Button";
import { HomeHeader } from "@components/HomeHeader";
import { Meals, MealsProps } from "@components/Meals";
import { Statistics } from "@components/Statistics";

import { Container, Title } from "./styles";

export function Home(){
  const [meals, setMeals] = useState<MealsProps[]>([
    {
      title: '12.08.22',
      data: [{
        hour: "20:00",
        description: "X-tudo 1",
        isInsideOfDiet: true,
      },
      {
        hour: "20:00",
        description: "X-tudo 2",
        isInsideOfDiet: false,
      },
      {
        hour: "20:00",
        description: "X-tudo 3",
        isInsideOfDiet: false,
      },
      {
        hour: "20:00",
        description: "X-tudo 4",
        isInsideOfDiet: false,
      },
      {
        hour: "20:00",
        description: "X-tudo 5",
        isInsideOfDiet: false,
      }]
    },
    {
      title: '11.08.22',
      data: [{
        hour: "20:00",
        description: "X-tudo 1",
        isInsideOfDiet: true,
      },
      {
        hour: "20:00",
        description: "X-tudo 2",
        isInsideOfDiet: false,
      },
      {
        hour: "20:00",
        description: "X-tudo 3",
        isInsideOfDiet: false,
      },
      {
        hour: "20:00",
        description: "X-tudo 4",
        isInsideOfDiet: false,
      },
      {
        hour: "20:00",
        description: "X-tudo 5",
        isInsideOfDiet: false,
      },
      {
        hour: "20:00",
        description: "X-tudo 6",
        isInsideOfDiet: false,
      }]
    }
  ]);
  
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