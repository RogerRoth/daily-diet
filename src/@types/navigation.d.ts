export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined;
      aboutMeals: undefined;
      newMeal: undefined;
      mealCreated: {
        title: string;
        subtitlePartA: string;
        subtitlePartB: string;
        subtitlePartBold: string;
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