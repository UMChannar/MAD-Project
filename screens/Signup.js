import React from 'react';
import {
  Text,
  ScrollView,
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {TextInput} from 'react-native-paper';

const Signup = ({navigation}) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.logoContainer}>
        <Text style={styles.title}>TravelGo</Text>
      </View>
      <View style={styles.formContainer}>
        <Text style={styles.formTitle}>Signup</Text>
        <Text style={styles.simple}>User Name</Text>
        <TextInput style={styles.input} mode="outlined" />
        <Text style={styles.simple}>User Email</Text>
        <TextInput style={styles.input} mode="outlined" />
        <Text style={styles.simple}>Password</Text>
        <TextInput
          style={styles.input}
          mode="outlined"
          secureTextEntry={true}
        />
        <Text style={styles.simple}>Confirm Password</Text>
        <TextInput
          style={styles.input}
          mode="outlined"
          secureTextEntry={true}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.navigate('Login');
          }}>
          <Text style={styles.text0}>Register</Text>
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
  },
  input: {
    height: 40,
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

export default Signup;
