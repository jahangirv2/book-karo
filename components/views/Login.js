import React from 'react';
import {
  Container,
  Content,
  Item,
  Input,
  Body,
  Text,
  Button,
  Icon,
  Spinner,
  Card
} from 'native-base';
import { KeyboardAvoidingView, ToastAndroid,Image ,ImageBackground} from 'react-native';
// import * as firebase from "firebase";
// import { Home } from './Home';
import firebase from '../../configs/firebase';
import bgImage from '../../tablefinal.jpg'
import logo from '../../delta.png'
import { SplashScreen } from './SplashScreen';

export class Login extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      email:"",
      password:"",
      loader: true,
    } 
  }
  componentWillMount() {
    this.setState({
      email: "",
      password: "",
    });
  }

  async componentDidMount(){
    const data = await this.performTimeConsumingTask();

  if (data !== null) {
    this.setState({ loader: false });
  }
  }

  componentWillReceiveProps({ token }) {
    // alert('Hello');
    // if (!this.props.token && token) alert('Logged in!');

   
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
  performTimeConsumingTask = async() => {
    return new Promise((resolve) =>
      setTimeout(
        () => { resolve('result') },
        2000
      )
    );
  }

  checkIfLogged = () => {
    if(this.props.token===1)
    this.props.navigation.navigate("HomeScreen");
    else alert("Email or Password was Incorrect");
  }

  static navigationOptions = {
    header: null
}
    render(){
      if(this.state.loader){
        return <SplashScreen/>
      }
      // if(this.props.token === 1) this.props.navigation.navigate("HomeScreen");
      // alert(JSON.stringify(this.props));
      // alert(JSON.stringify(this.state));
      // alert(JSON.stringify(this.props.isLoggingIn));
      const { login } = this.props;
      const { email, password } = this.state;
      // if(this.state.logged){
      //   return <Home/>
      // }
      submit = (email,password) => {
        login(email,password).then(()=> this.checkIfLogged());
        // this.checkIfLogged();
      }
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
                 source={bgImage}
                 style={{width:"100%",height:"100%",margin:0}}
                 imageStyle={{resizeMode:"cover"}}
                 >
                 
            <Content contentContainerStyle={{justifyContent:"center",flex:1,}} padder>
            
                
            
          <Image source={logo} style={{width:250,height:250,alignSelf:"center",}} />
        
                <Text style={{fontSize:24,fontWeight:"bold",alignSelf:"center",color:"white",marginBottom:60}}>Book KARO!</Text>
                <Spinner color="red" animating = {this.props.isLoggingIn}  />
                
          
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
                {/* <Item style={{marginTop:10,alignSelf:"center"}} rounded> */}
                <Button iconRight block rounded style={{width:150,backgroundColor:"#dd3737",alignSelf:"center",marginTop:10}}
                  onPress={() => submit({ email, password })}
                >
              

                
                  <Text>
                    Sign In!
                  </Text>
                  {/* <Icon name="checkmark-circle"/> */}
                </Button>
                {/* </Item> */}
                
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
