import React, {useState} from 'react';
import {View, Text, Button, ScrollView, TouchableOpacity} from 'react-native';
import {Formik} from 'formik';

import Field from '../../common';
import {validate} from '../../utils/validate';
import styles from './styles';

const FormiKForm = () => {
  const [addMore, handleAddMore] = useState([]);
  const [counter, setCounter] = useState(0);

  const addMoreFields = ({label, onChangeText, values}) => {
    addMore.push(
      <Field values={values} label={label} onChangeText={onChangeText} />,
    );
  };

  return (
    <View>
      <ScrollView keyboardShouldPersistTaps="always">
        <View style={styles.container}>
          <Text style={styles.header}>Create Account</Text>
          <Formik
            initialValues={{
              email: '',
              username: '',
              phone: '',
              password: '',
              address: '',
              // addressArray: ['Address'],
            }}
            validate={validate}
            onSubmit={(values) => console.log(values)}>
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              touched,
              errors,
            }) => {
              return (
                <>
                  <View>
                    <Field
                      onChangeText={handleChange('username')}
                      onBlur={handleBlur('username')}
                      value={values.username}
                      label="Username"
                      touched={touched.username}
                      error={errors.username}
                    />
                    <Field
                      onChangeText={handleChange('email')}
                      onBlur={handleBlur('email')}
                      value={values.email}
                      label="Email"
                      touched={touched.email}
                      error={errors.email}
                    />
                    <Field
                      onChangeText={handleChange('phone')}
                      onBlur={handleBlur('phone')}
                      value={values.phone}
                      label="Phone"
                      touched={touched.phone}
                      error={errors.phone}
                      keyboardType="numeric"
                      maxLength={10}
                    />
                    <Field
                      onChangeText={handleChange('address')}
                      onBlur={handleBlur('address')}
                      value={values.address}
                      label="Address"
                      touched={touched.address}
                      error={errors.address}
                    />
                    {/* <FieldArray
                      name="addressArray"
                      render={(arrayHelpers) => {
                        return (
                          <View>
                            {values.addressArray &&
                              values.addressArray.length > 0 &&
                              values.addressArray.map((filed, index) => {
                                return (
                                  <>
                                    <Filed
                                      touched={touched.filed}
                                      error={errors.filed}
                                      label={filed}
                                    />
                                  </>
                                );
                              })}
                            <View style={styles.filedView}>
                              <TouchableOpacity
                                onPress={() => {
                                  setCounter(counter + 1);
                                  arrayHelpers.push(`Address${counter + 1}`);
                                }}>
                                <Text>+ Add More</Text>
                              </TouchableOpacity>
                              {counter > 0 && (
                                <TouchableOpacity
                                  onPress={() => {
                                    setCounter(counter - 1);
                                    arrayHelpers.pop();
                                  }}>
                                  <Text>- Less</Text>
                                </TouchableOpacity>
                              )}
                            </View>
                          </View>
                        );
                      }}
                    /> */}

                    {addMore.map((filed, index) => {
                      return <View key={index}>{filed}</View>;
                    })}
                    <View style={styles.filedView}>
                      <TouchableOpacity
                        onPress={() => {
                          addMoreFields({
                            key: addMore.length,
                            label: `Address${counter + 1}`,
                            onChangeText: handleChange(`Address${counter + 1}`),
                            values: `Address${counter + 1}`,
                          });
                          setCounter(counter + 1);
                        }}>
                        <Text>+ Add More</Text>
                      </TouchableOpacity>
                      {counter > 0 && (
                        <TouchableOpacity
                          onPress={() => {
                            addMore.pop();
                            setCounter(counter - 1);
                          }}>
                          <Text>- Less</Text>
                        </TouchableOpacity>
                      )}
                    </View>
                    <Field
                      onChangeText={handleChange('password')}
                      onBlur={handleBlur('password')}
                      value={values.password}
                      label="Password"
                      touched={touched.password}
                      error={errors.password}
                    />
                  </View>
                  <Button
                    color="green"
                    onPress={() => handleSubmit(values)}
                    title="Submit"
                  />
                </>
              );
            }}
          </Formik>
        </View>
      </ScrollView>
    </View>
  );
};

export default FormiKForm;
