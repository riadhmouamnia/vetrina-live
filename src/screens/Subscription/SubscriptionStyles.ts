import color from 'theme/color';
import {StyleSheet} from 'react-native';

export const SubscriptionStyles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  container: {
    paddingHorizontal: 15,
    paddingBottom: 100,
    flex: 1,
    justifyContent: 'center',
    backgroundColor: color.background,
  },
  titleContainer: {
    marginVertical: 12,
    alignItems: 'center',
  },
  title: {
    fontFamily: 'SourceSansPro-SemiBold',
    color: color.primaryBlack,
    fontSize: 22,
    marginTop: 20,
  },
  planContainer: {
    marginTop: 15,
    marginBottom: 58,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  activePlan: {
    color: color.primaryBlack,
    fontFamily: 'SourceSansPro-SemiBold',
    fontSize: 17,
  },
  plan: {
    color: color.primaryGrey,
    fontFamily: 'SourceSansPro-SemiBold',
    fontSize: 17,
  },
  switch: {
    marginHorizontal: 20,
    borderRadius: 16,
    backgroundColor: color.primaryBlue,
  },
  promoBadge: {
    backgroundColor: color.primaryGreen,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 5,
    marginLeft: 18,
    marginRight: 15,
  },
  promoText: {
    color: color.white,
    fontFamily: 'SourceSansPro-Regular',
    fontSize: 12,
  },
});

export const CardStyles = StyleSheet.create({
  container: {
    width: '100%',
    marginVertical: 12,
    padding: 18,
    borderRadius: 12,
    elevation: 3,
    shadowOffset: {width: 0, height: 4},
    shadowColor: color.shadow,
    shadowOpacity: 0.3,
    shadowRadius: 4,
    backgroundColor: color.white,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 11,
  },
  title: {
    fontFamily: 'SourceSansPro-SemiBold',
    fontSize: 20,
    color: color.primaryBlack,
  },
  products: {
    fontFamily: 'SourceSansPro-SemiBold',
    fontSize: 15,
    color: color.primaryBlack,
  },
  price: {
    fontFamily: 'SourceSansPro-SemiBold',
    fontSize: 15,
    color: color.primaryBlack,
  },
  activePrice: {
    fontFamily: 'SourceSansPro-SemiBold',
    fontSize: 28,
    color: color.primaryBlue,
  },
  button: {
    backgroundColor: color.primaryBlue,
    borderRadius: 5,
    paddingHorizontal: 20,
    paddingVertical: 14,
    elevation: 3,
    shadowOffset: {width: 0, height: 4},
    shadowColor: color.shadow,
    shadowOpacity: 0.4,
    shadowRadius: 4,
  },
  buttonText: {
    fontFamily: 'SourceSansPro-SemiBold',
    fontSize: 15,
    color: color.white,
  },
  promoText: {
    fontFamily: 'SourceSansPro-SemiBold',
    fontSize: 11,
    color: color.primaryGreen,
  },
});
