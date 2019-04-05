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
import { KeyboardAvoidingView } from "react-native";

import * as firebase from "firebase";

var config = {
  apiKey: "AIzaSyDirLDizuGOmlVC1seCmaMPAbjdrUeTZqM",
  authDomain: "book-karo-50af3.firebaseapp.com",
  databaseURL: "https://book-karo-50af3.firebaseio.com",
  projectId: "book-karo-50af3",
  storageBucket: "book-karo-50af3.appspot.com",
  messagingSenderId: "264387576029"
};
firebase.initializeApp(config);

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
    try {
      if (this.state.password.length < 6) {
        alert("Please enter atleast 6 characters");
        return;
      }
      firebase.auth().createUserWithEmailAndPassword(email, password);
      this.props.navigation.navigate("HomeScreen");
    } catch (error) {
      console.log(error.toString());
    }
  };
  loginUser = (email, password) => {};

  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>
        <Container>
          <Header />
          <Content
            contentContainerStyle={{ justifyContent: "center", flex: 1 }}
            padder
          >
            <Card>
              <CardItem bordered>
                <Body style={{}}>
                  <Text
                    style={{
                      fontSize: 24,
                      fontWeight: "bold",
                      alignSelf: "center"
                    }}
                  >
                    SignUp
                  </Text>
                </Body>
              </CardItem>
              <CardItem bordered>
                <Body
                  style={{ flexDirection: "column", justifyContent: "center" }}
                >
                  <Item rounded>
                    <Input
                      placeholder="Full Name"
                      onChangeText={name => this.setState({ name })}
                    />
                  </Item>
                  <Item style={{ marginTop: 10 }} rounded>
                    <Input
                      placeholder="Email"
                      onChangeText={email => this.setState({ email })}
                    />
                  </Item>

                  <Item style={{ marginTop: 10 }} rounded>
                    <Input
                      secureTextEntry={true}
                      placeholder="Password"
                      onChangeText={password => this.setState({ password })}
                    />
                  </Item>
                  <Item style={{ marginTop: 10, alignSelf: "center" }} rounded>
                    <Button
                      block
                      rounded
                      style={{ width: 150 }}
                      onPress={() =>
                        this.signUpUser(this.state.email, this.state.password)
                      }
                    >
                      <Text>Sign Up!</Text>
                    </Button>
                  </Item>

                  <Item style={{ marginTop: 10, alignSelf: "center" }} rounded>
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
                  </Item>
                </Body>
              </CardItem>
            </Card>
          </Content>
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
