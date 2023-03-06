import React, {createContext, useState} from 'react';
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {Alert} from 'react-native';

export const AuthContext = createContext({});

const AuthProvider = ({children}: any) => {
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const login = async (email: string, password: string) => {
    setIsLoading(true);
    try {
      await auth().signInWithEmailAndPassword(email, password);
      setIsLoading(false);
    } catch ({message}) {
      Alert.alert('Error', message as string);
      setIsLoading(false);
    }
  };
  const googleLogin = async () => {
    setIsLoading(true);
    try {
      // Check if your device supports Google Play
      await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});
      // Get the users ID token
      const {idToken} = await GoogleSignin.signIn();

      // Create a Google credential with the token
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);

      // Sign-in the user with the credential
      await auth().signInWithCredential(googleCredential);
      setIsLoading(false);
    } catch ({message}) {
      Alert.alert('Error', message as string);
      setIsLoading(false);
    }
  };
  const register = async (email: string, password: string, name: string) => {
    setIsLoading(true);
    try {
      const {user} = await auth().createUserWithEmailAndPassword(
        email,
        password,
      );
      user.updateProfile({
        displayName: name,
      });
      setIsLoading(false);
    } catch ({message}) {
      Alert.alert('Error', message as string);
      setIsLoading(false);
    }
  };
  const logout = async () => {
    setIsLoading(true);
    try {
      await auth().signOut();
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };
  const reset = async (email: string) => {
    setIsLoading(true);
    try {
      await auth().sendPasswordResetEmail(email);
      Alert.alert(
        'Email Sent',
        'check your email we sent you a password reset link.',
      );
    } catch ({message}) {
      Alert.alert('Error', message as string);
      setIsLoading(false);
    }
  };
  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        login,
        isLoading,
        setIsLoading,
        logout,
        register,
        reset,
        googleLogin,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
