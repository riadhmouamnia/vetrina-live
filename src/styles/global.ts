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
});
