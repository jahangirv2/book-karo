import React from "react";
import {
  Container,
  Header,
  Content,
  Form,
  Item,
  Input,
  Card,
  CardItem,
  Body,
  Text,
  Title,
  Row,
  Col,
  Button
} from "native-base";
import { KeyboardAvoidingView, View } from "react-native";

export class Home extends React.Component {
  static navigationOptions = {
    header: null
  };
  render() {
    return (
      <Container>
        <Header />
        <Content>
          <Text>Thankyou For signing up!</Text>
        </Content>
      </Container>
    );
  }
}
