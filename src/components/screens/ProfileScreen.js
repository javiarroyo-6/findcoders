import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    ScrollView
} from "react-native";
import SkillSet from '../ui-components/SkillSet';
import Profile from '../ui-components/Profile';


class ProfileScreen extends Component {
    render() {
        return (
            <ScrollView>
                <View style={styles.container}>
                    <View>
                    <SkillSet />
                    </View>
                    <View>
                        <Profile />
                    </View>
                </View>
             </ScrollView>
        );
    }
}
export default ProfileScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
      
    },
});