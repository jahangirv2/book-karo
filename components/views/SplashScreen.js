import React from 'react';
import { View,Text ,Image} from 'react-native';
import { Containter,Content, Container } from 'native-base';
import logo from '../../delta.png'

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
            // <Container>
                // <Content contentContainerStyle={{justifyContent:"center",flex:1,}}>
                <View style={styles.viewStyles}>
                <Image source={logo} style={{width:250,height:250}}/>
            {/* <Text style={styles.textStyles}>
            
              
            </Text> */}
          </View>
                // </Content>
            // </Container>
          
        );
      }
    }

    const styles = {
        viewStyles: {
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'gray'
        },
        textStyles: {
          color: 'white',
          fontSize: 40,
          fontWeight: 'bold'
        }
      }
