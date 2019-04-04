import React from 'react';
import { Font,AppLoading } from 'expo';
// import { StyleSheet, Text, View, TextInput } from 'react-native';
import { Container, Header, Content, Form, Item, Input,Card,CardItem,Body,Text, Title,Row,Col,Button,} from 'native-base';
import { Login } from './components/views/Login';


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loading: true };
  }
  async componentWillMount() {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
    });
    this.setState({ loading: false });
  }
  render() {
    if(this.state.loading){
      return(
        <AppLoading/>
      );
    }
    return (
      <Login/>
      
      
      // <View style={styles.container}>
      //   <Text style={{fontSize:24,fontWeight:"bold",}}>
      //     Login
      //   </Text>
      //   <TextInput style={styles.inputText} placeholder="Username">


      //   </TextInput>
      // </View>
      
    //   <Container>
    //   <Header />
    //   <Content padder>
    //     <Card style={{marginTop:120,alignContent:"center",alignContent:"center",}}>
    //       <CardItem bordered>
    //         <Body style={{}}>
    //           <Text style={{fontSize:24,fontWeight:'bold',alignSelf:"center"}}>
    //             Login
    //           </Text>
    //         </Body>
    //       </CardItem>
    //       <CardItem bordered>
    //       <Body style={{flexDirection:"column",justifyContent:"center"}}>
    //       <Item rounded>
    //         <Input placeholder='Username'/>
    //       </Item>
    //       <Item style={{marginTop:10}} rounded>
    //         <Input placeholder='Password'/>
    //       </Item>
    //       <Item style={{marginTop:10,alignSelf:"center"}} rounded>
    //       <Button block rounded style={{width:150}}>
    //         <Text>
    //           Sign In!
    //         </Text>
    //       </Button>
    //       </Item>
          
    //         <Button style={{alignSelf:"center"}} transparent primary>
    //         <Text>
    //           Don't have An Account? Sign Up HERE
    //         </Text>
    //         </Button>
    //       </Body>
    //       </CardItem>
    //     </Card>
    //   </Content>
    // </Container>
    );
  }
}


