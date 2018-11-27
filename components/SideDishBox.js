import React from 'react';
import { StyleSheet, Text, View, AppRegistry } from 'react-native';

export default class SideDishBox extends React.Component {
  render() {
    const { box, text, container } = styles;

    return (
      <View style={container}>
        <View style={box}></View>
        <Text style={text}>Bakso daging sapi komplit banget full</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'gray'
  },

  box: {
    backgroundColor: '#333',
    borderRadius   : 10,
    width          : 100,
    height         : 100,
    margin         : 10
  },

  text: {
    fontSize: 12
  }
});
