import {Text, View} from 'react-native';
import React, {useState} from 'react';
import PlanCard from 'screens/Subscription/PlanCard';
import CustomHeader from 'components/CustomHeader';
import {SubscriptionStyles} from 'screens/Subscription/SubscriptionStyles';
import {
  ScrollView,
  Switch,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import color from 'theme/color';
import {plansData} from 'data';

type Plan = 'Monthly' | 'Yearly';

export default function Subscription({navigation}: any) {
  const [plan, setPlan] = useState<Plan>('Monthly');

  const togglePlan = () => {
    const newPlan = plan === 'Monthly' ? 'Yearly' : 'Monthly';
    setPlan(newPlan);
  };

  return (
    <View>
      <CustomHeader title="Subscription" navigation={navigation} />
      <ScrollView>
        <View style={SubscriptionStyles.container}>
          <View style={SubscriptionStyles.titleContainer}>
            <Text style={SubscriptionStyles.title}>Choose your plan</Text>
          </View>
          <View style={SubscriptionStyles.planContainer}>
            <Text
              style={
                plan === 'Yearly'
                  ? SubscriptionStyles.plan
                  : SubscriptionStyles.activePlan
              }>
              Monthly
            </Text>
            <View style={SubscriptionStyles.switch}>
              <Switch
                value={plan === 'Yearly'}
                trackColor={{false: 'transparent', true: 'transparent'}}
                onValueChange={togglePlan}
                thumbColor={color.diasbledGrey}
              />
            </View>
            <Text
              style={
                plan === 'Yearly'
                  ? SubscriptionStyles.activePlan
                  : SubscriptionStyles.plan
              }>
              Yearly
            </Text>
            <TouchableOpacity style={SubscriptionStyles.promoBadge}>
              <Text style={SubscriptionStyles.promoText}>Promo</Text>
            </TouchableOpacity>
          </View>
          {plansData.map(({id, title, yearly, monthly, promo, productsNum}) => (
            <PlanCard
              key={id}
              title={title}
              price={plan === 'Monthly' ? monthly : yearly}
              promo={promo}
              productsNum={productsNum}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
}
