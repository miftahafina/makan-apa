import React from 'react';
import { StyleSheet, Text, View, AppRegistry, ScrollView } from 'react-native';
import SideDishBox from './SideDishBox';
import MealsTitle from './MealsTitle';
import schedule from '../databases/schedule.json';

export default class App extends React.Component {
  state = {
    schedule: schedule
  }

  render() {
    const { container, scrollHorizontalContainer } = styles;
    const { schedule } = this.state;

    return (
      <View style={container}>
        <MealsTitle meal={this.props.meal}/>
        <ScrollView
          horizontal={true}
          style={scrollHorizontalContainer}
          showsHorizontalScrollIndicator={false}
        >
          <SideDishBox>{JSON.stringify(schedule[0].type[0].menu.lunch[2].side)}</SideDishBox>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex           : 1,
    backgroundColor: '#fff',
    borderColor    : '#e5e5e5',
    borderWidth    : 1,
    alignItems     : 'flex-start',
    flexDirection  : 'column',
    justifyContent : 'flex-start',
    marginBottom   : 20,
    marginLeft     : 15,
    marginRight    : 15,
    paddingTop     : 5,
    paddingRight   : 10,
    paddingBottom  : 10,
    paddingLeft    : 10,
    borderRadius   : 20,
  },

  scrollHorizontalContainer: {
    // marginBottom: 20
  }
});
