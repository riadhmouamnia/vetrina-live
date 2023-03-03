import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Orders from 'screens/Orders';
import OrderDetails from 'screens/Orders/OrderDetails';

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
        component={OrderDetails}
        name="Order details"
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
