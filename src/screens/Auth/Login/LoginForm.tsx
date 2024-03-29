import React, {FC, useContext} from 'react';
import {View, TextInput, TouchableOpacity, Text} from 'react-native';
import {Formik, Field, FormikProps} from 'formik';
import * as Yup from 'yup';
import {
  formStyles,
  submitButtonStyles,
  textFieldStyles,
} from 'screens/Auth/styles/AuthStyles';
import color from 'theme/color';
import {AuthContext} from 'context/AuthContext';

interface FormValues {
  email: string;
  password: string;
}

const initialValues: FormValues = {
  email: '',
  password: '',
};

const validationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().required('Password is required'),
});

const LoginForm: FC = () => {
  const {login} = useContext<any>(AuthContext);

  const handleSubmit = async ({email, password}: FormValues) => {
    if (email !== '' && password !== '') {
      login(email, password);
      console.log('Logged in successfully: ', email);
    }
  };

  const renderForm = (formikProps: FormikProps<FormValues>) => {
    return (
      <View style={formStyles.container}>
        <Field name="email">
          {({field, form}: any) => (
            <View style={textFieldStyles.container}>
              <TextInput
                placeholder="Email"
                placeholderTextColor={color.lightyGrey}
                style={textFieldStyles.field}
                keyboardType="email-address"
                onChangeText={form.handleChange('email')}
                onBlur={form.handleBlur('email')}
                value={field.value}
              />
              {form.touched.email && form.errors.email && (
                <Text style={textFieldStyles.errorText}>
                  {form.errors.email}
                </Text>
              )}
            </View>
          )}
        </Field>
        <Field name="password">
          {({field, form}: any) => (
            <View style={textFieldStyles.container}>
              <TextInput
                placeholder="Password"
                placeholderTextColor={color.lightyGrey}
                style={textFieldStyles.field}
                secureTextEntry={true}
                onChangeText={form.handleChange('password')}
                onBlur={form.handleBlur('password')}
                value={field.value}
              />
              {form.touched.password && form.errors.password && (
                <Text style={textFieldStyles.errorText}>
                  {form.errors.password}
                </Text>
              )}
            </View>
          )}
        </Field>
        <TouchableOpacity
          onPress={formikProps.handleSubmit}
          style={submitButtonStyles.container}>
          <Text style={submitButtonStyles.text}>Login</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}>
      {renderForm}
    </Formik>
  );
};

export default LoginForm;
