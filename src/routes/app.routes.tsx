import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home } from '@screens/Home';
import { AboutMeals } from '@screens/AboutMeals';
import { NewMeal } from '@screens/NewMeal';

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes(){
  return(
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen 
        name="home"
        component={Home}
      />

      <Screen 
        name="aboutMeals"
        component={AboutMeals}
      />

      <Screen 
        name="newMeal"
        component={NewMeal}
      />
    </Navigator>
  )
}