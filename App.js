import React from 'react';
import { StyleSheet, Text, View, AppRegistry } from 'react-native';

export default class App extends React.Component {
  state = {
    schedule: [
      {
        day : 'Ahad',
        type: [
          {
            name: 'A',
            menu: {
              breakfast: 'Oseng tahu kacang panjang, pepes ikan, kerupuk',
              lunch    : 'Gado-gado, telur rebus, peyek, bubur kacang hijau',
              dinner   : 'Bandeng goreng, sambel tomat, kerupuk rambak, buah'
            }
          },
          {
            name: 'B',
            menu: {
              breakfast: 'Opor telur, kerupuk rambak',
              lunch    : 'Soto daging sapi, karak, bubur kacang hijau',
              dinner   : 'Gado-gado, telur rebus, peyek, buah'
            }
          },
          {
            name: 'C',
            menu: {
              breakfast: 'Bandeng bumbu sarden, kerupuk',
              lunch    : 'Soto ayam lamongan, tempe goreng, bubur kacang hijau',
              dinner   : 'Bakso kuah tahu, kerupuk, buah'
            }
          },
          {
            name: 'D',
            menu: {
              breakfast: 'Soto ayam, tempe goreng, kerupuk',
              lunch    : 'Bakso daging sapi komplit, pangsit, susu',
              dinner   : 'Nasi kuning, nugget kakap, kerupuk bawang, sambel tomat, buah'
            }
          }
        ]
      },

      {
        day : 'Senin',
        type: [
          {
            name: 'A',
            menu: {
              breakfast: '',
              lunch    : '',
              dinner   : ''
            }
          },
          {
            name: 'B',
            menu: {
              breakfast: '',
              lunch    : '',
              dinner   : ''
            }
          },
          {
            name: 'C',
            menu: {
              breakfast: '',
              lunch    : '',
              dinner   : ''
            }
          },
          {
            name: 'D',
            menu: {
              breakfast: '',
              lunch    : '',
              dinner   : ''
            }
          }
        ]
      },

      {
        day : 'Selasa',
        type: [
          {
            name: 'A',
            menu: {
              breakfast: '',
              lunch    : '',
              dinner   : ''
            }
          },
          {
            name: 'B',
            menu: {
              breakfast: '',
              lunch    : '',
              dinner   : ''
            }
          },
          {
            name: 'C',
            menu: {
              breakfast: '',
              lunch    : '',
              dinner   : ''
            }
          },
          {
            name: 'D',
            menu: {
              breakfast: '',
              lunch    : '',
              dinner   : ''
            }
          }
        ]
      },

      {
        day : 'Rabu',
        type: [
          {
            name: 'A',
            menu: {
              breakfast: '',
              lunch    : '',
              dinner   : ''
            }
          },
          {
            name: 'B',
            menu: {
              breakfast: '',
              lunch    : '',
              dinner   : ''
            }
          },
          {
            name: 'C',
            menu: {
              breakfast: '',
              lunch    : '',
              dinner   : ''
            }
          },
          {
            name: 'D',
            menu: {
              breakfast: '',
              lunch    : '',
              dinner   : ''
            }
          }
        ]
      },

      {
        day : 'Kamis',
        type: [
          {
            name: 'A',
            menu: {
              breakfast: '',
              lunch    : '',
              dinner   : ''
            }
          },
          {
            name: 'B',
            menu: {
              breakfast: '',
              lunch    : '',
              dinner   : ''
            }
          },
          {
            name: 'C',
            menu: {
              breakfast: '',
              lunch    : '',
              dinner   : ''
            }
          },
          {
            name: 'D',
            menu: {
              breakfast: '',
              lunch    : '',
              dinner   : ''
            }
          }
        ]
      },

      {
        day : 'Jum\'at',
        type: [
          {
            name: 'A',
            menu: {
              breakfast: '',
              lunch    : '',
              dinner   : ''
            }
          },
          {
            name: 'B',
            menu: {
              breakfast: '',
              lunch    : '',
              dinner   : ''
            }
          },
          {
            name: 'C',
            menu: {
              breakfast: '',
              lunch    : '',
              dinner   : ''
            }
          },
          {
            name: 'D',
            menu: {
              breakfast: '',
              lunch    : '',
              dinner   : ''
            }
          }
        ]
      },

      {
        day : 'Sabtu',
        type: [
          {
            name: 'A',
            menu: {
              breakfast: '',
              lunch    : '',
              dinner   : ''
            }
          },
          {
            name: 'B',
            menu: {
              breakfast: '',
              lunch    : '',
              dinner   : ''
            }
          },
          {
            name: 'C',
            menu: {
              breakfast: '',
              lunch    : '',
              dinner   : ''
            }
          },
          {
            name: 'D',
            menu: {
              breakfast: '',
              lunch    : '',
              dinner   : ''
            }
          }
        ]
      }
    ]
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Hari: {this.state.schedule[0].day}</Text>
        <Text>Tipe: {this.state.schedule[0].type[1].name}</Text>
        <Text>Sarapan: {this.state.schedule[0].type[1].menu.lunch}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

AppRegistry.registerComponent('App', () => App)
