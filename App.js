import React from 'react';
import { StyleSheet, Text, View, AppRegistry, ScrollView, ImageBackground } from 'react-native';
import schedule from './databases/schedule.js';
import SideDishScroller from './components/SideDishScroller';
import Today from './components/Today';
import TypeNav from './components/TypeNav';
import CreditFooter from './components/CreditFooter';

export default class App extends React.Component {
  state = {
    dayIndonesia: ['Ahad', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jum\'at', 'Sabtu'],
    monthIndonesia: ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'],

    day     : new Date().getDay(),
    date    : new Date().getDate(),
    month   : new Date().getMonth(),
    year    : new Date().getFullYear(),
    
    schedule: schedule
  }

  render() {
    const { day, date, month, year, schedule, dayIndonesia, monthIndonesia, } = this.state;
    const { container, verticalScroll } = styles;

    return (
      <View style={container}>
        <ImageBackground source={require('./assets/img/bg.png')} style={{width: '100%', height: '100%'}}>
          <ScrollView style={verticalScroll} showsVerticalScrollIndicator={false}>
            <Today day={dayIndonesia[day]}
            date={date + ' ' + monthIndonesia[month] + ' ' + year}/>
            
            <SideDishScroller meal='breakfast' mealId='Pagi' day={day} />
            <SideDishScroller meal='lunch' mealId='Siang' day={day} />
            <SideDishScroller meal='dinner' mealId='Malam' day={day} />

            <CreditFooter />
          </ScrollView>
          <TypeNav />
        </ImageBackground>
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
  }
});

AppRegistry.registerComponent('App', () => App)
