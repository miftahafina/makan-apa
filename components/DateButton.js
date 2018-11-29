import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class DateButton extends React.Component {
  render() {
    const {button, text, smallText} = styles;
    
    return (
      <TouchableOpacity style={button} onPress={this.props.action}>
        <Text style={text}>
          {this.props.type}
        </Text>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  button: {
    flex: 1,
    flexDirection  : 'column',
    justifyContent : 'flex-start',
    height         : 85,
    backgroundColor: '#fff',
    borderTopWidth : 1,
    borderColor    : '#eaeaea'

  },

  text: {
    paddingTop: 5,
    fontSize  : 20,
    color     : 'black',
    textAlign : 'center',
  }
})
