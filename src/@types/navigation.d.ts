export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined;
      newMeal: undefined;
      aboutMeals: {
        mealsPercentage: string;
        statisticsType: string;
        mealsBestSequence: number;
        mealsTotalCount: number;
        mealsInDietCount: number;
        mealsOutDietCount: number;
      };
      mealCreated: {
        isInsideDiet: boolean;
      };
      meal: {
        mealName: string;
        mealDescription: string | undefined;
        dateMeal: string;
        hourMeal: string;
        isInsideDiet: boolean;
      };
      editMeal: {
        mealName: string;
        mealDescription: string | undefined;
        dateMeal: string;
        hourMeal: string;
        isInsideDiet: boolean;
      };
    }
  }
}