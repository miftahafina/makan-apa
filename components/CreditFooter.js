import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class CreditFooter extends React.Component {
  render() {
    const {container, text, smallText} = styles;
    
    return (
      <View style={container}>
        <Text style={smallText}>
          Foto yang tercantum hanya sebagai ilustrasi{'\n'}
          Jika terdapat prediksi yang keliru, silakan update aplikasi terlebih dahulu
        </Text>
        <Text style={text}>Made with 💖 ️by Miftah Afina</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex           : 1,
    alignItems     : 'center',
    flexDirection  : 'column',
    justifyContent : 'center',
  },

  text: {
    fontSize     : 10,
    paddingBottom: 30,
    color        : '#fff',
    textAlign: 'center'
  },

  smallText: {
    fontSize     : 8,
    paddingBottom: 8,
    color        : '#fff',
    textAlign: 'center'
  }

})
