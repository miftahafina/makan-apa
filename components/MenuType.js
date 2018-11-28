import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class Today extends React.Component {
  render() {
    const {button, container, text} = styles;
    
    return (
      <View style={container}>
        <TouchableOpacity style={button} onPress={() => alert('Hai A')}>
          <Text style={text}>A</Text>
        </TouchableOpacity>

        <TouchableOpacity style={button} onPress={() => alert('Hai B')}>
          <Text style={text}>B</Text>
        </TouchableOpacity>

        <TouchableOpacity style={button} onPress={() => alert('Hai C')}>
          <Text style={text}>C</Text>
        </TouchableOpacity>

        <TouchableOpacity style={button} onPress={() => alert('Hai D')}>
          <Text style={text}>D</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex           : 1,
    flexDirection  : 'row',
    justifyContent : 'center',
    alignItems     : 'center',
  },

  button: {
    flex: 1,
    flexDirection  : 'row',
    justifyContent : 'space-around',
    height         : 100,
    backgroundColor: 'gray'
  },

  text: {
    paddingTop: 10,
    fontSize  : 20,
    color     : '#fff'
  }
})
