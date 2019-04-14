import React from 'react'
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  Linking
} from 'react-native'
import { Button } from 'native-base';

export default class WelcomeScreen extends React.Component {
  handleRoute = async (destination) => {
    await this.props.navigation.navigate(destination)
  }

    // async logInFB() {
    //   try {
    //     const {
    //       type,
    //       token,
    //       expires,
    //       permissions,
    //       declinedPermissions,
    //     } = await Facebook.logInWithReadPermissionsAsync('404906886726349', {
    //       permissions: ['public_profile'],
    //     });
    //     if (type === 'success') {
    //       // Get the user's name using Facebook's Graph API
    //       const response = await fetch(`https://graph.facebook.com/me?access_token=${token}`);
    //       Alert.alert('Logged in!', `Hi ${(await response.json()).name}!`);
    //     } else {
    //       // type === 'cancel'
    //     }
    //   } catch ({ message }) {
    //     alert(`Facebook Login Error: ${message}`);
    //   }
    // }




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

      <View style={{ justifyContent:'center', alignContent:'center', top:160, borderRadius:5}}>
        <Button>
            <Text 
             style={styles.textStyle}
             onPress = {() => Linking.openURL('https://developers.facebook.com/developercircles/lead/apply/')} 
              > Connect With Facebook
            </Text>
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