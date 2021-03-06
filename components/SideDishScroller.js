import React from 'react';
import { StyleSheet, Text, View, AppRegistry, ScrollView } from 'react-native';
import SideDishBox from './SideDishBox';
import MealsTitle from './MealsTitle';
import schedule from '../databases/schedule.js';

export default class App extends React.Component {
  state = {
    schedule: schedule
  }

  render() {
    const { container, scrollHorizontalContainer } = styles;
    const { schedule } = this.state;

    return (
      <View style={container}>
        <MealsTitle meal={this.props.mealId}/>
        <ScrollView
          horizontal={true}
          style={scrollHorizontalContainer}
          showsHorizontalScrollIndicator={false}
        >
          {
            schedule[this.props.day].type[this.props.type].menu[this.props.meal].map((item, key) => {
              return (
                <SideDishBox img={item.img} key={key}>
                  {item.side}
                </SideDishBox>
              )
            })
          }
        </ScrollView>
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
