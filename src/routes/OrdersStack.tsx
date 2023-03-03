import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Orders from 'screens/Orders';
import OrderInfo from 'screens/Orders/OrderInfo';

const Stack = createNativeStackNavigator();

export default function ProductsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        component={Orders}
        name="OrdersScreen"
        options={{headerShown: false}}
      />
      <Stack.Screen
        component={OrderInfo}
        name="Order info"
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
