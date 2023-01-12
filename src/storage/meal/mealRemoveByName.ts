import AsyncStorage from "@react-native-async-storage/async-storage";
import { mealsGetAll } from "./mealsGetAll";

import { MEAL_COLLECTION } from "@storage/storageConfig";

export async function mealRemoveByName(mealName: string,  dateMeal: string) {
  try {
    let storagedMeals = await mealsGetAll();

    const indexOfData = storagedMeals.map( mealObj => mealObj.title).indexOf(dateMeal)

    const indexOfMeal = storagedMeals[indexOfData].data.map( meal => meal.meal).indexOf(mealName)

    storagedMeals[indexOfData].data.splice(indexOfMeal, 1)

    if(storagedMeals[indexOfData].data.length < 1){
      storagedMeals.splice(indexOfData, 1)
    }

    if(storagedMeals.length === 0){
      await AsyncStorage.removeItem(MEAL_COLLECTION)
    } else {
      await AsyncStorage.setItem(MEAL_COLLECTION,JSON.stringify(storagedMeals))
    }

  } catch (error) {
    throw error
  }
}