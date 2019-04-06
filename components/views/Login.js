import React from 'react';
import { Container, Header, Content, Form, Item, Input,Card,CardItem,Body,Text, Title,Row,Col,Button,Icon} from 'native-base';
import { KeyboardAvoidingView, ToastAndroid } from 'react-native';
// import * as firebase from "firebase";
// import { Home } from './Home';
import firebase from '../firebase';

export class Login extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      email:"",
      password:"",
      // logged: false,
    } 
  }
  componentWillMount() {
    this.setState({
      email: "",
      password: "",
    });
  }
  loginUser = (email,password) => {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(() => this.props.navigation.navigate('HomeScreen'))
      .catch(error => alert(error));
      // ToastAndroid.show('Sign In Successfull', ToastAndroid.SHORT);
      // this.setState({
      //   logged: true,
      // })

  }
  static navigationOptions = {
    header: null
}
    render(){
      // if(this.state.logged){
      //   return <Home/>
      // }
        return(
          <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>
            <Container>
            <Header />
            <Content contentContainerStyle={{justifyContent:"center",flex:1}} padder>
              <Card>
                <CardItem style={{backgroundColor:"#3F51B5"}} bordered>
                  <Body style={{}}>
                    <Text style={{color:"white",fontSize:24,fontWeight:'bold',alignSelf:"center",}}>
                      Login
                    </Text>
                  </Body>
                </CardItem>
                <CardItem bordered>
                <Body style={{flexDirection:"column",justifyContent:"center"}}>
                <Item rounded>
                <Icon name="mail"/>
                  <Input placeholder='Email'
                  onChangeText={email => this.setState({ email })}
                  />
                </Item>
                <Item style={{marginTop:10}} rounded>
                <Icon name="lock"/>
                  <Input secureTextEntry={true} placeholder='Password'
                  onChangeText={password => this.setState({ password })}
                  />
                </Item>
                <Item style={{marginTop:10,alignSelf:"center"}} rounded>
                <Button iconRight block rounded style={{width:150}}
                onPress={() =>
                  this.loginUser(this.state.email, this.state.password)
                }
                >
                  <Text>
                    Sign In!
                  </Text>
                  <Icon name="checkmark-circle"/>
                </Button>
                </Item>
                
                  <Button style={{alignSelf:"center"}} transparent primary onPress={()=> this.props.navigation.navigate('Signup')}>
                  <Text>
                    Don't have An Account? Sign Up HERE
                  </Text>
                  </Button>
                </Body>
                </CardItem>
              </Card>
            </Content>
            </Container>
            </KeyboardAvoidingView>
        );
    }
}
