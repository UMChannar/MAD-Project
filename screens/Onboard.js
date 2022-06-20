import React from 'react';
import {Text, ScrollView, Image, View} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';

const slides = [
  {
    key: 1,
    title: 'JUST TRAVEL',
    text: 'Description.\nSay something cool',
    image: require('../images/Onboard1.png'),
  },
  {
    key: 2,
    title: 'TAKE A BREAK',
    text: 'Other cool stuff',
    image: require('../images/Onboard2.png'),
  },
  {
    key: 3,
    title: 'ENJOY YOUR JOURNEY',
    text: "I'm already out of descriptions\n\nLorem ipsum bla bla bla",
    image: require('../images/Onboard3.png'),
  },
];

class Onboarding extends React.Component {
  _renderItem = ({item}) => {
    return (
      <View>
        <Image
          source={item.image}
          style={{
            resizeMode: 'cover',
            height: '73%',
            width: '100%',
          }}
        />
        <Text
          style={{
            paddingTop: 25,
            paddingBottom: 10,
            fontSize: 23,
            fontWeight: 'bold',
            color: '#000000',
            alignSelf: 'center',
          }}>
          {item.title}
        </Text>

        <Text
          style={{
            textAlign: 'center',
            color: '#000000',
            fontSize: 15,
            paddingHorizontal: 30,
          }}>
          {item.text}
        </Text>
      </View>
    );
  };

  _renderNextButton = () => {
    return (
      <ScrollView>
        <Text
          style={{
            color: '#000000',
            fontSize: 18,
            fontWeight: 'bold',
            paddingTop: 12,
            paddingHorizontal: 10,
          }}>
          Next
        </Text>
      </ScrollView>
    );
  };

  _renderDoneButton = () => {
    return (
      <View>
        <Text
          style={{
            color: '#000000',
            fontSize: 18,
            fontWeight: 'bold',
            paddingTop: 12,
            paddingHorizontal: 10,
          }}>
          Done
        </Text>
      </View>
    );
  };

  _onDone = ({navigation}) => {
    this.props.navigation.replace('Login');
  };

  render() {
    return (
      <AppIntroSlider
        renderItem={this._renderItem}
        data={slides}
        activeDotStyle={{
          backgroundColor: '#000000',
          width: 30,
        }}
        onDone={this._onDone}
        renderNextButton={this._renderNextButton}
        renderDoneButton={this._renderDoneButton}
      />
    );
  }
}

export default Onboarding;
