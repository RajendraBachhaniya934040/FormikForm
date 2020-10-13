import {Formik} from 'formik';
import React, {useState} from 'react';
import {Button, Text, View} from 'react-native';

import {schema} from '../../utils/validate';
import Filed from '../../common';
import styles from './styles';

const AddQuestions = () => {
  const [count, setCount] = useState(1);

  return (
    <Formik
      initialValues={{questions: []}}
      validationSchema={schema}
      onSubmit={(values) => console.log(values)}>
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        setFieldValue,
        errors,
        touched,
      }) => {
        return (
          <View style={styles.p10}>
            <Text style={styles.header}>Add Your Questions</Text>
            {values.questions.map(({text, counter}, index) => {
              return (
                <>
                  <Filed
                    key={counter}
                    onChangeText={handleChange(`questions[${index}].text`)}
                    onBlur={handleBlur(`questions[${index}].text`)}
                    value={values.questions[index].text}
                    label={`Question${counter.toString()}`}
                  />
                </>
              );
            })}
            {count > 1 && (
              <View style={styles.mT10}>
                <Button
                  color="gray"
                  onPress={() => {
                    values.questions.pop();
                    setCount(count - 1);
                  }}
                  title="Remove"
                />
              </View>
            )}
            <View style={styles.mT10}>
              <Button
                color="brown"
                onPress={() => {
                  setFieldValue('questions', [
                    ...values.questions,
                    {text: '', counter: count},
                  ]);
                  setCount(count + 1);
                }}
                title="Add question"
              />
            </View>
            <View style={styles.mT10}>
              <Button color="green" onPress={handleSubmit} title="Submit" />
            </View>
          </View>
        );
      }}
    </Formik>
  );
};

export default AddQuestions;
