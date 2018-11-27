import React from 'react';
import { StyleSheet, Text, View, AppRegistry } from 'react-native';
import schedule from './databases/schedule.json'

export default class App extends React.Component {
  state = {
    today   : new Date().getDay(),
    schedule: schedule
  }

  render() {
    const { today, schedule } = this.state;

    return (
      <View style={styles.container}>
        <Text>Today: {today}</Text>
        <Text>Hari: { schedule[today].day }</Text>
        <Text>Tipe: { schedule[today].type[0].name }</Text>
        <Text>Pagi: { schedule[today].type[0].menu.breakfast }</Text>
        <Text>Siang: { schedule[today].type[0].menu.lunch }</Text>
        <Text>Malam: { schedule[today].type[0].menu.dinner }</Text>

        <Text>Tipe: { schedule[today].type[1].name }</Text>
        <Text>Pagi: { schedule[today].type[1].menu.breakfast }</Text>
        <Text>Siang: { schedule[today].type[1].menu.lunch }</Text>
        <Text>Malam: { schedule[today].type[1].menu.dinner }</Text>

        <Text>Tipe: { schedule[today].type[2].name }</Text>
        <Text>Pagi: { schedule[today].type[2].menu.breakfast }</Text>
        <Text>Siang: { schedule[today].type[2].menu.lunch }</Text>
        <Text>Malam: { schedule[today].type[2].menu.dinner }</Text>

        <Text>Tipe: { schedule[today].type[3].name }</Text>
        <Text>Pagi: { schedule[today].type[3].menu.breakfast }</Text>
        <Text>Siang: { schedule[today].type[3].menu.lunch }</Text>
        <Text>Malam: { schedule[today].type[3].menu.dinner }</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
});

AppRegistry.registerComponent('App', () => App)
