import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import TypeButton from './TypeButton';

export default class DateNav extends React.Component {
  render() {
    const {button, container, text} = styles;
    
    return (
      <View style={container}>
        <TypeButton type='Kemarin' action={this.props.prevDay}/>
        <TypeButton type='Hari ini' action={this.props.toDay}/>
        <TypeButton type='Besok' action={this.props.nextDay}/>
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
