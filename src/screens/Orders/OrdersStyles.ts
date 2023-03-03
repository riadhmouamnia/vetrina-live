import color from 'theme/color';
import {StyleSheet} from 'react-native';

export const OrderStyles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: color.background,
  },
  container: {
    paddingHorizontal: 15,
    paddingBottom: 100,
    flex: 1,
    justifyContent: 'center',
  },
  header: {
    marginVertical: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerText: {
    fontFamily: 'SourceSansPro-Regular',
    fontSize: 16,
    color: color.primaryBlack,
  },
  button: {
    backgroundColor: color.diasbledGrey,
    borderRadius: 5,
    padding: 14,
    marginVertical: 8,
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 6,
  },
  buttonText: {
    color: color.lightyGrey,
    marginRight: 10,
    fontFamily: 'SourceSansPro-Regular',
    fontSize: 16,
  },
  left: {
    alignItems: 'flex-start',
  },
});

export const OrderTableStyles = StyleSheet.create({
  headerText: {
    fontFamily: 'SourceSansPro-SemiBold',
    fontSize: 16,
    color: color.primaryBlack,
  },
  bodyText: {
    fontFamily: 'SourceSansPro-Regular',
    fontSize: 14,
    color: color.primaryBlack,
  },
  headCell: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icons: {
    marginLeft: 8,
  },
  firstColumn: {
    flex: 0.7,
    borderRightColor: color.diasbledGrey,
    borderRightWidth: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    alignContent: 'flex-start',
  },
  secondColumn: {
    borderRightColor: color.diasbledGrey,
    borderRightWidth: 1,
    paddingLeft: 10,
    flex: 1.6,
    justifyContent: 'center',
    alignItems: 'flex-start',
    flexDirection: 'column',
  },
  thirdColumn: {
    flex: 1.2,
    borderRightColor: color.diasbledGrey,
    borderRightWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  FourthColumn: {
    flex: 0.3,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  row: {
    height: 56.5,
  },
  code: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  shipped: {
    padding: 2,
    width: 75,
    height: 35,
    borderRadius: 5,
    backgroundColor: color.purple,
    alignItems: 'center',
    justifyContent: 'center',
  },
  new: {
    padding: 2,
    width: 75,
    height: 35,
    borderRadius: 5,
    backgroundColor: color.primaryBlue,
    alignItems: 'center',
    justifyContent: 'center',
  },
  reso: {
    padding: 2,
    width: 75,
    height: 35,
    borderRadius: 5,
    backgroundColor: color.blueTint,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cancelled: {
    padding: 2,
    width: 75,
    height: 35,
    borderRadius: 5,
    backgroundColor: color.primaryRed,
    alignItems: 'center',
    justifyContent: 'center',
  },
  progress: {
    padding: 2,
    width: 75,
    height: 35,
    borderRadius: 5,
    backgroundColor: color.orange,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textButton: {
    fontFamily: 'SourceSansPro-Regular',
    color: color.white,
    fontSize: 12,
  },
});

export const TableChexBoxStyles = StyleSheet.create({
  containerStyle: {
    marginTop: 0,
    marginLeft: 0,
    marginRight: 0,
    marginBottom: 0,
    paddingTop: 0,
    paddingLeft: 0,
    paddingRight: 0,
    paddingBottom: 0,
  },
  textStyle: {
    color: color.primaryBlack,
    fontFamily: 'SourceSansPro-Regular',
    fontWeight: '400',
    fontSize: 16,
  },
});

export const OrderTableContainerStyles = StyleSheet.create({
  container: {
    width: '100%',
    marginVertical: 8,
    backgroundColor: color.white,
  },
  text: {
    fontSize: 12,
    color: color.primaryGrey,
    fontFamily: 'SourceSansPro-Regular',
    marginRight: 8,
  },
  footer: {
    flexDirection: 'row',
    marginVertical: 20,
  },
  flexRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 5,
    marginLeft: 35,
  },
});
