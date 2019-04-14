import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";

import Profile from './src/components/screens/Profile'

class ProfileScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                Profile
            </View>
        );
    }
}
export default ProfileScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
});
