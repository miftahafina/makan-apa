import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Today extends React.Component {
  render() {
    const {container, day, date} = styles;
    
    return (
      <View style={container}>
        <Text style={day}>
          {this.props.day}
        </Text>
        
        <Text style={date}>
          {this.props.date}
        </Text>
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
    color     : '#fff'
  },

  date: {
    fontSize    : 15,
    marginBottom: 30,
    color       : '#fff'
  }
})
