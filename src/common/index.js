import React from 'react';
import {View, TextInput, Text} from 'react-native';

import styles from './styles';

const Field = ({label, touched, error, ...props}) => {
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

export default Field;
