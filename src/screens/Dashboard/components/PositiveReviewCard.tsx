import {Text, View} from 'react-native';
import React from 'react';
import CardContainer from 'components/CardContainer';
import {ArrowRightSmall} from 'components/Icons';
import {positiveReviews} from 'data';
import {PositiveReviewCardStyles} from 'screens/Dashboard/styles/DashboardStyles';

export default function PositiveReviewCard() {
  return (
    <CardContainer color="#103B66">
      <View style={PositiveReviewCardStyles.header}>
        {positiveReviews.topIcon}
      </View>
      <View style={PositiveReviewCardStyles.content}>
        <Text style={PositiveReviewCardStyles.normalText}>
          Write a{' '}
          <Text style={PositiveReviewCardStyles.positive}>positive</Text> review
          on Capterra and receive the extension with
          <Text style={PositiveReviewCardStyles.bold}>
            {' '}
            50 additional products.
          </Text>
        </Text>
        <View style={PositiveReviewCardStyles.linkContainer}>
          <Text style={PositiveReviewCardStyles.link}>
            {positiveReviews.topLink}
          </Text>
          <ArrowRightSmall />
        </View>
      </View>
      <View style={PositiveReviewCardStyles.devider} />
      <View style={PositiveReviewCardStyles.header}>
        {positiveReviews.bottomIcon}
      </View>
      <View style={PositiveReviewCardStyles.content}>
        <Text style={PositiveReviewCardStyles.normalText}>
          Show us your love by leaving a
          <Text style={PositiveReviewCardStyles.positive}> positive</Text>{' '}
          review on review on trust pilot and receive the extension of
          <Text style={PositiveReviewCardStyles.bold}>
            {' '}
            50 additional products.
          </Text>
        </Text>
        <View style={PositiveReviewCardStyles.linkContainer}>
          <Text style={PositiveReviewCardStyles.link}>
            {positiveReviews.bottomLink}
          </Text>
          <ArrowRightSmall />
        </View>
      </View>
      <Text style={PositiveReviewCardStyles.footer}>
        {positiveReviews.footer}
      </Text>
    </CardContainer>
  );
}
