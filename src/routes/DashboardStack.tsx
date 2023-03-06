import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Dashboard from 'screens/Dashboard';
import LatestNews from 'screens/Dashboard/components/LatestNews';

const Stack = createNativeStackNavigator();

export default function DashboardStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        component={Dashboard}
        name="DashboardScreen"
        options={{headerShown: false}}
      />
      <Stack.Screen
        component={LatestNews}
        name="Latest news"
        options={{headerShown: true}}
      />
    </Stack.Navigator>
  );
}
