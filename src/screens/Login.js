import { Alert, StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../redux/authSlice';
import { s } from 'react-native-size-matters';
import Loginbtn from "../components/Loginbtn";

const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handlelogin = () => {
    if (!email || !password) {
      Alert.alert('Please enter email & Password: ');
      return;
    }
    dispatch(login({ email, password }));
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login Screen</Text>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
      />
      <TextInput
        placeholder="Password"
        value={password}
        secureTextEntry
        onChangeText={setPassword}
        style={styles.input}
      />
      <Loginbtn onPress={handlelogin}/>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: { marginTop: s(20), paddingHorizontal: s(20) },
  title: { fontSize: s(20), marginBottom: s(30) },
  input: {
    borderWidth: 1,
    marginBottom: 50,
    padding: 10,
  },
});
