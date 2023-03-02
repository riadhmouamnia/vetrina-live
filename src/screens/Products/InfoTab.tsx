import {StyleSheet, Text, View, TextInput} from 'react-native';
import React from 'react';
import GeneralInformationForm from 'screens/Products/GeneralInformationForm';
import PriceForm from 'screens/Products/PriceForm';
import DetailsForm from 'screens/Products/DetailsForm';
import ProductTypeForm from 'screens/Products/ProductTypeForm';

export default function InfoTab() {
  return (
    <>
      <GeneralInformationForm />
      <PriceForm />
      <DetailsForm />
      <ProductTypeForm />
    </>
  );
}

const styles = StyleSheet.create({});
