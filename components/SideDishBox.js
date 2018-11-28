import React from 'react';
import { StyleSheet, Text, View, AppRegistry } from 'react-native';

export default class SideDishBox extends React.Component {
  render() {
    const { box, text, container } = styles;

    return (
      <View style={container}>
        <View style={box}></View>
        <Text style={text}>Nama lauk yang disajikan</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: 120,
    backgroundColor: '#fff',
    borderColor: 'yellow'
  },

  box: {
    width          : 100,
    height         : 100,
    margin         : 10,
    borderRadius   : 20,
    backgroundColor: 'gray'
  },

  text: {
    fontSize: 12,
    textAlign: 'center'
  }
});
