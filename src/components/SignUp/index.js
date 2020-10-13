import React from 'react';
import {Text, Button, ScrollView} from 'react-native';
import {Formik} from 'formik';

import Field from '../../common/index';
import {signUpValidationSchema} from '../../utils/validate';
import styles from '../AddQuestions/styles';

const FieldArray = () => {
  return (
    <ScrollView style={styles.p10}>
      <Text style={styles.header}>Sign Up Screen</Text>
      <Formik
        validationSchema={signUpValidationSchema}
        initialValues={{
          fullName: '',
          email: '',
          phoneNumber: '',
          password: '',
          confirmPassword: '',
        }}
        onSubmit={(values) => console.log(values)}>
        {({
          handleSubmit,
          isValid,
          values,
          handleChange,
          handleBlur,
          touched,
          errors,
        }) => (
          <>
            <Field
              onChangeText={handleChange('fullName')}
              onBlur={handleBlur('fullName')}
              value={values.fullName}
              label="fullName"
              touched={touched.fullName}
              error={errors.fullName}
            />
            <Field
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
              label="email"
              touched={touched.email}
              error={errors.email}
            />

            <Field
              onChangeText={handleChange('phoneNumber')}
              onBlur={handleBlur('phoneNumber')}
              value={values.phoneNumber}
              label="phoneNumber"
              touched={touched.phoneNumber}
              error={errors.phoneNumber}
              keyboardType="numeric"
              maxLength={10}
            />
            <Field
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
              label="password"
              touched={touched.password}
              error={errors.password}
              secureTextEntry
            />
            <Field
              onChangeText={handleChange('confirmPassword')}
              onBlur={handleBlur('confirmPassword')}
              value={values.confirmPassword}
              label="confirmPassword"
              touched={touched.confirmPassword}
              error={errors.confirmPassword}
              secureTextEntry
            />

            <Button
              disabled={!isValid || values.email === ''}
              onPress={handleSubmit}
              title="SIGN UP"
            />
          </>
        )}
      </Formik>
    </ScrollView>
  );
};

export default FieldArray;
