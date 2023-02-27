import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from 'screens/Auth/Login';
import Reset from 'screens/Auth/Reset';
import Signup from 'screens/Auth/Signup';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Reset" component={Reset} />
      <Stack.Screen name="Register" component={Signup} />
    </Stack.Navigator>
  );
};

export default AuthStack;
