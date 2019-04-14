import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";
import MapView, { Marker } from 'react-native-maps'


class ViewMap extends Component {

    constructor(props){
        super(props)
        this.state = {
            latitude:0,
            longitude:0,
            error: null,
            // markers:[]
        }
        // this.handlePress = this.handlePress.bind(this)
    }

    componentDidMount(){
        navigator.geolocation.getCurrentPosition(position => {
            this.setState({
                latitude:position.coords.latitude,
                longitude:position.coords.longitude,
                error:null
            })
        },
        error => this.setState({ error:error.message}),
        {enableHighAccuracy:true, timeout:20000, maximumAge:2000}
        )
    }

    // handlePress(e){
    //     this.setState({
    //         markers: [
    //             ...this.state.markers,
    //             {
    //                 coordinate: e.nativeEvent.coordinate,
    //                 cost: `$${getRandomInt(50,300)}`
    //             }
    //         ]
    //     })
    // }

    render(){
        return(
            <View style={styles.container}>
                <MapView
                style={styles.map}
                region={{
                    latitude: this.state.latitude,
                    longitude: this.state.longitude,
                    latitudeDelta: 0.015,
                    longitudeDelta: 0.0121,
                }}
                onPress={this.handlePress}
                >
                {/* {this.state.markers.map((marker) => {
                    return <Marker {...marker} />
                })} */}
                <Marker 
                    coordinate={this.state}
                    pinColor="blue"
                />
                </MapView>
            </View>
        )
    }
}

export default ViewMap;

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
});
