import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Categories from "../../pages/Categories";

const Stack = createNativeStackNavigator();

import sytle from './App.styles';

function App() {
    return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="CategoriesScreen" component={Categories} />
        </Stack.Navigator>
    </NavigationContainer>
    )
}

export default App;