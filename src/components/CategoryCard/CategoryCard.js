import React from 'react';
import {View, Text, Image, TouchableWithoutFeedback} from 'react-native';

import style from './CategoryCard.styles';

function CategoryCard({category, onSelect}) {
  // Filter categories
  if (category.strCategory.toLowerCase() === 'pork'.toLowerCase()) return;

  const handleSelect = () => {
    onSelect(category.strCategory);
  };

  return (
    <TouchableWithoutFeedback onPress={handleSelect}>
      <View style={style.container}>
        <Image source={{uri: category.strCategoryThumb}} style={style.thumb} />
        <Text style={style.title}>{category.strCategory}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
}

export default CategoryCard;
