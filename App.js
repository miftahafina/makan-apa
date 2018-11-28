import React from 'react';
import { StyleSheet, Text, View, AppRegistry, ScrollView } from 'react-native';
import schedule from './databases/schedule.json';
import SideDishScroller from './components/SideDishScroller';
import Today from './components/Today';
import TypeNav from './components/TypeNav';

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
          <Today />
          
          <SideDishScroller />
          <SideDishScroller />
          <SideDishScroller />
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
    alignItems     : 'flex-start',
    flexDirection  : 'column',
    justifyContent : 'flex-start',
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
