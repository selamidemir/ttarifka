import React from "react";
import { SafeAreaView, FlatList } from "react-native";
import Config from "react-native-config";
import Error from "../../components/Error";
import Loading from "../../components/Loading";
import MealCard from "../../components/MealCard/MealCard";

import useFetch from "../../hooks/useFetch";

import style from './Meals.styles';

function Meals({navigation, route}) {
    const {category} = route.params;
    const url = Config.API_MEALS_URL + category;
    const {error, loading, data} = useFetch(url);

    const renderMeal = ({item}) => <MealCard meal={item} navigation={navigation} />
    
    if (loading) return <Loading />
    if (error) return <Error error={error} />

    return (
        <SafeAreaView style={style.container}>
            <FlatList data={data.meals} renderItem={renderMeal} style={style.list} />
        </SafeAreaView>
    );
}

export default Meals;