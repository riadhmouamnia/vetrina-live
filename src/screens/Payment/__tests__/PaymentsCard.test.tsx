import 'react-native';
import React from 'react';
import PaymentsCard from 'screens/Payment/PaymentsCard';
import {PaypallIcon} from 'components/Icons';
import {CardStyles} from 'screens/Payment/PaymentStyles';
import renderer, {act} from 'react-test-renderer';

//PaymentCard UI testing.
describe('PaymentCard', () => {
  it('renders correctly', () => {
    renderer.create(<PaymentsCard name="test card" icon={<PaypallIcon />} />);
  });

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
