import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class SideDishBox extends React.Component {
  render() {
    const { box, text, container } = styles;

    return (
      <View style={container}>
        <Image source={require('../assets/img/oseng-tahu-kacang-panjang.jpg')} style={box}></Image>
        <Text style={text}>
          {this.props.children}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width          : 120,
    backgroundColor: '#fff',
  },
  
  box: {
    width          : 100,
    height         : 100,
    margin         : 10,
    borderRadius   : 20,
    backgroundColor: 'gray',
    borderWidth    : 1,
    borderColor    : '#ededed'
  },

  text: {
    fontSize: 12,
    textAlign: 'center'
  }
});
