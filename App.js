import React from 'react';
import { StyleSheet, Text, View, AppRegistry, ScrollView, ImageBackground } from 'react-native';
import schedule from './databases/schedule.js';
import SideDishScroller from './components/SideDishScroller';
import Today from './components/Today';
import TypeNav from './components/TypeNav';
import CreditFooter from './components/CreditFooter';
import Moment from 'moment';

export default class App extends React.Component {
  state = {
    moment: Moment()
  }

  state = {
    dayId  : ['Ahad', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jum\'at', 'Sabtu'],
    monthId: ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'],

    day  : new Date().getDay(),
    date : new Date().getDate(),
    month: new Date().getMonth(),
    year : new Date().getFullYear(),
    week : Moment().week(),
    
    schedule: schedule,
    menu_a: [48,52,4, 8,12,16,20,24,28,32,36,40,44],
    menu_b: [49, 1,5, 9,13,17,21,25,29,33,37,41,45],
    menu_c: [50, 2,6,10,14,18,22,26,30,34,38,42,46],
    menu_d: [51, 3,7,11,15,19,23,27,31,35,39,43,47]
  }

  render() {
    const { day, date, month, year, week, schedule, dayId, monthId, menu_a, menu_b, menu_c, menu_d, } = this.state;
    const { container, verticalScroll } = styles;

    let type = 0;
    let typeId = '';

    if (menu_a.indexOf(week) >= 0) {
      type   = 0;
      typeId = 'A';

    } else if (menu_b.indexOf(week) >= 0) {
      type   = 1;
      typeId = 'B';

    } else if (menu_c.indexOf(week) >= 0) {
      type   = 2;
      typeId = 'C';

    } else if (menu_d.indexOf(week) >= 0) {
      type   = 3;
      typeId = 'D';
    }

    return (
      <View style={container}>
        <ImageBackground source={require('./assets/img/bg.png')} style={{width: '100%', height: '100%'}}>
          <ScrollView style={verticalScroll} showsVerticalScrollIndicator={false}>
            <Today day={dayId[day]}
            date={date + ' ' + monthId[month] + ' ' + year}
            week={week} typeId={typeId}/>
            
            <SideDishScroller meal='breakfast' mealId='Pagi' day={day} type={type}/>
            <SideDishScroller meal='lunch' mealId='Siang' day={day} type={type}/>
            <SideDishScroller meal='dinner' mealId='Malam' day={day} type={type}/>

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
    marginBottom: 27
  }
});

AppRegistry.registerComponent('App', () => App)
