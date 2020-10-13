import React from 'react';
import {View, TextInput, Text} from 'react-native';
import {isEmpty} from 'lodash';

import styles from './styles';

const Filed = ({label, touched, error, ...props}) => {
console.log('gahghas',error, touched)
  return (
    <View style={{marginVertical: 5}}>
      <Text>{label}</Text>
      <View style={styles.containerStyle}>
        <TextInput placeholder={label} style={styles.input} {...props} />
      </View>
      <Text style={styles.errorInput}>{touched && error}</Text>
    </View>
  );
};

export default Filed;
