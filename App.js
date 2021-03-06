import React from 'react';
import { StyleSheet, Text, View, AppRegistry, ScrollView, ImageBackground, TouchableOpacity, Share, Alert } from 'react-native';
import schedule from './databases/schedule.js';
import SideDishScroller from './components/SideDishScroller';
import Today from './components/Today';
import DateNav from './components/DateNav';
import CreditFooter from './components/CreditFooter';
import Moment from 'moment';

export default class App extends React.Component {
  state = {
    dayId  : ['Ahad', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jum\'at', 'Sabtu'],
    monthId: ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'],

    moment: Moment(),
    
    schedule: schedule,
    menu_a  : [48,52,4, 8,12,16,20,24,28,32,36,40,44],
    menu_b  : [49, 1,5, 9,13,17,21,25,29,33,37,41,45],
    menu_c  : [50, 2,6,10,14,18,22,26,30,34,38,42,46],
    menu_d  : [51, 3,7,11,15,19,23,27,31,35,39,43,47]
  }

  nextDay = () => {
    this.setState({
      moment: this.state.moment.add(1, 'day')
    })
  }
  
  prevDay = () => {
    this.setState({
      moment: this.state.moment.subtract(1, 'day')
    })
  }

  toDay = () => {
    this.setState({
      moment: Moment()
    })
  }

  share = () => {
    // const {dayId, moment, monthId, schedule} = this.state;
    
    Alert.alert('Maaf', 'Fitur bagikan belum dapat digunakan');

//     Share.share({
//       title  : 'Prediksi Lauk',
//       message: `Prediksi lauk hari ${dayId[moment.day()]}, ${moment.date()} ${monthId[moment.month()]} ${moment.year()} adalah: 
// Pagi: ${schedule[dayId[moment.day()]].type[0].menu['breakfast'].map(item => item.side)}
// Siang: 
// Malam: `
//     }, {
//       dialogTitle: `Bagikan prediksi lauk hari ${dayId[moment.day()]}`
//     })
  }

  render() {
    const { moment, day, date, month, year, week, schedule, dayId, monthId, menu_a, menu_b, menu_c, menu_d, } = this.state;
    const { container, verticalScroll } = styles;

    let type = 0;
    let typeId = '';

    if (menu_a.indexOf(moment.week()) >= 0) {
      type   = 0;
      typeId = 'A';

    } else if (menu_b.indexOf(moment.week()) >= 0) {
      type   = 1;
      typeId = 'B';

    } else if (menu_c.indexOf(moment.week()) >= 0) {
      type   = 2;
      typeId = 'C';

    } else if (menu_d.indexOf(moment.week()) >= 0) {
      type   = 3;
      typeId = 'D';
    }

    return (
      <View style={container}>
        <ImageBackground source={require('./assets/img/bg.png')} style={{width: '100%', height: '100%'}}>
          <TouchableOpacity onPress={this.toDay}>
          {/* <TouchableOpacity onPress={() => {Share.share({message: 'mesa', title: 'title'})}}> */}
            <Today day={dayId[moment.day()]}
              date={moment.date() + ' ' + monthId[moment.month()] + ' ' + moment.year()}
              week={moment.week()} typeId={typeId}
            />
          </TouchableOpacity>

          <ScrollView style={verticalScroll} showsVerticalScrollIndicator={false}>
            <SideDishScroller meal='breakfast' mealId='Pagi' day={moment.day()} type={type}/>
            <SideDishScroller meal='lunch' mealId='Siang' day={moment.day()} type={type}/>
            <SideDishScroller meal='dinner' mealId='Malam' day={moment.day()} type={type}/>

            <CreditFooter />
          </ScrollView>
          <DateNav prevDay={this.prevDay} nextDay={this.nextDay} toDay={this.toDay} share={this.share}/>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex           : 1,
    flexDirection  : 'column',
    backgroundColor: '#efefef',
    justifyContent : 'flex-start',
    alignItems     : 'stretch',
  },

  verticalScroll: {
    paddingTop  : 15,
    marginBottom: 52
  }
});

AppRegistry.registerComponent('App', () => App)
