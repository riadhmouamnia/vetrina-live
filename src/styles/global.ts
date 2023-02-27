import {windowWidth} from 'utils/Dimensions';
import {windowHeight} from 'utils/Dimensions';
import {StyleSheet} from 'react-native';

export const BasicCardStyles = StyleSheet.create({
  header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    color: '#103B66',
    fontFamily: 'SourceSansPro-SemiBold',
    fontSize: 23,
    marginLeft: 20,
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center',
    flexGrow: 1,
  },
  right: {
    alignItems: 'flex-end',
    flexGrow: 1,
  },
  body: {
    marginVertical: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  link: {
    textAlign: 'center',
    textDecorationLine: 'underline',
    fontFamily: 'SourceSansPro-Regular',
    fontSize: 18,
    color: '#21B8F9',
    marginRight: 20,
  },
  linkContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5E5E5',
    paddingHorizontal: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    fontFamily: 'SourceSansPro-SemiBold',
    marginTop: 18,
    fontSize: 24,
    color: '#103B66',
    textAlign: 'center',
  },
  subTitleText: {
    fontFamily: 'SourceSansPro-SemiBold',
    marginTop: 4,
    fontSize: 14,
    color: '#7D8A99',
    textAlign: 'center',
  },
  paragraphText: {
    fontFamily: 'SourceSansPro-Regular',
    marginVertical: 8,
    lineHeight: 20,
    fontSize: 28,
    color: '#7D8A99',
  },
  logo: {
    textAlign: 'center',
    fontFamily: 'Logo',
    marginTop: 10,
    fontSize: 24,
  },
  Primary: {
    color: '#21B8F9',
  },
  Header: {
    // backgroundColor: "coral",
    marginVertical: 20,
  },
  ButtonStyle: {
    backgroundColor: '#21B8F9',
    padding: 15,
    width: 250,
    alignSelf: 'center',
    borderRadius: 5,
    marginTop: 20,
  },
  ButtonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  shadow: {
    elevation: 3,
    shadowOffset: {width: 0, height: 2},
    shadowColor: '#333',
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
});

export const SignUpMethodsStyles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
  divider: {
    height: 1,
    backgroundColor: '#6C7C8C',
    flex: 1,
  },
  orContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  orText: {
    fontFamily: 'SourceSansPro-SemiBold',
    textAlign: 'center',
    fontSize: 14,
    marginHorizontal: 10,
    color: '#6C7C8C',
  },
  signUpButtons: {
    marginTop: 16,
  },
  signUpButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    borderColor: '#21B8F9',
    borderWidth: 1,
    padding: 12,
    marginBottom: 16,
    width: '100%',
    justifyContent: 'center',
  },
  logo: {
    width: 24,
    height: 24,
    marginRight: 8,
  },
  signUpText: {
    fontFamily: 'SourceSansPro-SemiBold',
    marginLeft: 10,
    fontSize: 14,
    color: '#103B66',
    fontWeight: 'bold',
  },
  signInButton: {
    marginTop: 16,
  },
  signInText: {
    textAlign: 'center',
    fontFamily: 'SourceSansPro-Regular',
    fontSize: 14,
    color: '#103B66',
  },
  signInLink: {
    color: '#21B8F9',
  },
  support: {
    fontFamily: 'SourceSansPro-SemiBold',
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 40,
    borderColor: '#00C48C',
    borderWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 18,
    marginVertical: 30,
    justifyContent: 'center',
  },
});

export const CreateAccountFormStyles = StyleSheet.create({
  form: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  fieldContainer: {
    marginBottom: 20,
  },
  field: {
    fontFamily: 'SourceSansPro-Regular',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
  },
  errorText: {
    fontFamily: 'SourceSansPro-Regular',
    color: 'crimson',
    fontSize: 10,
    marginTop: 5,
  },
  button: {
    backgroundColor: '#21B8F9',
    padding: 16,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    fontFamily: 'SourceSansPro-SemiBold',
    color: '#fff',
    fontSize: 14,
  },
});

export const LoginMethodsStyles = {
  container: {
    paddingHorizontal: 10,
  },
};
export const LoginFormStyles = {
  form: {
    paddingHorizontal: 10,
    paddingBottom: 20,
  },
};
