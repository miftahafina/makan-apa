import React from 'react';
import { StyleSheet, Text, View, AppRegistry } from 'react-native';

export default class MealsTitle extends React.Component {
  render() {
    const { text, container } = styles;

    return (
      <View style={container}>
        <Text style={text}>Sarapan</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingLeft: 8
  },

  text: {
    fontSize : 22,
    textAlign: 'left'
  }
});
