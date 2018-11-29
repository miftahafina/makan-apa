import React from 'react';
import { StyleSheet, Text, Image, TouchableOpacity } from 'react-native';

export default class DateButton extends React.Component {
  render() {
    const {button, text, image} = styles;
    
    return (
      <TouchableOpacity style={button} onPress={this.props.action}>
        <Image style={image} source={this.props.img}/>
        <Text style={text}>
          {this.props.children}
        </Text>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  button: {
    opacity        : 0.7,
    flex           : 1,
    flexDirection  : 'column',
    justifyContent : 'flex-start',
    alignItems     : 'center',
    height         : 105,
    backgroundColor: '#fff'
  },

  image: {
    width : 20,
    height: 20,
    marginTop: 6,
    marginBottom: 5
  },

  text: {
    fontSize  : 10,
    color     : 'black',
    textAlign : 'center',
  }
})
