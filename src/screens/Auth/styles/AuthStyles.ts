import {windowWidth} from 'utils/Dimensions';
import {StyleSheet} from 'react-native';
import color from 'theme/color';

export const headerStyles = StyleSheet.create({
  container: {
    marginVertical: 30,
    alignItems: 'center',
  },
  textContainer: {
    marginTop: 25,
    alignItems: 'center',
    paddingHorizontal: 12,
  },
  title: {
    fontFamily: 'SourceSansPro-SemiBold',
    textAlign: 'center',
    fontSize: 30,
    color: color.primaryBlack,
  },
  subTitle: {
    fontFamily: 'SourceSansPro-Regular',
    textAlign: 'center',
    fontSize: 17,
    marginTop: 8,
    color: color.secondaryBlack,
  },
});

export const authWrapper = StyleSheet.create({
  container: {
    backgroundColor: color.background,
    alignItems: 'center',
    justifyContent: 'flex-start',
    flex: 1,
  },
});

export const formStyles = {
  container: {
    width: windowWidth - 35,
  },
};

export const textFieldStyles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  field: {
    fontFamily: 'SourceSansPro-Regular',
    fontSize: 16,
    borderWidth: 1,
    borderColor: color.blackTransparen,
    borderRadius: 5,
    padding: 10,
    color: color.primaryBlack,
  },
  errorText: {
    fontFamily: 'SourceSansPro-Regular',
    color: color.primaryRed,
    fontSize: 14,
  },
});

export const submitButtonStyles = StyleSheet.create({
  container: {
    backgroundColor: color.primaryBlue,
    borderRadius: 5,
    padding: 16,
    marginVertical: 8,
    elevation: 4,
    shadowOffset: {width: 0, height: 4},
    shadowColor: color.shadow,
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  text: {
    color: color.white,
    textAlign: 'center',
    fontFamily: 'SourceSansPro-SemiBold',
    fontSize: 15,
  },
});

export const deviderStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 12,
    marginBottom: 8,
  },
  divider: {
    height: 1,
    backgroundColor: color.darkGrey,
    flex: 1,
  },
  text: {
    fontFamily: 'SourceSansPro-SemiBold',
    textAlign: 'center',
    fontSize: 15,
    marginHorizontal: 25,
    color: color.darkGrey,
  },
});
export const methodsStyles = StyleSheet.create({
  container: {
    width: windowWidth - 35,
  },
  buttonsContainer: {
    marginTop: 16,
  },
  buttonStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: color.white,
    borderRadius: 5,
    borderColor: color.primaryBlue,
    borderWidth: 1,
    padding: 12,
    marginBottom: 12,
    width: '100%',
    justifyContent: 'center',
  },
  buttonText: {
    textAlign: 'right',
    fontFamily: 'SourceSansPro-SemiBold',
    fontSize: 15,
    color: color.primaryBlack,
    paddingLeft: 20,
  },
  footerTextContainer: {
    marginTop: 22,
    alignItems: 'center',
  },
  text: {
    fontFamily: 'SourceSansPro-Regular',
    fontSize: 18,
    color: color.primaryBlack,
  },
  link: {
    color: color.primaryBlue,
  },
});

export const supportButtonStyles = StyleSheet.create({
  container: {
    fontFamily: 'SourceSansPro-SemiBold',
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: color.white,
    borderRadius: 40,
    borderColor: color.primaryGreen,
    borderWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginVertical: 45,
    justifyContent: 'center',
    elevation: 3,
    shadowOffset: {width: 0, height: 3},
    shadowColor: color.shadow,
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  text: {
    textAlign: 'right',
    fontFamily: 'SourceSansPro-SemiBold',
    fontSize: 15,
    color: color.primaryBlack,
    paddingLeft: 12,
  },
});
