import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class TypeButton extends React.Component {
  render() {
    const {button, text, smallText} = styles;
    
    return (
      <TouchableOpacity style={button}>
        <Text style={text}>
          {this.props.type}
        </Text>
        <Text style={smallText}>Tipe</Text>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  button: {
    flex: 1,
    flexDirection  : 'column',
    justifyContent : 'flex-start',
    height         : 115,
    backgroundColor: '#fff',
    borderTopWidth : 1,
    borderColor    : '#e5e5e5'

  },

  text: {
    paddingTop: 5,
    fontSize  : 20,
    color     : 'black',
    textAlign : 'center',
  },

  smallText: {
    fontSize : 10,
    textAlign: 'center'
  }
})
