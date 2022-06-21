import React from 'react';
import {
  Text,
  ScrollView,
  Image,
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {TextInput} from 'react-native-paper';

const Login = ({navigation}) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.logoContainer}>
        <Image style={styles.icon} source={require('../images/icon.png')} />
        <Text style={styles.title}>TravelGo</Text>
      </View>
      <View style={styles.formContainer}>
        <Text style={styles.formTitle}>Login</Text>
        <Text style={styles.simple}>User Email</Text>
        <TextInput style={styles.input} mode="outlined" />
        <Text style={styles.simple}>Password</Text>
        <TextInput
          style={styles.input}
          mode="outlined"
          secureTextEntry={true}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.navigate('test');
          }}>
          <Text style={styles.text0}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress="">
          <Text style={styles.text}>Forgot Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Signup');
          }}>
          <Text style={styles.text}>
            Don't have an account?{' '}
            <Text style={{fontWeight: 'bold'}}>Signup</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#CBC3E3',
  },
  logoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
  icon: {
    height: 200,
    width: 320,
    alignSelf: 'center',
  },
  title: {
    marginTop: 20,
    fontSize: 30,
    fontWeight: 'bold',
    color: '#000000',
  },
  formContainer: {
    marginTop: 40,
    marginHorizontal: 30,
  },
  formTitle: {
    fontSize: 23,
    fontWeight: 'bold',
    color: '#000000',
  },
  simple: {
    fontSize: 15,
    marginTop: 10,
    color: '#000000',
  },
  input: {
    height: 40,
  },
  text: {
    textAlign: 'center',
    color: '#000000',
    marginTop: 10,
  },
  button: {
    marginTop: 20,
    height: 40,
    backgroundColor: '#C3B1E1',
    color: '#000000',
    borderRadius: 15,
  },
  text0: {
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#000000',
    marginTop: 10,
  },
});

export default Login;
