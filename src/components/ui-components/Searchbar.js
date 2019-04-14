import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Header, Content, Item, Input, View } from 'native-base';
export default class Searchbar extends Component {
  render() {
    return (
    <View style={styles.container}>
        <Container>
            <Header />
            <Content>
            <Item rounded>
                <Input placeholder='Rounded Textbox'/>
            </Item>
            </Content>
        </Container>
    </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
       position:'absolute',
       width: 288,
       height: 82,
       left: 85,
       top: 34,
    }
});