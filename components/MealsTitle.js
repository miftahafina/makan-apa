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
    borderWidth: 1,
    borderColor: 'gray'
  },

  text: {
    fontSize: 20,
    textAlign: 'left'
  }
});
