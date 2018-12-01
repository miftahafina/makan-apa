import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { WebBrowser } from 'expo';

export default class DateButton extends React.Component {
  openBrowser = () => {
    WebBrowser.openBrowserAsync('https://miftahafina.com/makanapa');
  }

  render() {
    const {button, text} = styles;
    
    return (
    <TouchableOpacity style={button} onPress={this.openBrowser}>
      <Text style={text}>Update Aplikasi</Text>
    </TouchableOpacity>
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
