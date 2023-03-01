import {StyleSheet} from 'react-native';
import color from 'theme/color';

export const PaymentStyles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  container: {
    paddingHorizontal: 15,
    paddingBottom: 80,
    flex: 1,
    justifyContent: 'center',
    backgroundColor: color.background,
  },
  titleContainer: {
    marginVertical: 12,
  },
  title: {
    fontFamily: 'SourceSansPro-SemiBold',
    color: color.primaryBlack,
    fontSize: 22,
    marginTop: 35,
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
  buttornEnabled: {
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderRadius: 8,
    backgroundColor: color.secondaryGreen,
  },
  buttornDisabled: {
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderRadius: 8,
    backgroundColor: color.diasbledGrey,
  },
  textEnabled: {
    color: color.primaryGreen,
    fontFamily: 'SourceSansPro-SemiBold',
    fontSize: 12,
  },
  textDisabled: {
    color: color.darkGrey,
    fontFamily: 'SourceSansPro-SemiBold',
    fontSize: 12,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginTop: 24,
  },
  footerText: {
    fontFamily: 'SourceSansPro-SemiBold',
    color: color.primaryBlack,
    fontSize: 17,
  },
});
