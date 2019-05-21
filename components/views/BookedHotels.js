import React from 'react';
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
    Spinner,
    DatePicker
  } from "native-base";
  import { KeyboardAvoidingView, View, ImageBackground } from "react-native";
  import { AppLoading } from "expo";
  import { ScrollView } from "react-native-gesture-handler";
  import bgImage from "../../tablefinal.jpg";
  import firebase from "../../configs/firebase";

export class BookedHotels extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            // bookedHotels: [],
            bookedHotels: this.props.navigation.state.params.bookedHotels,
            data: [],
        }
    }
    componentDidMount(){
        this.setState({
        data: this.state.bookedHotels,
        })
        alert(JSON.stringify(this.state.bookedHotels))
    }
    static navigationOptions = {
        header: null
      };
    render(){
        const { bookedHotels } = this.state;
        const { data } = this.props;
        
        // alert(JSON.stringify(this.state.bookedHotels))
        return(
            <Container>
            <ImageBackground
              source={bgImage}
              style={{ width: "100%", height: "100%", margin: 0 }}
              imageStyle={{ resizeMode: "cover" }}
            >
                  <Header style={{ backgroundColor: "#dd3737" }} transparent>
                    <Right>
                      <Body>
                        <Title style={{ color: "white" }}>Booked Hotels</Title>
                      </Body>
                    </Right>
                  </Header>
                  <ScrollView>
                    <Content>
                        
                        
                      {bookedHotels.map(item => (
                        <Card
                          style={{ backgroundColor: "transparent" }}
                          key={item.id}
                        >
                          <CardItem style={{ backgroundColor: "#dd3737" }}>
                            <Body style={{}}>
                              <Text
                                style={{
                                  color: "white",
                                  fontSize: 24,
                                  fontWeight: "bold",
                                  alignSelf: "center"
                                }}
                              >
                                {item.title}
                              </Text>
                            </Body>
                          </CardItem>
                          <CardItem
                            style={{ backgroundColor: "rgba(255, 255, 255, 0.2)" }}
                          >
                            <Body
                              style={{
                                flexDirection: "column",
                                justifyContent: "center"
                              }}
                            >
                              <Text
                                style={{
                                  fontWeight: "bold",
                                  alignSelf: "center",
                                  color: "white"
                                }}
                              >
                                {" "}
                                Address:{" "}
                              </Text>
                              <Text
                                style={{
                                  alignSelf: "center",
                                  marginTop: 5,
                                  color: "white"
                                }}
                              >
                                {item.address}
                              </Text>
                              <Text
                                style={{
                                  alignSelf: "center",
                                  fontWeight: "bold",
                                  fontSize: 16,
                                  marginTop: 10,
                                  color: "white"
                                }}
                              >
                                {" "}
                                Price Starting From {item.price}
                              </Text>
                            </Body>
                          </CardItem>
                        </Card>
                      ))}
                      
                    </Content>
                  </ScrollView>
            </ImageBackground>
          </Container>

        );
    }

}