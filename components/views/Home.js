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
  Button,
  Right
} from "native-base";
import { KeyboardAvoidingView, View } from "react-native";

export class Home extends React.Component {
componentDidMount(){
  // const { fetchHotels } = this.props;
  this.props.fetchHotels()
}


  static navigationOptions = {
    header: null
  };
  render() {
    // const { fetchHotels } = this.props;
    // const { data } = this.props;
    // data.json();
    alert(JSON.stringify(this.props.data));
    return (
      <Container>
        <Header style={{backgroundColor:"#dd3737"}} transparent >
            <Right>
            <Body>
              <Title style={{color:"white"}}>
              Home
              </Title>
            </Body>
            </Right>
            </Header>
        <Content>
          <Text>Thankyou For signing up!</Text>
        </Content>
      </Container>
    );
  }
}
