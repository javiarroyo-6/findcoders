import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";
import ViewMap from './MapView.js';
import Searchbar from '../ui-components/Searchbar.js';


class HomeScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View>
                    <Searchbar />
                </View>
                <ViewMap />
            </View>
        );
    }
}
export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

