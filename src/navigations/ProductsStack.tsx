import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Products from 'screens/Products';
import AddProduct from 'screens/Products/AddProduct';

const Stack = createNativeStackNavigator();

export default function ProductsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        component={Products}
        name="ProductsScreen"
        options={{headerShown: false}}
      />
      <Stack.Screen
        component={AddProduct}
        name="Add Product"
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
