import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Dashboard from 'screens/Dashboard';

const Stack = createNativeStackNavigator();

export default function DashboardStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        component={Dashboard}
        name="DashboardScreen"
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
