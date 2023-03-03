import color from 'theme/color';
import {StyleSheet} from 'react-native';

export const ProductsStyles = StyleSheet.create({
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
    fontSize: 13,
    color: color.primaryGrey,
    marginBottom: 14,
  },
  button: {
    backgroundColor: color.primaryBlue,
    borderRadius: 5,
    padding: 13,
    marginVertical: 8,
    elevation: 8,
    shadowOffset: {width: 0, height: 4},
    shadowColor: color.shadow,
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  left: {
    alignItems: 'flex-start',
  },
  switchOn: {
    borderRadius: 16,
    highit: 8,
    backgroundColor: color.primaryBlue,
  },
  switchOff: {
    borderRadius: 16,
    highit: 8,
    backgroundColor: color.lightyGrey,
  },
  switch: {
    height: 23,
  },
});

export const tableCardStyles = StyleSheet.create({
  container: {
    width: '100%',
    marginVertical: 8,
    borderRadius: 12,
    elevation: 5,
    shadowOffset: {width: 0, height: 4},
    shadowColor: color.shadow,
    shadowOpacity: 0.2,
    shadowRadius: 3,
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

export const TableStyles = StyleSheet.create({
  firstColumn: {
    flex: 3,
    borderRightColor: color.diasbledGrey,
    borderRightWidth: 1,
  },
  middleColumn: {
    borderRightColor: color.diasbledGrey,
    borderRightWidth: 1,
    paddingLeft: 10,
    flex: 1.2,
    justifyContent: 'flex-start',
  },
  lastColumn: {
    flex: 0.5,
  },
  row: {
    height: 56.5,
  },
  avatar: {
    marginRight: 10,
    elevation: 2,
    shadowOffset: {width: 0, height: 3},
    shadowColor: color.shadow,
    shadowOpacity: 0.2,
    shadowRadius: 3,
    borderColor: color.diasbledGrey,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 15,
    color: color.primaryBlack,
    fontFamily: 'SourceSansPro-Regular',
  },
  title: {
    fontSize: 17,
    color: color.primaryBlack,
    fontFamily: 'SourceSansPro-SemiBold',
  },
});
