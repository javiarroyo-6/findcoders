import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";
import MapView from 'react-native-maps'

class HomeScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                 <MapView
                    initialRegion={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                    }}
                />
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