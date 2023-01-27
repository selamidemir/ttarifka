import React from 'react';
import {View, Text, Image, TouchableWithoutFeedback} from 'react-native';

import style from './MealCard.styles';

function MealCard({navigation, meal}) {
  const onSelect = () => {
    navigation.navigate('MealDetailsScreen', {mealID: meal.idMeal});
  };

  return (
    <TouchableWithoutFeedback onPress={onSelect}>
      <View style={style.container}>
        <Image style={style.image} source={{uri: meal.strMealThumb}} />
        <Text style={style.title}>{meal.strMeal}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
}

export default MealCard;
