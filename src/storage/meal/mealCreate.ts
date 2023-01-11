import AsyncStorage from "@react-native-async-storage/async-storage";
import { AppError } from "@utils/AppError";

import { MealsProps } from "@components/Meals";

import { mealsGetAll } from "./mealsGetAll";
import { MEAL_COLLECTION } from "@storage/storageConfig";

export async function mealCreate(newMeal: MealsProps) {
  try {
    const storedMeals = await mealsGetAll();
    
    const dateExists = storedMeals.filter( meal => meal.title === newMeal.title);

    if( dateExists.length > 0 ){

      const mealExists = dateExists[0].data.filter( meal => meal.meal === newMeal.data[0].meal )

      if (mealExists.length > 0){
        throw new AppError('Essa refeição já existe neste dia, o nome da refeição deve ser diferente.')
      }

      storedMeals.map( meal => {
        if(meal.title === newMeal.title){
          meal.data.push(
            newMeal.data[0]
          )
        }
      })
    } else {
      storedMeals.push(newMeal)
    }

    const storage = JSON.stringify(storedMeals);

    await AsyncStorage.setItem(`${MEAL_COLLECTION}`, storage);

  } catch (error) {
    console.log(error)
  }

}