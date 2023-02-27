import React, {FC} from 'react';
import {View, TextInput, TouchableOpacity, Text} from 'react-native';
import {Formik, Field, FormikProps} from 'formik';
import * as Yup from 'yup';
import {
  CreateAccountFormStyles,
  globalStyles,
  LoginFormStyles,
} from 'styles/global';

interface FormValues {
  email: string;
}

const initialValues: FormValues = {
  email: '',
};

const validationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().required('Password is required'),
});

const ResetForm: FC = () => {
  const handleSubmit = (values: FormValues) => {
    console.log(values);
    // Submit form logic here
  };

  const renderForm = (formikProps: FormikProps<FormValues>) => {
    return (
      <View style={LoginFormStyles.form}>
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
        <TouchableOpacity
          style={{...CreateAccountFormStyles.button, ...globalStyles.shadow}}
          onPress={formikProps.handleSubmit as any}>
          <Text style={CreateAccountFormStyles.buttonText}>Login</Text>
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

export default ResetForm;
