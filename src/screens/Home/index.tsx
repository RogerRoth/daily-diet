import { useCallback, useState } from 'react';
import { Alert, FlatList } from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { MEALS_SAMPLE } from '@utils/Meals'

import { mealsGetAll } from '@storage/meal/mealsGetAll';

import { Button } from "@components/Button";
import { HomeHeader } from "@components/HomeHeader";
import { Meals, MealsProps } from "@components/Meals";
import { MealItemProps } from "@components/MealItem";
import { Statistics, StatisticsType } from "@components/Statistics";
import { Loading } from '@components/Loading';

import { Container, Title } from "./styles";
import { ListEmpty } from '@components/ListEmpty';

export function Home(){
  const [isLoading, setIsLoading] = useState(true);
  const [mealsPercentage, setMealsPercentage] = useState<string>('0.00%');
  const [statisticsType, setStatisticsType] = useState<StatisticsType>('PRIMARY');

  const [mealsTotalCount, setMealsTotalCount] = useState<number>(0);
  const [mealsInDietCount, setMealsInDietCount] = useState<number>(0);
  const [mealsOutDietCount, setMealsOutDietCount] = useState<number>(0);
  const [mealsBestSequence, setMealsBestSequence] = useState<number>(0);

  const [meals, setMeals] = useState<MealsProps[]>([]);
  const navigation = useNavigation();

  function handleNewMeal() {
    navigation.navigate('newMeal')
  }

  function handleShowMeal(day: string, meal: MealItemProps) {
    navigation.navigate('meal', {
      mealName: meal.meal, 
      mealDescription: meal.description, 
      dateMeal: day, 
      hourMeal: meal.hour, 
      isInsideDiet: meal.isInsideOfDiet
    })
  }

  async function fetchMeals(){
    try {
      setIsLoading(true);
      
      const data = await mealsGetAll();
      
      if (data.length > 0){
        setMeals(data);
        let mealsTotalCount = 0
        let mealsOutDietCount = 0
        let mealsSequence = 0
        let mealsBestSequence = 0

        data.map( item => {
          mealsTotalCount += item.data.length;
          const mealsOutDiet = item.data.filter( meal => meal.isInsideOfDiet === false);

          mealsOutDietCount += mealsOutDiet.length;

          let lastMeal = true

          item.data.map( meal => {
            if(meal.isInsideOfDiet === true && lastMeal === false) {
              mealsSequence++
            }

            if(meal.isInsideOfDiet === true && lastMeal === true) {
              mealsSequence++
            } 
            
            if(meal.isInsideOfDiet === false) {
              mealsSequence = 0
            }
            lastMeal = meal.isInsideOfDiet
            
            if(mealsSequence > mealsBestSequence){
              mealsBestSequence = mealsSequence
            }

          })
        })

        const mealsInsideDiet =  100 - ((mealsOutDietCount / mealsTotalCount) * 100);
        const mealsIn = mealsTotalCount - mealsOutDietCount;

        setMealsTotalCount(mealsTotalCount);
        setMealsInDietCount(mealsIn);
        setMealsOutDietCount(mealsOutDietCount);
        setMealsBestSequence(mealsBestSequence);

        if(mealsInsideDiet <= 75){
          setStatisticsType('SECONDARY')
        } else {
          setStatisticsType('PRIMARY')
        }

        setMealsPercentage(`${mealsInsideDiet.toFixed(2)}%`)

      }

    } catch (error) {
      console.log(error)
      Alert.alert('Refeições', 'Não foi possível carregar as refeições.')
    } finally {
      setIsLoading(false);
    }
  }

  function handleAboutMeals(){
    navigation.navigate('aboutMeals', {
      mealsPercentage,
      statisticsType,
      mealsBestSequence,
      mealsTotalCount,
      mealsInDietCount,
      mealsOutDietCount,
    })
  }

  useFocusEffect(
    useCallback(() => {
      fetchMeals()
    }, [])
  )
  
  return(
    <Container>
      <HomeHeader userImageUrl='https://github.com/RogerRoth.png'/>

      <Statistics 
      title={mealsPercentage} 
      subtitle="das refeições dentro da dieta" 
      type={statisticsType}
      onEnter={handleAboutMeals}
      />

      <Title>
        Refeições
      </Title> 

      <Button title="Nova refeição" icon="plus" onPress={handleNewMeal}/>

      {
        isLoading ? <Loading /> :
        <FlatList 
          data={meals}
          keyExtractor={item => item.title}
          renderItem={({ item }) => (
            <Meals 
              title={item.title} 
              data={item.data} 
              onEnter={(value) => {handleShowMeal(item.title, value)}}
            />
          )}
          showsVerticalScrollIndicator={false}
          style={{ marginTop: 36 }}
          ListEmptyComponent={() => (
            <ListEmpty
              message='Que tal cadastrar a primeira refeição?'
            />
          )}
        />
      }

    </Container>
  )
}