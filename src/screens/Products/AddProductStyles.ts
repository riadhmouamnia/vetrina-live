import {StyleSheet} from 'react-native';
import color from 'theme/color';

export const AddProductStyles = StyleSheet.create({
  header: {
    marginVertical: 15,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: color.white,
    borderRadius: 40,
    borderColor: color.primaryBlue,
    borderWidth: 1,
    paddingVertical: 8.5,
    paddingHorizontal: 20,
    elevation: 4,
    shadowOffset: {width: 0, height: 5},
    shadowColor: color.shadow,
    shadowOpacity: 0.3,
    shadowRadius: 3,
    width: 150,
  },
  buttonText: {
    fontFamily: 'SourceSansPro-SemiBold',
    fontSize: 15,
    color: color.primaryBlack,
  },
  title: {
    fontFamily: 'SourceSansPro-SemiBold',
    marginTop: 20,
    fontSize: 28,
    color: color.primaryBlack,
  },
  tab: {
    width: '80%',
    marginBottom: 12,
  },
  tabItem: {
    fontFamily: 'SourceSansPro-SemiBold',
    fontSize: 12,
    color: color.primaryBlack,
  },
  tabItemActive: {
    fontFamily: 'SourceSansPro-SemiBold',
    fontSize: 12,
    color: color.primaryBlue,
  },
  indicatorStyle: {
    backgroundColor: color.primaryBlue,
    height: 3,
  },
});

export const InfoCardStyles = StyleSheet.create({
  header: {
    alignItems: 'flex-start',
    width: '100%',
    marginBottom: 4,
  },
  title: {
    fontFamily: 'SourceSansPro-SemiBold',
    fontSize: 20,
    color: color.primaryBlack,
  },
  subTitle: {
    fontFamily: 'SourceSansPro-SemiBold',
    fontSize: 15,
    color: color.secondaryBlack,
  },
  subTitleContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  body: {
    alignItems: 'flex-start',
    width: '100%',
    marginVertical: 18,
  },
  inputWrapper: {
    width: '100%',
    marginBottom: 20,
  },
  textInput: {
    borderRadius: 8,
    borderColor: color.lightyGrey,
    fontFamily: 'SourceSansPro-Regular',
    alignItems: 'center',
    borderWidth: 1,
    width: '100%',
    marginTop: 12,
    height: 45,
    paddingHorizontal: 15,
    color: color.primaryBlack,
  },
  textInputMultilineWrapper: {
    borderColor: color.lightyGrey,
    borderWidth: 1,
    borderRadius: 8,
    marginTop: 18,
  },
  textInputMultiline: {
    borderRadius: 8,
    width: '100%',
    height: 180,
    marginTop: 10,
    padding: 15,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    color: color.primaryBlack,
  },
  toggleButtons: {
    padding: 15,
    margin: 1,
    alignSelf: 'center',
  },
  renderToggleButtons: {
    flexDirection: 'row',
    height: 55,
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomColor: color.lightyGrey,
    borderBottomWidth: 1,
  },
  radioButtonsContainer: {
    flexDirection: 'row',
    width: '100%',
  },
});

export const CustomTextInputStyles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 10,
    flexDirection: 'row',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: color.lightyGrey,
    alignItems: 'center',
    height: 45,
    marginTop: 10,
  },
  textInput: {
    color: color.primaryBlack,
    fontFamily: 'SourceSansPro-Regular',
    paddingHorizontal: 4,
    alignItems: 'center',
    width: '85%',
  },
  Icon: {
    paddingHorizontal: 4,
  },
  disabled: {
    width: '100%',
    paddingHorizontal: 10,
    flexDirection: 'row',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: color.diasbledGrey,
    backgroundColor: color.diasbledGrey,
    alignItems: 'center',
    justifyContent: 'center',
    height: 45,
    marginTop: 10,
  },
});

export const checkboxStyles = StyleSheet.create({
  containerStyle: {
    margin: 0,
    padding: 0,
    marginHorizontal: 0,
    marginLeft: 0,
    width: '100%',
  },
  textStyle: {
    color: color.primaryBlack,
    fontFamily: 'SourceSansPro-Regular',
    fontWeight: '400',
    fontSize: 17,
  },
});
