import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import TypeButton from './TypeButton';

export default class TypeNav extends React.Component {
  render() {
    const {button, container, text} = styles;
    
    return (
      <View style={container}>
        <TypeButton type="A"/>
        <TypeButton type="B"/>
        <TypeButton type="C"/>
        <TypeButton type="D"/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex           : 1,
    flexDirection  : 'row',
    justifyContent : 'center',
    alignItems     : 'center'
  }
})
