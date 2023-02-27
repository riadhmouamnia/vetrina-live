import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Orders from 'screens/Orders';
import OrdersDetails from 'screens/Orders/OrdersDetails';

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
        component={OrdersDetails}
        name="Order details"
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
