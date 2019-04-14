import React, { Component } from "react";
import { 
    TouchableOpacity,
    TouchableWithoutFeedback,
    StyleSheet,
    Text,
    SafeAreaView,
    StatusBar,
    KeyboardAvoidingView,
    Keyboard,
    View,
   
} from "react-native";

import {
    Container,
    Item,
    Input,
    Icon
} from 'native-base'

class SignUpScreen extends Component {

    state = {
        username:'',
        password:'',
        email:'',
        authCode:''
    }

    onChangeText(key, value) {
        this.setState({
            [key]:value
        })
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <StatusBar/>
                <KeyboardAvoidingView 
                style={styles.container} 
                behavior='padding' 
                enabled>
                <TouchableWithoutFeedback style={styles.container} onPress={Keyboard.dismiss}>
                    <View style={styles.container}>
                    <Container style={styles.infoContainer}>
                        <View style={styles.container}>
                        {/* username section  */}
                        <Item rounded style={styles.itemStyle}>
                            <Icon
                            active
                            name='person'
                            style={styles.iconStyle}
                            />
                            <Input
                            style={styles.input}
                            placeholder='Username'
                            placeholderTextColor='#adb4bc'
                            keyboardType={'email-address'}
                            returnKeyType='next'
                            autoCapitalize='none'
                            autoCorrect={false}
                            onSubmitEditing={(event) => {this.refs.SecondInput._root.focus()}}
                            onChangeText={value => this.onChangeText('username', value)}
                            />
                        </Item>
                        {/*  password section  */}
                        <Item rounded style={styles.itemStyle}>
                            <Icon
                            active
                            name='lock'
                            style={styles.iconStyle}
                            />
                            <Input
                            style={styles.input}
                            placeholder='Password'
                            placeholderTextColor='#adb4bc'
                            returnKeyType='next'
                            autoCapitalize='none'
                            autoCorrect={false}
                            secureTextEntry={true}
                            // ref={c => this.SecondInput = c}
                            ref='SecondInput'
                            onSubmitEditing={(event) => {this.refs.ThirdInput._root.focus()}}
                            onChangeText={value => this.onChangeText('password', value)}
                            />
                        </Item>
                        {/* email section */}
                        <Item rounded style={styles.itemStyle}>
                            <Icon
                            active
                            name='mail'
                            style={styles.iconStyle}
                            />
                            <Input
                            style={styles.input}
                            placeholder='Email'
                            placeholderTextColor='#adb4bc'
                            keyboardType={'email-address'}
                            returnKeyType='next'
                            autoCapitalize='none'
                            autoCorrect={false}
                            secureTextEntry={false}
                            ref='ThirdInput'
                            onSubmitEditing={(event) => {this.refs.FourthInput._root.focus()}}
                            onChangeText={value => this.onChangeText('email', value)}
                            />
                        </Item>
                        <TouchableOpacity
                            style={styles.buttonStyle}>
                            <Text style={styles.buttonText}>
                            Sign Up
                            </Text>
                        </TouchableOpacity>
                        {/* code confirmation section  */}
                        <Item rounded style={styles.itemStyle}>
                            <Icon
                            active
                            name='md-apps'
                            style={styles.iconStyle}
                            />
                            <Input
                            style={styles.input}
                            placeholder='Confirmation code'
                            placeholderTextColor='#adb4bc'
                            keyboardType={'numeric'}
                            returnKeyType='done'
                            autoCapitalize='none'
                            autoCorrect={false}
                            secureTextEntry={false}
                            onChangeText={value => this.onChangeText('authCode', value)}
                            />
                        </Item>
                        <TouchableOpacity
                            style={styles.buttonStyle}>
                            <Text style={styles.buttonText}>
                            Confirm Sign Up
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.buttonStyle}>
                            <Text style={styles.buttonText}>
                            Resend code
                            </Text>
                        </TouchableOpacity>
                        </View>
                    </Container>
                    </View>
                </TouchableWithoutFeedback>
                </KeyboardAvoidingView>
            </SafeAreaView>
        );
    }
}
export default SignUpScreen;

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
    height: 370,
    bottom: 25,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
    backgroundColor: '#fff',
  },
  itemStyle: {
    marginBottom: 10,
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
    marginBottom: 10,
    borderRadius: 24,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: "#fff",
  },
  logoContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    height: 600,
    bottom: 270,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  textStyle: {
    padding: 5,
    fontSize: 18
  },
  countryStyle: {
    flex: 1,
    backgroundColor: '#99ff',
    borderTopColor: '#211f',
    borderTopWidth: 1,
    padding: 12,
  },
  closeButtonStyle: {
    flex: 1,
    padding: 12,
    alignItems: 'center', 
    borderTopWidth: 1,
    borderTopColor: '#211f',
    backgroundColor: '#fff3',
  }
})