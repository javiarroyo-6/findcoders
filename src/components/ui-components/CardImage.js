import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
export default class CardImageExample extends Component {
  render() {
    return (
      <Container>
        <Content>
          <Card>
            <CardItem cardBody>
              <Image source={require('/Users/javierarroyo/findcoders/assets/USC.jpg')} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}