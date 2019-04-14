import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
  ActivityIndicator,
  AsyncStorage
} from 'react-native'
export default class AuthLoadingScreen extends Component {

    componentDidMount = async () => { //will call the loadapp method once the AuthLoadingScreen is mounted
        await this.loadApp()
    }
    loadApp = async () => { // checks if the user has a userToken, if ? Application Screen : Authentication Screen
        const userToken = await AsyncStorage.getItem('userToken')
        this.props.navigation.navigate(userToken ? 'App' : 'Auth') // ternary operator if true "App" if not 'Auth'  
    } // asyncstorage checks for the userToken


  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#fff" />
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})