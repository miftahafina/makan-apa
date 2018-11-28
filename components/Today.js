import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Today extends React.Component {
  render() {
    const {container, day, date} = styles;
    
    return (
      <View style={container}>
        <Text style={day}>Senin</Text>
        <Text style={date}>17 Agustus 1945</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop : 30, 
    marginLeft: 20
  },

  day: {
    fontSize  : 40,
    fontWeight: 'bold',
  },

  date: {
    fontSize    : 15,
    marginBottom: 30
  }
})
