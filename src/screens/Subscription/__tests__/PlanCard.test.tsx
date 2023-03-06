import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import PlanCard from 'screens/Subscription/PlanCard';

//Subscription >> PlanCard UI:
describe('PaymentCard', () => {
  it('renders correctly', () => {
    renderer.create(
      <PlanCard
        title="Test card"
        productsNum="150 prod"
        promo="1 month"
        price={20}
      />,
    );
  });
});
