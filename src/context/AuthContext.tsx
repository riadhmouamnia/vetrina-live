import React, {createContext, useState} from 'react';
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {Alert} from 'react-native';

export const AuthContext = createContext({});

const AuthProvider = ({children}: any) => {
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);

  const login = async (email: string, password: string) => {
    try {
      await auth().signInWithEmailAndPassword(email, password);
    } catch (error) {
      console.log(error);
      return error;
    }
  };
  const googleLogin = async () => {
    try {
      // Check if your device supports Google Play
      await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});
      // Get the users ID token
      const {idToken} = await GoogleSignin.signIn();

      // Create a Google credential with the token
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);

      // Sign-in the user with the credential
      await auth().signInWithCredential(googleCredential);
    } catch (error) {
      console.log(error);
    }
  };
  const register = async (email: string, password: string, name: string) => {
    try {
      const {user} = await auth().createUserWithEmailAndPassword(
        email,
        password,
      );
      user.updateProfile({
        displayName: name,
      });
    } catch (error) {
      console.log(error);
    }
  };
  const logout = async () => {
    try {
      await auth().signOut();
    } catch (error) {
      console.log(error);
    }
  };
  const reset = async (email: string) => {
    try {
      await auth().sendPasswordResetEmail(email);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        login,
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
