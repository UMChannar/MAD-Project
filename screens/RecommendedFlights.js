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

const Recommended = ({navigation}) => {
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
      <Text style={styles.title}>Available Flights</Text>
      <View style={styles.info}>
        <Image source={require('../images/plane.png')} />
        <View style={styles.material}>
          <Text style={styles.mattxt}>From MSC To ISB</Text>
          <Text style={styles.mattxt}>PIA</Text>
          <Text style={styles.mattxt}>USD 100</Text>
        </View>
        <View style={styles.maticon}>
          <TouchableOpacity onPress="">
            <Image
              style={styles.iconmat}
              source={require('../images/info.png')}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.info}>
        <Image source={require('../images/plane.png')} />
        <View style={styles.material}>
          <Text style={styles.mattxt}>From MSC To ISB</Text>
          <Text style={styles.mattxt}>PIA</Text>
          <Text style={styles.mattxt}>USD 100</Text>
        </View>
        <View style={styles.maticon}>
          <TouchableOpacity onPress="">
            <Image
              style={styles.iconmat}
              source={require('../images/info.png')}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.info}>
        <Image source={require('../images/plane.png')} />
        <View style={styles.material}>
          <Text style={styles.mattxt}>From MSC To ISB</Text>
          <Text style={styles.mattxt}>PIA</Text>
          <Text style={styles.mattxt}>USD 100</Text>
        </View>
        <View style={styles.maticon}>
          <TouchableOpacity onPress="">
            <Image
              style={styles.iconmat}
              source={require('../images/info.png')}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.info}>
        <Image source={require('../images/plane.png')} />
        <View style={styles.material}>
          <Text style={styles.mattxt}>From MSC To ISB</Text>
          <Text style={styles.mattxt}>PIA</Text>
          <Text style={styles.mattxt}>USD 100</Text>
        </View>
        <View style={styles.maticon}>
          <TouchableOpacity onPress="">
            <Image
              style={styles.iconmat}
              source={require('../images/info.png')}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.info}>
        <Image source={require('../images/plane.png')} />
        <View style={styles.material}>
          <Text style={styles.mattxt}>From MSC To ISB</Text>
          <Text style={styles.mattxt}>PIA</Text>
          <Text style={styles.mattxt}>USD 100</Text>
        </View>
        <View style={styles.maticon}>
          <TouchableOpacity onPress="">
            <Image
              style={styles.iconmat}
              source={require('../images/info.png')}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.info}>
        <Image source={require('../images/plane.png')} />
        <View style={styles.material}>
          <Text style={styles.mattxt}>From MSC To ISB</Text>
          <Text style={styles.mattxt}>PIA</Text>
          <Text style={styles.mattxt}>USD 100</Text>
        </View>
        <View style={styles.maticon}>
          <TouchableOpacity onPress="">
            <Image
              style={styles.iconmat}
              source={require('../images/info.png')}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.info}>
        <Image source={require('../images/plane.png')} />
        <View style={styles.material}>
          <Text style={styles.mattxt}>From MSC To ISB</Text>
          <Text style={styles.mattxt}>PIA</Text>
          <Text style={styles.mattxt}>USD 100</Text>
        </View>
        <View style={styles.maticon}>
          <TouchableOpacity onPress="">
            <Image
              style={styles.iconmat}
              source={require('../images/info.png')}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.info}>
        <Image source={require('../images/plane.png')} />
        <View style={styles.material}>
          <Text style={styles.mattxt}>From MSC To ISB</Text>
          <Text style={styles.mattxt}>PIA</Text>
          <Text style={styles.mattxt}>USD 100</Text>
        </View>
        <View style={styles.maticon}>
          <TouchableOpacity onPress="">
            <Image
              style={styles.iconmat}
              source={require('../images/info.png')}
            />
          </TouchableOpacity>
        </View>
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
  info: {
    marginTop: 30,
    marginHorizontal: 40,
    flexDirection: 'row',
    padding: 10,
    backgroundColor: '#E5E4E2',
    borderRadius: 15,
  },
  material: {
    margin: 10,
  },
  mattxt: {
    fontSize: 15,
    color: '#000000',
  },
  maticon: {
    marginLeft: 'auto',
    marginTop: '9%',
  },
  iconmat: {
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
});

export default Recommended;
