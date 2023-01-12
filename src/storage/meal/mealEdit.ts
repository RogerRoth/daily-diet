import { MealsProps } from "@components/Meals";

import { mealRemoveByName } from "./mealRemoveByName";
import { mealCreate } from "./mealCreate";

export async function mealEdit(newMeal: MealsProps, oldMeal: MealsProps) {
  try {
    await mealRemoveByName(oldMeal.data[0].meal, oldMeal.title);
    await mealCreate(newMeal);

  } catch (error) {
    throw error
  }
}