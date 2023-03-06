import {Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {ArowRight, UsersIcon} from 'components/Icons';
import CardContainer from 'components/CardContainer';
import {inviteFriend} from 'data';
import {InviteFriendCardStyles} from 'screens/Dashboard/styles/DashboardStyles';
import {BasicCardStyles} from 'styles/global';

export default function InviteFriendCard() {
  return (
    <CardContainer>
      <View style={BasicCardStyles.header}>
        <View style={BasicCardStyles.left}>
          <UsersIcon />
          <Text style={BasicCardStyles.title}>{inviteFriend.title}</Text>
        </View>
      </View>
      <View style={InviteFriendCardStyles.body}>
        <Text style={InviteFriendCardStyles.normalText}>
          <Text style={InviteFriendCardStyles.positive}>
            Receive 50 products{' '}
          </Text>
          by inviting a friend who subscribes to a plan. Your friend will
          receive a 30% discount coupon valid for any plan.
        </Text>
      </View>
      <TouchableOpacity style={InviteFriendCardStyles.linkContainer}>
        <Text style={InviteFriendCardStyles.link}>{inviteFriend.link}</Text>
        <ArowRight />
      </TouchableOpacity>
    </CardContainer>
  );
}
