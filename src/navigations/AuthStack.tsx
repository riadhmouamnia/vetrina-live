import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from 'screens/Auth/Login';
import Register from 'screens/Auth/Register';
import Reset from 'screens/Auth/Reset';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Reset" component={Reset} />
      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  );
};

export default AuthStack;
