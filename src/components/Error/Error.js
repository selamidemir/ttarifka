import React from 'react';
import {View, Text} from 'react-native';

import style from './Error.styles';

function Error({error}) {
  return (
    <View style={style.container}>
      <Text style={style.title}>Error</Text>
      <Text style={style.message}>{error}</Text>
    </View>
  );
}

export default Error;
