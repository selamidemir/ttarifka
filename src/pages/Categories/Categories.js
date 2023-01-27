import React from 'react';
import {SafeAreaView, FlatList} from 'react-native';
import Config from 'react-native-config';

import CategoryCard from '../../components/CategoryCard';
import Error from '../../components/Error';
import Loading from '../../components/Loading';

import useFetch from '../../hooks/useFetch';

import style from './Categories.styles';

function Categories({navigation}) {
  const {error, loading, data} = useFetch(Config.API_CATEGORIES_URL);

  const onSelect = category => {
    navigation.navigate('MealsScreen', {category});
  };

  const renderCategory = ({item}) => (
    <CategoryCard category={item} onSelect={onSelect} />
  );

    if (loading) return <Loading />;
  if (error) return <Error error={error} />

  return (
    <SafeAreaView style={style.container}>
      <FlatList
        renderItem={renderCategory}
        data={data.categories}
        style={style.container}
      />
    </SafeAreaView>
  );
}

export default Categories;
