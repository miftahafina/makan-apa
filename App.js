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
              breakfast: 'Sayuran bakso sapi bumbu lada hitam, kerupuk udang',
              lunch    : 'Soto daging sapi, karak, bubur kacang hijau',
              dinner   : 'Sambal goreng kering tahu + kentang, kerupuk rambak, buah'
            }
          },
          {
            name: 'B',
            menu: {
              breakfast: 'Tumis bakso ikan sayur pedas manis, kerupuk tempe',
              lunch    : 'Ayam bacem, lalapan timun, sambel ijo, bubur kacang hijau',
              dinner   : 'Sup sayuran bakso sapi, tahu goreng, buah'
            }
          },
          {
            name: 'C',
            menu: {
              breakfast: 'Mie goreng bakso, telur rebus',
              lunch    : 'Ayam tepung, sambal bajak, bubur kacang hijau',
              dinner   : 'Oseng tahu jamur, telur puyuh'
            }
          },
          {
            name: 'D',
            menu: {
              breakfast: 'Kare ayam, kerupuk tempe',
              lunch    : 'Ikan patin goreng bumbu merah, lalapan kol, buah',
              dinner   : 'Tumis buncis ayam rajang, kerupuk udang, buah'
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
              breakfast: 'Oseng janten + ebi + wortel + ayam, telor rebus, susu',
              lunch    : 'Sayur lodeh, galantin goreng, kerupuk, buah',
              dinner   : 'Ayam tepung, sambal tomat, lalapan timun, buah'
            }
          },
          {
            name: 'B',
            menu: {
              breakfast: 'Oseng tempe kacang panjang, telur rebus, susu',
              lunch    : 'Ikan patin ayam pedas, lalapan timun, kerupuk, buah',
              dinner   : 'Ayam bumbu bali, kerupuk udang, buah'
            }
          },
          {
            name: 'C',
            menu: {
              breakfast: 'Rendang daging tahu, kerupuk tempe, susu',
              lunch    : 'Sup, nugget kakap goreng, buah',
              dinner   : 'Rendang ayam, kerupuk, buah'
            }
          },
          {
            name: 'D',
            menu: {
              breakfast: 'Sup sayuran bakso ikan, tempe bacem, susu',
              lunch    : 'Asem-asem daging janten, tahu goreng, buah',
              dinner   : 'Ayam bacem, lalapan kol + kemangi, sambal ijo, buah'
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
              breakfast: 'Nasi kuning + kering tempe + kacang, kerupuk bawang',
              lunch    : 'Ayam goreng bumbu kecap, Lalapan kol, buah',
              dinner   : 'Orak-arik telur, kerupuk tempe, buah'
            }
          },
          {
            name: 'B',
            menu: {
              breakfast: 'Pecel tahu kol + tauge, peyek',
              lunch    : 'Ayam goreng bumbu merah, lalapan kol, buah',
              dinner   : 'Nasi goreng sayuran ayam rajang, kerupuk, buah'
            }
          },
          {
            name: 'C',
            menu: {
              breakfast: 'Nasi uduk, sambel goreng kentang + tahu, kerupuk bawang',
              lunch    : 'Ayam goreng bumbu kecap, lalapan kol, buah',
              dinner   : 'Sayuran bakso sapi bumbu lada hitam, kerupuk tempe, buah'
            }
          },
          {
            name: 'D',
            menu: {
              breakfast: 'Pecel tahu kol + tauge, peyek',
              lunch    : 'Ayam goreng bumbu merah, lalapan kol, buah',
              dinner   : 'Kering tempe + kacang, kerupuk, buah'
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
              breakfast: 'Sambal goreng jepan + ebi + telur puyuh, kerupuk udang, buah',
              lunch    : 'Garang asem ayam, kerupuk, susu',
              dinner   : 'Cah sayuran bakso, tempe goreng, kerupuk, buah'
            }
          },
          {
            name: 'B',
            menu: {
              breakfast: 'Sambal goreng tempe + ebi + kentang, kerupuk rambak',
              lunch    : 'Rawon surabaya, kerupuk udang, susu',
              dinner   : 'Bakmi kuah ayam rajang, kerupuk bawang, buah'
            }
          },
          {
            name: 'C',
            menu: {
              breakfast: 'Cap cay sayur bakso ikan saus tiram, kerupuk udang',
              lunch    : 'Sayur asem, pindang goreng, susu',
              dinner   : 'Tongseng ayam, kerupuk rambak, buah'
            }
          },
          {
            name: 'D',
            menu: {
              breakfast: 'Oseng kentang + bihun, tahu bakso, kerupuk rambak',
              lunch    : 'Sup ayam sayuran, kerupuk udang, susu',
              dinner   : 'Galantin goreng, sambal saus bombay, kerupuk tempe, buah'
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
