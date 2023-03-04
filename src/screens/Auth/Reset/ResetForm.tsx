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
}

const initialValues: FormValues = {
  email: '',
};

const validationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required'),
});

const ResetForm: FC = () => {
  const {reset} = useContext<any>(AuthContext);
  const handleSubmit = ({email}: FormValues) => {
    console.log('email has been sent to: ', email);
    reset(email);
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
        <TouchableOpacity
          style={submitButtonStyles.container}
          onPress={formikProps.handleSubmit}>
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

export default ResetForm;
