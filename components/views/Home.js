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
  Right,
  Spinner
} from "native-base";
import { KeyboardAvoidingView, View } from "react-native";
import { AppLoading } from 'expo';
import { ScrollView } from "react-native-gesture-handler";

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
    if(this.props.isFetching){
      return <Spinner color = "red" style={{flex: 1,
        alignItems: 'center',
        justifyContent: 'center',}}/>
    }
    const { data } = this.props;
    // const { data } = this.props;
    // const { fetchHotels } = this.props;
    // const { data } = this.props;
    // data.json();
    // alert(JSON.stringify(this.props.data));
    // alert(JSON.stringify(this.state.data))
    // if(this.props.data != null){
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
            <ScrollView>
        <Content>
          {/* <Text> */}
            {data.map(item=> (
              <Text key = {item.id}>
                {item.title}
              </Text>
              
            ))}
            
          {/* </Text> */}
        </Content>
        </ScrollView>
      </Container>
    );
  }
// }
}
