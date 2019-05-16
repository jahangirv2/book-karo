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
      submit = (cardData) => {
        alert(JSON.stringify(cardData));
      }
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
              
               <Card key={item.id}> 
                 <CardItem style={{backgroundColor:"#dd3737"}} >
                  <Body style={{}}>
                    <Text style={{color:"white",fontSize:24,fontWeight:'bold',alignSelf:"center",}}>
                        {item.title}
                    </Text>
                  </Body>
                  </CardItem> 
                  <CardItem>
                    <Item>
                    <Body>
                      <Text style={{fontWeight:"bold",alignSelf:"center"}}> Address: {item.address}</Text>
                    </Body>
                    </Item>
                  </CardItem>
                  <CardItem>
                    <Body>
                    <Button block rounded style={{backgroundColor:"#dd3737",alignSelf:"center",marginTop:10}}
                  onPress={() => submit(item)}
                >
                  <Text>
                    Book Now!
                  </Text>
                </Button>
                    </Body>
                  </CardItem>
                  <CardItem style={{backgroundColor:"#dd3737"}}>
                    <Body>
                      <Text style={{fontSize:25,fontWeight:"bold",alignSelf:"center",color:"white"}}> Price Starting From {item.price}</Text>
                    </Body>
                  </CardItem>
             
                </Card>
                
              // <Text key = {item.id}>
              //   {item.title}
              // </Text>
              
            ))}
            
          {/* </Text> */}
        </Content>
        </ScrollView>
      </Container>
    );
  }
// }
}
