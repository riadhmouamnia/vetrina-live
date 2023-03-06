import {Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {CardStyles} from 'screens/Subscription/SubscriptionStyles';

interface Props {
  title: string;
  productsNum: string;
  promo?: string;
  price: number;
}

export default function PlanCard({title, productsNum, promo, price}: Props) {
  return (
    <View style={CardStyles.container}>
      <View style={CardStyles.header}>
        <Text style={CardStyles.title}>{title}</Text>
        <Text style={CardStyles.products}>{productsNum}</Text>
      </View>
      <View style={CardStyles.footer}>
        <View>
          {promo ? <Text style={CardStyles.promoText}>{promo}</Text> : null}
          <Text style={CardStyles.price} testID="price">
            €<Text style={CardStyles.activePrice}> {price.toFixed(2)} </Text>
            /year
          </Text>
        </View>
        <TouchableOpacity style={CardStyles.button}>
          <Text style={CardStyles.buttonText}>Change plan</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
