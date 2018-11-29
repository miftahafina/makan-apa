import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class CreditFooter extends React.Component {
  render() {
    const {container, text} = styles;
    
    return (
      <View style={container}>
        <Text style={text}>Made with 💖 ️By Miftah Afina</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex           : 1,
    alignItems     : 'center',
    flexDirection  : 'column',
    justifyContent : 'center',
  },

  text: {
    color        : 'gray',
    fontSize     : 10,
    paddingBottom: 30,
    color        : '#fff'
  }

})
