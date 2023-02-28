import {StyleSheet} from 'react-native';
import color from 'theme/color';

export const configCardStyles = StyleSheet.create({
  red: {
    fontFamily: 'SourceSansPro-SemiBold',
    color: color.primaryRed,
    fontSize: 21,
  },
  big: {
    fontSize: 35,
  },
  description: {
    textAlign: 'center',
    fontFamily: 'SourceSansPro-Regular',
    marginTop: 22,
    marginBottom: 8,
    fontSize: 20,
    color: color.primaryGrey,
  },
});

export const VisitorsCardStyles = StyleSheet.create({
  total: {
    color: color.primaryBlack,
    fontFamily: 'SourceSansPro-SemiBold',
    fontSize: 42,
    marginVertical: 18,
  },
  boxStyle: {
    borderWidth: 0,
    paddingHorizontal: 8,
    paddingVertical: 8,
    margin: 0,
  },
  input: {
    color: color.darkGrey,
    fontSize: 13,
  },
});

export const OrdersCardStyles = StyleSheet.create({
  numbers: {
    color: color.primaryBlack,
    fontFamily: 'SourceSansPro-SemiBold',
    fontSize: 21,
    marginVertical: 4,
    alignItems: 'flex-end',
  },

  boxStyle: {
    borderWidth: 0,
    paddingHorizontal: 8,
    paddingVertical: 4,
    margin: 0,
  },
  input: {
    color: color.darkGrey,
    fontSize: 13,
  },
  textContainer: {
    flexDirection: 'row',
    paddingVertical: 0,
    alignItems: 'center',
  },
  text: {
    fontFamily: 'SourceSansPro-Regular',
    fontSize: 20,
    color: color.primaryGrey,
    flexGrow: 1,
  },
});

export const ImageCardStyles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: color.white,
    borderRadius: 8,
    shadowColor: color.shadow,
    shadowOpacity: 0.4,
    shadowRadius: 2,
    shadowOffset: {width: 0, height: 4},
    elevation: 4,
    marginHorizontal: 20,
    marginVertical: 12,
    height: 112,
    width: '100%',
  },
  imageContainer: {
    flex: 4.3,
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  contentContainer: {
    flex: 8,
    height: '100%',
    justifyContent: 'space-evenly',
    padding: 15,
  },
  title: {
    fontSize: 12,
    fontFamily: 'SourceSansPro-Regular',
    color: color.primaryBlue,
    marginBottom: 5,
  },
  body: {
    fontSize: 16,
    fontFamily: 'SourceSansPro-SemiBold',
    color: color.primaryBlack,
    marginBottom: 10,
  },
  author: {
    color: color.primaryGrey,
    fontSize: 11,
    fontFamily: 'SourceSansPro-Regular',
    textDecorationLine: 'underline',
  },
});

export const ExtentionsCardStyles = StyleSheet.create({
  link: {
    textDecorationLine: 'underline',
    fontFamily: 'SourceSansPro-Regular',
    textAlign: 'left',
    fontSize: 18,
    color: color.primaryBlue,
    flexGrow: 1,
  },
  linkContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export const PositiveReviewCardStyles = StyleSheet.create({
  header: {
    display: 'flex',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  content: {
    marginVertical: 20,
    width: '100%',
  },
  normalText: {
    color: color.white,
    fontFamily: 'SourceSansPro-Regular',
    fontSize: 18,
    marginBottom: 15,
  },
  positive: {
    fontFamily: 'SourceSansPro-Bold',
    color: color.primaryGreen,
  },
  bold: {
    fontFamily: 'SourceSansPro-Bold',
  },
  linkContainer: {
    flexDirection: 'row',
    marginTop: 12,
    marginBottom: 4,
  },
  link: {
    fontFamily: 'SourceSansPro-Regular',
    textDecorationLine: 'underline',
    fontSize: 17,
    color: color.primaryGreen,
    marginRight: 13,
  },
  devider: {
    width: '100%',
    borderBottomWidth: 0.9,
    borderBottomColor: color.white,
    marginBottom: 30,
  },
  footer: {
    fontFamily: 'SourceSansPro-Regular',
    fontSize: 12,
    marginBottom: 2,
    color: color.white,
    alignSelf: 'flex-start',
  },
});

export const CustomerSupportCardStyles = StyleSheet.create({
  bodyText: {
    color: color.primaryBlack,
    fontFamily: 'SourceSansPro-Regular',
    fontSize: 22,
    marginLeft: 15,
  },
  body: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'flex-start',
    marginTop: 24,
  },

  avatar: {
    borderColor: color.background,
    borderWidth: 1,
  },
  button: {
    backgroundColor: color.primaryBlue,
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderRadius: 5,
    marginTop: 28,
    elevation: 4,
    shadowOffset: {width: 0, height: 2},
    shadowColor: color.shadow,
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  buttonText: {
    color: color.white,
    fontFamily: 'SourceSansPro-SemiBold',
    fontSize: 15,
  },
});

export const InviteFriendCardStyles = StyleSheet.create({
  normalText: {
    color: color.primaryBlack,
    fontFamily: 'SourceSansPro-Regular',
    fontSize: 20,
    marginBottom: 15,
  },
  positive: {
    fontFamily: 'SourceSansPro-Bold',
    color: color.primaryGreen,
  },
  link: {
    textDecorationLine: 'underline',
    fontFamily: 'SourceSansPro-Regular',
    textAlign: 'left',
    fontSize: 18,
    color: color.primaryBlue,
    flexGrow: 1,
  },
  linkContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  body: {
    marginTop: 20,
  },
});

export const DashboardStyles = StyleSheet.create({
  wrapper: {
    position: 'relative',
    height: 3100,
    backgroundColor: color.background,
  },
  cardContainer: {
    position: 'absolute',
    bottom: '4.6%',
    paddingHorizontal: 15,
    left: 0,
    right: 0,
    alignItems: 'center',
  },
});
