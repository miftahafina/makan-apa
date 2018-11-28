import React from 'react';
import { StyleSheet, Text, View, AppRegistry, ScrollView } from 'react-native';
import SideDishBox from './SideDishBox';
import MealsTitle from './MealsTitle';

export default class App extends React.Component {
  render() {
    const { container, scrollHorizontalContainer } = styles;

    return (
      <View style={container}>
        <MealsTitle meal={this.props.meal}/>
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
