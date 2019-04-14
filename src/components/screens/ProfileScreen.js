import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";
import SkillSet from '../ui-components/SkillSet'


class ProfileScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <SkillSet />
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