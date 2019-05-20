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
  Right,
  Spinner,
  DatePicker
} from "native-base";
import { KeyboardAvoidingView, View, ImageBackground } from "react-native";
import { AppLoading } from "expo";
import { ScrollView } from "react-native-gesture-handler";
import bgImage from "../../tablefinal.jpg";
import firebase from "../../configs/firebase";

export class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showDatePicker: false,
      item: {},
      chosenDate: "",
      hotelSelected: "",
      emailId: ""
    };
  }

  componentDidMount() {
    this.props.fetchHotels().then(() => this.checkifReceived());
  }

  handleOnItemSelect = item => this.setState({ item, showDatePicker: true });

  checkifReceived = () => {
    alert(JSON.stringify(this.props.data));
  };

  static navigationOptions = {
    header: null
  };

  setDate = chosenDate => {
    this.setState({ chosenDate, showDatePicker: false });
    const { navigation } = this.props;
    const itemId = navigation.getParam("itemId");
    this.state.emailId = itemId;
    alert(itemId);
    firebase
      .database()
      .ref("booked")
      .set({
        date: chosenDate.toString(),
        hotelSelected: this.state.item
      });
  };
  render() {
    const { data } = this.props;

    if (this.props.isFetching) {
      return (
        <Spinner
          color="red"
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        />
      );
    }
    return (
      <Container>
        <ImageBackground
          source={bgImage}
          style={{ width: "100%", height: "100%", margin: 0 }}
          imageStyle={{ resizeMode: "cover" }}
        >
          {this.state.showDatePicker ? (
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <DatePicker
                defaultDate={new Date(2018, 4, 4)}
                minimumDate={new Date(2018, 1, 1)}
                maximumDate={new Date(2018, 12, 31)}
                locale={"en"}
                timeZoneOffsetInMinutes={undefined}
                modalTransparent={false}
                animationType={"fade"}
                androidMode={"default"}
                placeHolderText="Select date"
                textStyle={{ color: "green" }}
                placeHolderTextStyle={{ color: "white" }}
                onDateChange={this.setDate}
                disabled={false}
              />
            </View>
          ) : (
            <>
              <Header style={{ backgroundColor: "#dd3737" }} transparent>
                <Right>
                  <Body>
                    <Title style={{ color: "white" }}>Home</Title>
                  </Body>
                </Right>
              </Header>
              <ScrollView>
                <Content>
                  {data.map(item => (
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
                          <Button
                            block
                            rounded
                            style={{
                              backgroundColor: "#dd3737",
                              alignSelf: "center",
                              marginTop: 10
                            }}
                            onPress={() => this.handleOnItemSelect(item)}
                          >
                            <Text>Book Now!</Text>
                          </Button>
                        </Body>
                      </CardItem>
                    </Card>
                  ))}
                </Content>
              </ScrollView>
            </>
          )}
        </ImageBackground>
      </Container>
    );
  }
}
