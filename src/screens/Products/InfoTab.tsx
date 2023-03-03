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
