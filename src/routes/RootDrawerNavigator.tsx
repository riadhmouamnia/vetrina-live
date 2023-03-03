import DashboardStack from 'routes/DashboardStack';
import ProductsStack from 'routes/ProductsStack';
import OrdersStack from 'routes/OrdersStack';
import Payment from 'screens/Payment';
import Subscription from 'screens/Subscription';
import {createDrawerNavigator} from '@react-navigation/drawer';
import CustomDrawer from 'components/CustomDrawer';
import {Icon} from 'react-native-elements';
import color from 'theme/color';

const Drawer = createDrawerNavigator();

export default function RootDrawerNavigator() {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      initialRouteName="Dashboard"
      screenOptions={{
        headerShown: false,
        headerTitleAlign: 'left',
        drawerLabelStyle: {
          marginLeft: -20,
          fontFamily: 'SourceSansPro-SemiBold',
          fontSize: 15,
        },
        // drawerActiveTintColor: color.primaryBlack,
      }}>
      <Drawer.Screen
        name="Dashboard"
        component={DashboardStack}
        options={{
          drawerIcon: () => (
            <Icon
              name="grid-outline"
              type="ionicon"
              color={color.secondaryBlack}
              size={25}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Products"
        component={ProductsStack}
        options={{
          drawerIcon: () => (
            <Icon
              name="shirt-outline"
              type="ionicon"
              color={color.secondaryBlack}
              size={25}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Payment"
        component={Payment}
        options={{
          drawerIcon: () => (
            <Icon
              name="card-outline"
              type="ionicon"
              color={color.secondaryBlack}
              size={25}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Orders"
        component={OrdersStack}
        options={{
          drawerIcon: () => (
            <Icon
              name="receipt-outline"
              type="ionicon"
              color={color.secondaryBlack}
              size={25}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Subscription"
        component={Subscription}
        options={{
          drawerIcon: () => (
            <Icon
              name="cash-outline"
              type="ionicon"
              color={color.secondaryBlack}
              size={25}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}
