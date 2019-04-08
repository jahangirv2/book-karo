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
  Icon,
  Right
} from "native-base";
import { KeyboardAvoidingView, ToastAndroid,Image,ImageBackground } from "react-native";
import firebase from '../firebase';

// import * as firebase from "firebase";

// var config = {
//   apiKey: "AIzaSyDirLDizuGOmlVC1seCmaMPAbjdrUeTZqM",
//   authDomain: "book-karo-50af3.firebaseapp.com",
//   databaseURL: "https://book-karo-50af3.firebaseio.com",
//   projectId: "book-karo-50af3",
//   storageBucket: "book-karo-50af3.appspot.com",
//   messagingSenderId: "264387576029"
// };
// firebase.initializeApp(config);

export class SignUp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      name: ""
    };
  }
  componentWillMount() {
    this.setState({
      email: "",
      password: "",
      name: ""
    });
  }
  signUpUser = (email, password) => {
    
      if (this.state.password.length < 6) {
        alert("Please enter atleast 6 characters");
        return;
      }
      firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(() => this.props.navigation.navigate('LoginScreen'))
      .catch(error => alert(error));
    //   ToastAndroid.show('Sign Up Successfull', ToastAndroid.SHORT);
    //   this.props.navigation.navigate("LoginScreen");

    // } catch (error) {
    //   console.log(error.toString());
    // }
  };
  loginUser = (email, password) => {};

  static navigationOptions = {
    header: null
  };

  render() {
    return (

      <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>
        <Container>
          {/* <Header style={{backgroundColor:"#dd3737"}} transparent>
          <Right>
          <Body>
            <Title style={{color:"white"}}>
              Sign Up
            </Title>
          </Body>
          </Right>
          </Header> */}

      <ImageBackground 
                 source={require('../../citylight.jpg')}
                 style={{width:"100%",height:"100%",margin:0}}
                 imageStyle={{resizeMode:"stretch"}}
                 >
          <Content
            contentContainerStyle={{ justifyContent: "center", flex: 1,}}
            padder
          >

          {/* <Image source={require('../../city.jpg') } style={{}} /> */}
         
          <Image source={require('../../delta.png') } style={{width:250,height:250,alignSelf:"center"}} />
          <Text style={{fontSize:24,fontWeight:"bold",alignSelf:"center",color:"white",marginVertical:15}}>
            Book KARO!
          </Text>
            {/* <Card style={{backgroundColor:"transparent",}}> */}
              {/* <CardItem style={{backgroundColor:"#dd3737"}} bordered>
                <Body style={{}}>
                  <Text
                    style={{
                      fontSize: 24,
                      fontWeight: "bold",
                      alignSelf: "center",
                      color:"white"
                    }}
                  >
                    SignUp
                  </Text>
                </Body>
              </CardItem> */}
              <CardItem bordered > 
                <Body
                  style={{ flexDirection: "column", justifyContent: "center" }}
                >
                  <Item rounded>
                  <Icon name="person"/>
                    <Input
                      placeholder="Full Name"
                      onChangeText={name => this.setState({ name })}
                    />
                  </Item>
                  <Item style={{ marginTop: 10 }} rounded>
                  <Icon name="mail"/>
                    <Input
                      placeholder="Email"
                      onChangeText={email => this.setState({ email })}
                    />
                  </Item>

                  <Item style={{ marginTop: 10 }} rounded>
                  <Icon name="lock"/>
                    <Input
                      secureTextEntry={true}
                      placeholder="Password"
                      onChangeText={password => this.setState({ password })}
                    />
                  </Item>
                  <Item style={{ marginTop: 10, alignSelf: "center"  }} rounded>
                    <Button iconRight
                      block
                      rounded
                      style={{ width: 150,backgroundColor:"#dd3737" }}
                      onPress={() =>
                        this.signUpUser(this.state.email, this.state.password)
                      }
                    >
                    
                    
                      <Text>Sign Up</Text>
                      {/* <Icon name="checkmark-circle"/> */}
                    </Button>
                  </Item>

                  {/* <Item style={{ marginTop: 10, alignSelf: "center" }} rounded>
                    <Button
                      transparent
                      block
                      style={{ width: 150 }}
                      onPress={() =>
                        this.props.navigation.navigate("LoginScreen")
                      }
                    >
                      <Text style={styles.signinButton}>Login</Text>
                    </Button>
                  </Item> */}
                </Body>
              </CardItem>
            {/* </Card> */}
            
          </Content>
          </ImageBackground>
        </Container>
      </KeyboardAvoidingView>
      
    );
  }
}
const styles = {
  signinButton: {
    color: "black"
  }
};
