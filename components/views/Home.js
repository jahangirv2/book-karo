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
import { AppLoading } from 'expo';

export class Home extends React.Component {
componentWillMount(){
  // const { fetchHotels } = this.props;
  this.props.fetchHotels().then(()=> this.checkifReceived());
}
checkifReceived = () => {
  alert(JSON.stringify(this.props.data))
}

  static navigationOptions = {
    header: null
  };
  render() {
    if(this.props.data === null){
      return <AppLoading/>
    }
    const { data } = this.props;
    // const { data } = this.props;
    // const { fetchHotels } = this.props;
    // const { data } = this.props;
    // data.json();
    // alert(JSON.stringify(this.props.data));
    // alert(JSON.stringify(this.state.data))
    if(this.props.data != null){
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
          {/* <Text> */}
            {data.map(item=> (
              <Text key = {item.id}>
                {item.title}
              </Text>
              
            ))}
            
          {/* </Text> */}
        </Content>
      </Container>
    );
  }
}
}
