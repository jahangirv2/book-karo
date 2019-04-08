import React from 'react';
import { Container, Header, Content, Form, Item, Input,Card,CardItem,Body,Text, Title,Row,Col,Button,Icon,Right,} from 'native-base';
import { KeyboardAvoidingView, ToastAndroid,Image ,ImageBackground} from 'react-native';
// import * as firebase from "firebase";
// import { Home } from './Home';
import firebase from '../firebase';

export class Login extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      email:"",
      password:"",
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
            {/* <Header style={{backgroundColor:"#dd3737"}} transparent >
            <Right>
            <Body>
              <Title style={{color:"white"}}>
              Sign In
              </Title>
            </Body>
            </Right>
            </Header> */}
            <ImageBackground 
                 source={require('../../citylight.jpg')}
                 style={{width:"100%",height:"100%",margin:0}}
                 imageStyle={{resizeMode:"stretch"}}
                 >
            <Content contentContainerStyle={{justifyContent:"center",flex:1,}} padder>
          <Image source={require('../../delta.png') } style={{width:250,height:250,alignSelf:"center",}} />
        
                <Text style={{fontSize:24,fontWeight:"bold",alignSelf:"center",color:"white",}}>Book KARO!</Text>
                
          
              {/* <Card> */}
                {/* <CardItem style={{backgroundColor:"#dd3737"}} >
                  <Body style={{}}>
                    <Text style={{color:"white",fontSize:24,fontWeight:'bold',alignSelf:"center",}}>
                      
                    </Text>
                  </Body>
                </CardItem> */}
                
                {/* <CardItem bordered style={{backgroundColor:"transparent",}}> */}
                <Body style={{flexDirection:"column",justifyContent:"center"}}>
                
                <Item rounded>
                <Icon style={{color:"white"}} name="mail"/>
                  <Input placeholder='Email'  placeholderTextColor="white" style={{color:"white"}}
                  onChangeText={email => this.setState({ email })}
                  />
                </Item>
                <Item style={{marginTop:10}} rounded>
                <Icon style={{color:"white"}} name="lock"/>
                  <Input secureTextEntry={true} placeholder='Password' placeholderTextColor="white" style={{color:"white"}}
                  onChangeText={password => this.setState({ password })}
                  />
                </Item>
                <Item style={{marginTop:10,alignSelf:"center"}} rounded>
                <Button iconRight block rounded style={{width:150,backgroundColor:"#dd3737",}}
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
                
                  <Button style={{alignSelf:"center",}} transparent primary onPress={()=> this.props.navigation.navigate('Signup')}>
                  <Text>
                    Don't have An Account? Sign Up HERE
                  </Text>
                  </Button>
                </Body>
                {/* </CardItem> */}
              {/* </Card> */}
            </Content>
            </ImageBackground>
            </Container>
            </KeyboardAvoidingView>
        );
    }
}
