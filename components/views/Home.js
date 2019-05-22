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
// const { navigation } = this.props;

export class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showDatePicker: false,
      item: {},
      chosenDate: "",
      hotelSelected: "",
      emailId: this.props.navigation.state.params.itemId,
      booked: [],
      // itemId  : this.props.navigation.state.params.itemId,
    };
  }

  componentDidMount() {
    var that = this;
    // alert(JSON.stringify(this.state.emailId))
    // firebase.database().ref('booked/').orderByChild("email").equalTo(this.state.emailId)
    // .on('value',function (snapshot){
    //   // alert(JSON.stringify(snapshot.val()))
      
    // })
// firebase.database().ref("booked/").orderByChild("email")
//         .equalTo(this.state.emailId)
//         .on('value', function(snapshot)  {
          
//               alert(JSON.stringify(snapshot.val()))
              
//     });
    firebase.database().ref("booked/").orderByChild("email").equalTo(this.state.emailId)
    .once("value").then(function(snapshot) {
      snapshot.forEach(function (childSnapshot){
        // alert(JSON.stringify(childSnapshot.val().hotelSelected))
        that.setState({booked: [...that.state.booked,childSnapshot.val().hotelSelected]})
        // alert(JSON.stringify(that.state.booked))
      })
    })
    
// alert(JSON.stringify(this.state.booked))
    // firebase.database().ref('booked/').once('value', function (snapshot) {
    //   alert(JSON.stringify(snapshot.val()))
      
      // snapshot.val().map(item => {
      //   if(item.email === this.state.emailId){
      //     this.setState = {
      //       booked: item,
      //     }
      //   }
      // })
      // alert(JSON.stringify(this.state.booked))
  // });
    this.props.fetchHotels().then(() => this.checkifReceived());
  }

  handleOnItemSelect = item => this.setState({ item, showDatePicker: true });

  checkifReceived = () => {
    // alert(JSON.stringify(this.props.data));
  };

  static navigationOptions = {
    header: null
  };

  setDate = chosenDate => {
    var that = this;
    this.setState({ chosenDate, showDatePicker: false });
    const { navigation } = this.props;
    const itemId = navigation.getParam("itemId");
    this.state.emailId = itemId;
    //alert(itemId);
    firebase
      .database()
      .ref("booked")
      .push({
        date: chosenDate.toString(),
        hotelSelected: this.state.item,
        email: itemId
      }).then(()=>{
        firebase.database().ref("booked/").orderByChild("email").equalTo(this.state.emailId)
    .once("value").then(function(snapshot) {
      snapshot.forEach(function (childSnapshot){
        // alert(JSON.stringify(childSnapshot.val().hotelSelected))
        that.setState({
          booked: [...that.state.booked,childSnapshot.val().hotelSelected]
        }
          )
        // alert(JSON.stringify(that.state.booked))
      })
    })
      });
      
    

  };
  render() {
    // alert(JSON.stringify(this.state.booked))
    // const { navigation } = this.props;
    // const itemId = navigation.getParam('itemId');
    // alert(navigation.getParam('itemId'))
    // alert(JSON.stringify(itemId));

    const { data } = this.props;
    // alert(JSON.stringify(this.state.prevScreenItemId));
    const itemId = this.props.navigation.state.params.itemId;
    // alert(JSON.stringify(itemId));

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
                  <Button rounded onPress={() => this.props.navigation.navigate("BookedScreen",{
                    bookedHotels: this.state.booked

                  })} style= {{alignSelf:"center",backgroundColor: "#dd3737",marginTop:5}}>
                    <Text>
                      Show Bookings!
                    </Text>
                  </Button>
                </Content>
              </ScrollView>
            </>
          )}
        </ImageBackground>
      </Container>
    );
  }
}
