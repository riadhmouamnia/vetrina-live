import {windowWidth} from 'utils/Dimensions';
import {StyleSheet} from 'react-native';

export const headerStyles = StyleSheet.create({
  container: {
    marginVertical: 28,
    alignItems: 'center',
  },
  textContainer: {
    marginTop: 30,
    alignItems: 'center',
    paddingHorizontal: 42,
  },
  title: {
    fontFamily: 'SourceSansPro-SemiBold',
    textAlign: 'center',
    fontSize: 33,
    color: '#103B66',
  },
  subTitle: {
    fontFamily: 'SourceSansPro-Regular',
    textAlign: 'center',
    fontSize: 19,
    marginTop: 10,
  },
});

export const authWrapper = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    alignItems: 'center',
  },
});

export const loginFormStyles = {
  container: {
    width: windowWidth - 30,
  },
};

export const textFieldStyles = StyleSheet.create({
  container: {
    marginBottom: 18,
  },
  field: {
    fontFamily: 'SourceSansPro-Regular',
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 12,
    color: '#103B66',
  },
  errorText: {
    fontFamily: 'SourceSansPro-Regular',
    color: 'crimson',
    fontSize: 14,
  },
});

export const submitButtonStyles = StyleSheet.create({
  container: {
    backgroundColor: '#21B8F9',
    borderRadius: 5,
    padding: 17,
    marginVertical: 8,
    elevation: 6,
    shadowOffset: {width: 0, height: 3},
    shadowColor: '#333',
    shadowOpacity: 0.5,
    shadowRadius: 4,
  },
  text: {
    color: '#FFF',
    textAlign: 'center',
    fontFamily: 'SourceSansPro-Regular',
    fontSize: 15,
  },
});

export const deviderStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 18,
    marginBottom: 8,
  },
  divider: {
    height: 1,
    backgroundColor: '#6C7C8C',
    flex: 1,
  },
  text: {
    fontFamily: 'SourceSansPro-SemiBold',
    textAlign: 'center',
    fontSize: 15,
    marginHorizontal: 25,
    color: '#6C7C8C',
  },
});
export const methodsStyles = StyleSheet.create({
  container: {
    width: windowWidth - 30,
  },
  buttonsContainer: {
    marginTop: 16,
  },
  buttonStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    borderColor: '#21B8F9',
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
    color: '#103B66',
    paddingLeft: 20,
  },
  footerTextContainer: {
    marginTop: 22,
    alignItems: 'center',
  },
  text: {
    fontFamily: 'SourceSansPro-Regular',
    fontSize: 18,
    color: '#103B66',
  },
  link: {
    color: '#21B8F9',
  },
});

export const supportButtonStyles = StyleSheet.create({
  container: {
    fontFamily: 'SourceSansPro-SemiBold',
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 40,
    borderColor: '#00C48C',
    borderWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginVertical: 50,
    justifyContent: 'center',
    elevation: 3,
    shadowOffset: {width: 0, height: 3},
    shadowColor: '#333',
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  text: {
    textAlign: 'right',
    fontFamily: 'SourceSansPro-SemiBold',
    fontSize: 15,
    color: '#103B66',
    paddingLeft: 12,
  },
});
