import React, { Component } from "react";
import {
  AsyncStorage,
  TouchableOpacity,
  TouchableWithoutFeedback,
  StyleSheet,
  Text,
  SafeAreaView,
  StatusBar,
  KeyboardAvoidingView,
  Keyboard,
  View,
  Alert
} from 'react-native'

import {
  Container,
  Item,
  Input,
  Icon,
} from 'native-base'

export default class SettingsScreen extends Component {

     state = { 
       password1: '',   
       password2: '',
     }
     onChangeText(key, value) {
       this.setState({
         [key]: value
       })
     }
  
    async signOut() { // clears the usersTokens which in turn will redirect the user to AuthLoading Screen
        await AsyncStorage.clear()
        this.props.navigation.navigate('Authloading')
    }

    render() {
    return (
      <View style={styles.container}>
       <TouchableOpacity
          onPress={() => this.signOut()}
          style={styles.buttonStyle}>
          <Text style={styles.textStyle}>Sign out</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    flexDirection: 'column'
  },
  input: {
    flex: 1,
    fontSize: 17,
    fontWeight: 'bold',
    color: '#5a52a5',
  },
  infoContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    height: 200,
    bottom: 25,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
    backgroundColor: '#fff',
  },
  itemStyle: {
    marginBottom: 20,
  },
  iconStyle: {
    color: '#5a52a5',
    fontSize: 28,
    marginLeft: 15
  },
  buttonStyle: {
    alignItems: 'center',
    backgroundColor: '#667292',
    padding: 14,
    marginBottom: 20,
    borderRadius: 24,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: "blue",
  },
  logoContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    height: 400,
    bottom: 180,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
})
