import React from "react";
import { SafeAreaView, View, Image, Text, Button } from "react-native";
import Config from "react-native-config";

import Error from "../../components/Error";
import Loading from "../../components/Loading";

import useFetch from "../../hooks/useFetch";

import style from './MealDetails.styles';

function MealDetails({route}) {
    const mealID = route.params.mealID;
    const url = Config.API_MEAL_DESC + mealID;
    const { error, loading, data} = useFetch(url);

    if (error) <Error message={error} />
    if (loading) <Loading />

    const sdata = JSON.stringify(data);
    const ddata = JSON.parse(sdata);
    const meals = ddata.meals[0];
    

    return (
        <SafeAreaView style={style.container}>
            <Image style={style.image} source={{uri: meals.strMealThumb}} />
            <Text style={style.title}>{ meals.strMeal }</Text>
            <Text style={style.description}>{meals.strInstructions}</Text>
            <Button onPress={watchOnYoutube}>Watch on Youtube</Button>
        </SafeAreaView>
    )
}

export default MealDetails;