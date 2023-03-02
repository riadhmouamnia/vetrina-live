import {StyleSheet, Text, View, TextInput} from 'react-native';
import React from 'react';
import GeneralInformationForm from 'screens/Products/GeneralInformationForm';
import PriceCard from 'screens/Products/PriceCard';

export default function Info() {
  return (
    <>
      <GeneralInformationForm />
      <PriceCard />
    </>
  );
}

const styles = StyleSheet.create({});
