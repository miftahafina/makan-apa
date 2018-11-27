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
              breakfast: 'Sup sayuran ayam rajang, tahu goreng, susu',
              lunch    : 'Ikan patin goreng kuah santan, kemangi, buah',
              dinner   : 'Ayam bumbu balado, lalapan kol, kerupuk, buah'
            }
          },
          {
            name: 'B',
            menu: {
              breakfast: 'Daging tahu pong bumbu rendang, kerupuk udang, susu',
              lunch    : 'Sayur bayam, galantin, sambal terasi, kerupuk, buah',
              dinner   : 'Ayam rica-rica, lalapan kol, kerupuk rambak, buah'
            }
          },
          {
            name: 'C',
            menu: {
              breakfast: 'Opor ayam, kerupuk rambak, susu',
              lunch    : 'Sayur lodeh, galantin kakap, buah',
              dinner   : 'Ikan patin goreng bumbu kuning, lalapan timun, buah'
            }
          },
          {
            name: 'D',
            menu: {
              breakfast: 'Sambal balado terong ungu, pindang goreng, susu',
              lunch    : 'Bandeng presto goreng, bumbu bali, buah',
              dinner   : 'Ayam pedas, lalapan timun, kerupuk, buah'
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
              breakfast: 'Galantin kakap bumbu rujak, kerupuk tempe',
              lunch    : 'Sayur asem, pindang goreng, susu',
              dinner   : 'Mie goreng sayuran, telur rebus, buah'
            }
          },
          {
            name: 'B',
            menu: {
              breakfast: 'Tahu terik kuning, telur asin',
              lunch    : 'Bakso daging sapi komplit, pangsit, susu',
              dinner   : 'Nugget kakap, sambal kerupuk, buah'
            }
          },
          {
            name: 'C',
            menu: {
              breakfast: 'Tumis buncis + ebi bumbu kuning, tahu bakso ikan',
              lunch    : 'Gulai daging sapi, karak, susu',
              dinner   : 'Balado tempe + ebi, kerupuk udang, buah'
            }
          },
          {
            name: 'D',
            menu: {
              breakfast: 'Oseng tahu + kacang panjang, pepes ikan, kerupuk rambak',
              lunch    : 'Soto daging sapi, karak, susu',
              dinner   : 'Sambal goreng janten + tahu + ebi, telur asin, buah'
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
