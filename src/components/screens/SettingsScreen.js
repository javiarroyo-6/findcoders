import React, { Component } from "react";
import {
  AsyncStorage,
  TouchableOpacity,
  StyleSheet,
  Text,
  SafeAreaView,
  View,
} from 'react-native'

import {
  Container,
  Item,
  Input,
  Icon,
} from 'native-base'

// AWS Amplify
import Auth from '@aws-amplify/auth'

import ImageContainer from '../ui-components/ImageContainer'

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
  
   signOutAlert = async () => {
     await Alert.alert(
       'Sign Out',
       'Are you sure you want to sign out from the app?',
       [{
           text: 'Cancel',
           onPress: () => console.log('Canceled'),
           style: 'cancel'
         },
         // Calling signOut
         {
           text: 'OK',
           onPress: () => this.signOut()
         },
       ], {
         cancelable: false
       }
     )
   }
   
   // Confirm sign out
   signOut = async () => {
     await Auth.signOut()
       .then(() => {
         console.log('Sign out complete')
         this.props.navigation.navigate('AuthLoading')
       })
       .catch(err => console.log('Error while signing out!', err))
   }

    render() {
    return (
     
        <View style={styles.container}>
          <ImageContainer 
              style={{marginTop:20}}
            />
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
    backgroundColor: 'red',
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
