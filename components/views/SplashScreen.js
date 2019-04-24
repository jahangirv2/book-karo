import React from 'react';
import { View,Text } from 'react-native';
import { Containter,Content, Container } from 'native-base';

export class SplashScreen extends React.Component{
    render() {
        // const viewStyles = [
        //   styles.container,
        //   { backgroundColor: 'orange' }
        // ];
        // const textStyles = {
        //   color: 'white',
        //   fontSize: 40,
        //   fontWeight: 'bold'
        // };
    
        return (
            <Container>
                <Content contentContainerStyle={{justifyContent:"center",flex:1,}}>
                <View style={{backgroundColor:"orange"}}>
            <Text style={{color:"white",fontSize:40,fontWeight:"bold"}}>
              Splash Screen
            </Text>
          </View>
                </Content>
            </Container>
          
        );
      }
    }
