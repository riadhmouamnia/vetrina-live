import React, {FC} from 'react';
import {View, TextInput, TouchableOpacity, Text} from 'react-native';
import {Formik, Field, FormikProps} from 'formik';
import * as Yup from 'yup';
import {CreateAccountFormStyles, globalStyles} from 'styles/global';

interface FormValues {
  name: string;
  email: string;
  password: string;
}

const initialValues: FormValues = {
  name: '',
  email: '',
  password: '',
};

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().required('Password is required'),
});

const CreateAccountForm: FC = () => {
  const handleSubmit = (values: FormValues) => {
    console.log(values);
    // Submit form logic here
  };

  const renderForm = (formikProps: FormikProps<FormValues>) => {
    return (
      <View style={CreateAccountFormStyles.form}>
        <Field name="name">
          {({field, form}: any) => (
            <View style={CreateAccountFormStyles.fieldContainer}>
              <TextInput
                placeholder="Name and Surname"
                style={CreateAccountFormStyles.field}
                onChangeText={form.handleChange('name')}
                onBlur={form.handleBlur('name')}
                value={field.value}
              />
              {form.touched.name && form.errors.name && (
                <Text style={CreateAccountFormStyles.errorText}>
                  {form.errors.name}
                </Text>
              )}
            </View>
          )}
        </Field>
        <Field name="email">
          {({field, form}: any) => (
            <View style={CreateAccountFormStyles.fieldContainer}>
              <TextInput
                placeholder="Email"
                style={CreateAccountFormStyles.field}
                keyboardType="email-address"
                onChangeText={form.handleChange('email')}
                onBlur={form.handleBlur('email')}
                value={field.value}
              />
              {form.touched.email && form.errors.email && (
                <Text style={CreateAccountFormStyles.errorText}>
                  {form.errors.email}
                </Text>
              )}
            </View>
          )}
        </Field>
        <Field name="password">
          {({field, form}: any) => (
            <View style={CreateAccountFormStyles.fieldContainer}>
              <TextInput
                placeholder="Password"
                style={CreateAccountFormStyles.field}
                secureTextEntry={true}
                onChangeText={form.handleChange('password')}
                onBlur={form.handleBlur('password')}
                value={field.value}
              />
              {form.touched.password && form.errors.password && (
                <Text style={CreateAccountFormStyles.errorText}>
                  {form.errors.password}
                </Text>
              )}
            </View>
          )}
        </Field>
        <TouchableOpacity
          style={{...CreateAccountFormStyles.button, ...globalStyles.shadow}}
          onPress={formikProps.handleSubmit as any}>
          <Text style={CreateAccountFormStyles.buttonText}>
            Create your shop
          </Text>
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

export default CreateAccountForm;
