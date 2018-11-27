import React from 'react';
import { StyleSheet, Text, View, AppRegistry, ScrollView } from 'react-native';
import schedule from './databases/schedule.json';
import SideDishScroller from './components/SideDishScroller';

export default class App extends React.Component {
  state = {
    today   : new Date().getDay(),
    schedule: schedule
  }

  render() {
    const { today, schedule } = this.state;
    const { container, scrollHorizontalContainer } = styles;

    return (
      <View style={container}>
        <SideDishScroller />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },

  scrollHorizontalContainer: {
    // paddingHorizontal: 20
  }
});

AppRegistry.registerComponent('App', () => App)
