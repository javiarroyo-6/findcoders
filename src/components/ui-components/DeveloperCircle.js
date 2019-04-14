import React, { Component } from "react";
import { Linking, TouchableOpacity } from 'react-native'
import { Container, Header, Content, Card, CardItem, Text, Body } from "native-base";
export default class DeveloperCircle extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content padder>
          <Card transparent>
            <CardItem>
              <Body>
                <Text>
                 Seems like you have a lot of developer friends! Consider trying out Developer Circle at your University.
                 For more information visit:
                </Text>
                <TouchableOpacity>
                    <Text style={{color: 'blue'}}
                    onPress = {
                        () => Linking.openURL('https://developers.facebook.com/developercircles/lead/apply/')
                    } >
                    Developer Circle
                    </Text>
                </TouchableOpacity>
              </Body>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}