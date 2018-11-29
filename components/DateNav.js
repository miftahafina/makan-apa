import React from 'react';
import { StyleSheet, View } from 'react-native';
import DateButton from './DateButton';

export default class DateNav extends React.Component {
  render() {
    const {button, container, text} = styles;
    
    return (
      <View style={container}>
        <DateButton action={this.props.prevDay} img={require('../assets/img/navs/prev.png')}>
          Kemarin
        </DateButton>
        <DateButton action={this.props.toDay} img={require('../assets/img/navs/today.png')}>
          Hari ini
        </DateButton>
        <DateButton action={this.props.share} img={require('../assets/img/navs/share.png')}>
          Bagikan
        </DateButton>
        <DateButton action={this.props.nextDay} img={require('../assets/img/navs/next.png')}>
          Besok
        </DateButton>
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
