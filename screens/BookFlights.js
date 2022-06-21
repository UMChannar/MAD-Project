import React from 'react';
import {
  Text,
  ScrollView,
  StyleSheet,
  Image,
  View,
  TouchableOpacity,
} from 'react-native';
import {DrawerActions} from '@react-navigation/native';
import {TextInput} from 'react-native-paper';

const Book = ({navigation}) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.iconbut}
          onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
          <Image style={styles.icon} source={require('../images/menu.png')} />
        </TouchableOpacity>

        <Image style={styles.icon} source={require('../images/profile.png')} />
      </View>
      <Text style={styles.title}>Book Flights</Text>
      <View style={styles.form}>
        <Text style={styles.simple}>Flying From</Text>
        <TextInput style={styles.input} mode="outlined" />
        <Text style={styles.simple}>Flying To</Text>
        <TextInput style={styles.input} mode="outlined" />
        <Text style={styles.simple}>Departure Date</Text>
        <TextInput style={styles.input} mode="outlined" />
        <Text style={styles.simple}>Number Of Passengers</Text>
        <TextInput style={styles.input} mode="outlined" />
        <Text style={styles.simple}>Passport Number</Text>
        <TextInput
          style={styles.input}
          secureTextEntry={true}
          mode="outlined"
        />
        <TouchableOpacity style={styles.button} onPress="">
          <Text style={styles.text0}>Book</Text>
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
  header: {
    flex: 1,
    flexDirection: 'row',
    margin: 30,
    justifyContent: 'space-between',
  },
  iconbut: {
    height: 30,
    width: 30,
  },
  icon: {
    height: 30,
    width: 30,
  },
  title: {
    marginTop: 10,
    fontSize: 30,
    color: '#000000',
    marginHorizontal: 40,
    fontWeight: 'bold',
  },
  form: {
    marginTop: 20,
    marginHorizontal: 40,
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

export default Book;
