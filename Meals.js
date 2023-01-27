import React from "react";
import { SafeAreaView, FlatList } from "react-native";

import sytle from './Meals.styles.js';

function Meals() {
    return (
        <SafeAreaView style={style.container}>
            <FlatList renderItem={renderMeal} data={data} style={style.list} />
        </SafeAreaView>
    )
}