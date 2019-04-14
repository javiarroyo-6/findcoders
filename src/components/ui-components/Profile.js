import * as React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { Constants } from 'expo';
import { Avatar, Rating, AirbnbRating } from 'react-native-elements'



export default class App extends React.Component {

  render() {
    return (
      
      <View style={styles.container}>
      <Avatar rounded
            size="large"
            title="SC"
            activeOpacity={0.7}
            containerStyle={{ marginLeft: 135, marginTop: 50}}
        />
        <Text style={styles.paragraph}>  
         <Text>My Profile  </Text>         
        </Text>
      
        <View style={ styles.row }>
            <View style={ styles.column }>
                <View>
                  <Text h7 style={styles.paragraph1}>
                  {"Name : HackSC"}
                  </Text>
                </View>
                <View>
                  <Text h7 style={styles.paragraph1}>
                  {"Age     : 24"}
                  </Text>
                </View>
                <View>
                  <Text h7 style={styles.paragraph1}>
                  {"Sex     : Male"}
                  </Text>
                </View>


                <View style={ styles.bulletText }>
                  <Text style={ styles.boldText }>{"\n\u2022"+" Domain : "}</Text>
                  <Text style={styles.rt}>{"Machine Learning\nDeep Learning"}</Text>
                </View>

                <View style={ styles.bulletText }>
                  <Text style={ styles.boldText }>{"\u2022"+" Languages : "}</Text>
                  <Text style={styles.rt}>{"Python\nMATLAB\nMySQL\nC\nC++"}</Text>
                </View>

                <View style={ styles.bulletText }>
                  <Text style={ styles.boldText }>{"\u2022"+" Tools/Frameworks : "}</Text>                       
                  <Text style={styles.rt}>{"PyTorch\nKeras\nnumpy\nPandas\nseaborn"}</Text>
                </View>
            </View>
          </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  rt : {
    margin: 20
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    padding: 8,
  },
  paragraph: {
    margin: 10,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  paragraph1: {
    textAlign: 'center',
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 0,
    justifyContent: 'center',
  },
  column: {
        flexDirection: 'column',
        alignItems: 'flex-start',
    },
    row: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        flexWrap: 'wrap',
        flex: 1
    },
    bulletText: {
        
    },
    boldText: {
        fontWeight: 'bold'
    }
});
