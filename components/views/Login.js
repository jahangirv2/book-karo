import React from 'react';
import { Container, Header, Content, Form, Item, Input,Card,CardItem,Body,Text, Title,Row,Col,Button,} from 'native-base';
import { KeyboardAvoidingView } from 'react-native';

export class Login extends React.Component{
  static navigationOptions = {
    header: null
}
    render(){
        return(
          <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>
            <Container>
            <Header />
            <Content contentContainerStyle={{justifyContent:"center",flex:1}} padder>
              <Card>
                <CardItem bordered>
                  <Body style={{}}>
                    <Text style={{fontSize:24,fontWeight:'bold',alignSelf:"center"}}>
                      Login
                    </Text>
                  </Body>
                </CardItem>
                <CardItem bordered>
                <Body style={{flexDirection:"column",justifyContent:"center"}}>
                <Item rounded>
                  <Input placeholder='Email'/>
                </Item>
                <Item style={{marginTop:10}} rounded>
                  <Input placeholder='Password'/>
                </Item>
                <Item style={{marginTop:10,alignSelf:"center"}} rounded>
                <Button block rounded style={{width:150}}>
                  <Text>
                    Sign In!
                  </Text>
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
