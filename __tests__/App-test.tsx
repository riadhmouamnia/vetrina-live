/**
 * @format
 */

import 'react-native';
import React from 'react';

// Note: test renderer must be required after react-native.
import renderer, {act} from 'react-test-renderer';
import PaymentsCard from 'screens/Payment/PaymentsCard';
import {PaypallIcon} from 'components/Icons';
import {CardStyles} from 'screens/Payment/PaymentStyles';
import PlanCard from 'screens/Subscription/PlanCard';
import Subscription from 'screens/Subscription';

//PaymentCard UI testing.
it('renders correctly', () => {
  renderer.create(<PaymentsCard name="test card" icon={<PaypallIcon />} />);
});

describe('PaymentCard', () => {
  it('toggles the disabled state when the button is pressed', () => {
    const component = renderer.create(
      <PaymentsCard name="test card" icon={<PaypallIcon />} />,
    );
    const button = component.root.findByProps({testID: 'PaymentCard'});
    const text = component.root.findByProps({children: 'Disabled'});

    expect(button.props.style).toEqual(CardStyles.buttornDisabled); // check initial state

    act(() => {
      button.props.onPress();
    });
    expect(button.props.style).toEqual(CardStyles.buttornEnabled); // check new state
    expect(text.props.style).toEqual(CardStyles.textEnabled);

    act(() => {
      button.props.onPress();
    });
    expect(button.props.style).toEqual(CardStyles.buttornDisabled); // check back to initial state
    expect(text.props.style).toEqual(CardStyles.textDisabled);
  });
});

//Subscription >> PlanCard UI:
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
