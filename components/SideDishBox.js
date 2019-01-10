import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class SideDishBox extends React.Component {
  render() {
    const { box, text, container } = styles;

    return (
      <View style={container}>
        {/* <Image source={this.props.img} style={box}></Image> */}
        <Image source={require('../assets/img/placeholder.png')} style={box}></Image>
        <Text style={text}>
          {/* {this.props.children} */}
          Rahasia Dapur
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width          : 115,
    backgroundColor: '#fff'
  },
  
  box: {
    width          : 100,
    height         : 100,
    margin         : 10,
    borderRadius   : 30,
    backgroundColor: '#eaeaea'
  },

  text: {
    fontSize: 12,
    textAlign: 'center'
  }
});
