import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class Today extends React.Component {
  render() {
    const {box, container, text} = styles;
    
    return (
      <View style={container}>
        <TouchableOpacity style={box}>
          <Text style={text}>A</Text>
        </TouchableOpacity>

        <TouchableOpacity style={box}>
          <Text style={text}>B</Text>
        </TouchableOpacity>

        <TouchableOpacity style={box}>
          <Text style={text}>C</Text>
        </TouchableOpacity>

        <TouchableOpacity style={box}>
          <Text style={text}>D</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex           : 1,
    backgroundColor: '#fff',
    alignItems     : 'center',
    flexDirection  : 'row',
    justifyContent : 'center',

  },

  box: {
    width          : 100,
    height         : 100,
    backgroundColor: 'red',
  },

  text: {
    textAlign: 'center'
  }
})
