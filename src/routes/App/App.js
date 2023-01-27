import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Categories from '../../pages/Categories';
import Meals from '../../pages/Meals';
import MealDetails from '../../pages/MealDetails/MealDetails';

const Stack = createNativeStackNavigator();

import sytle from './App.styles';

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="CategoriesScreen"
          component={Categories}
          options={{
            headerTitle: 'Categories',
            headerTitleAlign: 'center',
            headerTitleStyle: {
              color: 'orange',
              fontSize: 35,
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen
          name="MealsScreen"
          component={Meals}
          options={{
            headerTitle: 'Meal',
            headerTitleAlign: 'center',
            headerTitleStyle: {
              color: 'orange',
              fontSize: 35,
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen
          name="MealDetailsScreen"
          component={MealDetails}
          options={{
            headerTitle: 'Details',
            headerTitleAlign: 'center',
            headerTitleStyle: {
              color: 'orange',
              fontSize: 35,
              fontWeight: 'bold',
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
