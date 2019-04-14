import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";

class ImageContainer extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>ImageContainer</Text>
            </View>
        );
    }
}
export default ImageContainer;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});