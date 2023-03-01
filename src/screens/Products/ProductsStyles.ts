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
    marginVertical: 18,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerText: {
    fontFamily: 'SourceSansPro-Regular',
    fontSize: 13,
    color: color.primaryGrey,
    marginBottom: 15,
  },
  button: {
    backgroundColor: color.primaryBlue,
    borderRadius: 5,
    padding: 16,
    marginVertical: 8,
    elevation: 4,
    shadowOffset: {width: 0, height: 4},
    shadowColor: color.shadow,
    shadowOpacity: 0.3,
    shadowRadius: 3,
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
  text: {
    fontSize: 12,
    color: color.primaryGrey,
    fontFamily: 'SourceSansPro-Regular',
  },
  footer: {
    flexDirection: 'row',
  },
  flexRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 30,
    marginLeft: 20,
  },
});
