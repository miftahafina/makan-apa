import React from 'react';
import { StyleSheet, Text, View, AppRegistry, ScrollView } from 'react-native';
import schedule from './databases/schedule.json';
import SideDishScroller from './components/SideDishScroller';
import Today from './components/Today';
import MenuType from './components/MenuType';

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
        <MenuType />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex           : 1,
    backgroundColor: '#fff',
    alignItems     : 'flex-start',
    flexDirection  : 'column',
    justifyContent : 'flex-start',
    // marginTop      : 30,
    marginRight    : -2
  },

  verticalScroll: {
    marginBottom: 50
  },

  button: {
    width: 100,
    height: 100,
    backgroundColor: 'green'
  }
});

AppRegistry.registerComponent('App', () => App)
