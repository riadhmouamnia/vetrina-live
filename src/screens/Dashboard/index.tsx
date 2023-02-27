import {StyleSheet, View} from 'react-native';
import React from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import {globalStyles} from 'styles/global';
import Cover from 'screens/Dashboard/components/Cover';
import ConfigCard from 'screens/Dashboard/components/ConfigCard';
import VisitorsCard from 'screens/Dashboard/components/VisitorsCard';
import OrdersCard from 'screens/Dashboard/components/OrdersCard';
import LatestNewsCard from 'screens/Dashboard/components/LatestNewsCard';
import ExtensionsCard from 'screens/Dashboard/components/ExtensionsCard';
import PositiveReviewCard from 'screens/Dashboard/components/PositiveReviewCard';
import CustomHeader from 'components/CustomHeader';
import CustomerSupportCard from 'screens/Dashboard/components/CustomerSupportCard';
import InviteFriendCard from 'screens/Dashboard/components/InviteFriendCard';
import {DashboardStyles} from 'screens/Dashboard/styles/DashboardStyles';

const Dashboard = ({navigation}: any) => {
  return (
    <View>
      <CustomHeader title="Dashboard" navigation={navigation} />
      <ScrollView>
        <View style={DashboardStyles.wrapper}>
          <Cover />
          {/* <View style={globalStyles.container}> */}
          <View style={DashboardStyles.cardContainer}>
            <ConfigCard />
            <VisitorsCard />
            <OrdersCard />
            <LatestNewsCard />
            <ExtensionsCard />
            <PositiveReviewCard />
            <CustomerSupportCard />
            <InviteFriendCard />
          </View>
          {/* </View> */}
        </View>
      </ScrollView>
    </View>
  );
};

export default Dashboard;
const styles = StyleSheet.create({});
