import React from 'react';
import { StyleSheet, Text, View, AppRegistry, ScrollView } from 'react-native';
import schedule from './databases/schedule.json';
import SideDishScroller from './components/SideDishScroller';
import Today from './components/Today';
import TypeNav from './components/TypeNav';
import CreditFooter from './components/CreditFooter';

export default class App extends React.Component {
  state = {
    today   : new Date().getDay(),
    schedule: schedule
  }

  render() {
    const { today, schedule } = this.state;
    const { container, verticalScroll, button } = styles;

    return (
      <View style={container}>
        <ScrollView style={verticalScroll} showsVerticalScrollIndicator={false}>
          <Today day='Rabu' date='28 Oktober 2018'/>
          
          <SideDishScroller meal='Pagi'/>
          <SideDishScroller meal='Siang'/>
          <SideDishScroller meal='Malam'/>

          <CreditFooter />
        </ScrollView>
        <TypeNav />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex           : 1,
    backgroundColor: '#efefef',
    justifyContent : 'flex-start',
    alignItems     : 'stretch',
    flexDirection  : 'column',
  },

  verticalScroll: {
    marginBottom: 57
  },

  button: {
    width: 100,
    height: 100,
    backgroundColor: 'green'
  }
});

AppRegistry.registerComponent('App', () => App)
