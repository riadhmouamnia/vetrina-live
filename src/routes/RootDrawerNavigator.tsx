import DashboardStack from 'routes/DashboardStack';
import ProductsStack from 'routes/ProductsStack';
import OrdersStack from 'routes/OrdersStack';
import Payment from 'screens/Payment';
import Subscription from 'screens/Subscription';
import {createDrawerNavigator} from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

export default function RootDrawerNavigator() {
  return (
    <Drawer.Navigator
      initialRouteName="Dashboard"
      screenOptions={{
        headerShown: false,
        headerStyle: {backgroundColor: 'coral'},
        headerTitleAlign: 'left',
      }}>
      <Drawer.Screen name="Dashboard" component={DashboardStack} />
      <Drawer.Screen name="Products" component={ProductsStack} />
      <Drawer.Screen name="Payment" component={Payment} />
      <Drawer.Screen name="Orders" component={OrdersStack} />
      <Drawer.Screen name="Subscription" component={Subscription} />
    </Drawer.Navigator>
  );
}
