import React from 'react';
import { StyleSheet, Text, View, AppRegistry, ScrollView } from 'react-native';
import SideDishBox from './SideDishBox';

export default class App extends React.Component {
  render() {
    const { container, scrollHorizontalContainer } = styles;

    return (
      <ScrollView
        horizontal={true}
        style={scrollHorizontalContainer}
        showsHorizontalScrollIndicator={false}
      >
        <SideDishBox />
        <SideDishBox />
        <SideDishBox />
        <SideDishBox />
        <SideDishBox />
        <SideDishBox />
      </ScrollView>
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
