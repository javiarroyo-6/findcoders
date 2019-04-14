import React, { Component } from 'react';
import { StyleSheet } from 'react-native'
import { Container, Header, Content, Item, Input } from 'native-base';
export default class Searchbar extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content>
          <Item rounded>
            <Input placeholder='Rounded Textbox'/>
          </Item>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
    container: {
       position:'absolute',
       width: '288px',
       height: '82px',
       left: '85px',
       top: '34px',
    }
});