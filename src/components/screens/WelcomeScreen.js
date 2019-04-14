import React from 'react'
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image
} from 'react-native'
import { Button } from 'native-base';

export default class WelcomeScreen extends React.Component {
  handleRoute = async (destination) => {
    await this.props.navigation.navigate(destination)
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={{justifyContent:'center',alignItems:'center',}}>
          <Text style={{fontSize:30, marginBottom:50}}> CodeBook</Text>
        </View>

        <View style={{justifyContent:'center', alignContent:'center', borderRadius:5, top:100 }}> 
          <Button>
            <TouchableOpacity 
              onPress={() => this.props.navigation.navigate('SignUp')}
              >
              <Text style={styles.textStyle}>Sign up</Text>
            </TouchableOpacity>
          </Button>
        </View>

        <View style={{justifyContent:'center', alignContent:'center', borderRadius:5 , top:120}}>
          <Button>
            <TouchableOpacity 
              onPress={() => this.props.navigation.navigate('SignIn')}
              >
              <Text style={styles.textStyle}>Sign in</Text>
            </TouchableOpacity>
          </Button>
        </View>
      
      <View style={{justifyContent:'center', alignContent:'center', borderRadius:5, top:140}}>
        <Button >
          <TouchableOpacity 
            onPress={() => this.props.navigation.navigate('ForgetPassword')}
            >
            <Text style={styles.textStyle}>Forget password ?</Text>
          </TouchableOpacity>
        </Button>
      </View>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor: '#A9A9A9',
    
  },
  buttonStyle: {
    
  },
  textStyle: {
    fontSize: 18,
    padding: 10
  }
})