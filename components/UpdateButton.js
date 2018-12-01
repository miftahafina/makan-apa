import React from 'react';
import { StyleSheet, Text, Image, View, TouchableNativeFeedback } from 'react-native';

export default class DateButton extends React.Component {
  render() {
    const {button, text} = styles;
    
    return (
    <View style={button}>
      <Text style={text}>Perbaharui Aplikasi</Text>
    </View>
    )
  }
}

const styles = StyleSheet.create({
  button: {
    flex           : 1,
    opacity        : 0.9,

    alignItems    : 'center',
    flexDirection : 'row',
    justifyContent: 'center',

    marginBottom: 20,
    marginLeft  : 15,
    marginRight : 15,

    padding: 10,

    borderWidth : 1,
    borderColor : '#fff',
    borderRadius: 20,
  },

  text: {
    color : '#fff',
  }
})
