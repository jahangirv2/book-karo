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
import { KeyboardAvoidingView, View,ImageBackground  } from "react-native";
import { AppLoading } from 'expo';
import { ScrollView } from "react-native-gesture-handler";
import bgImage from '../../tablefinal.jpg';



export class Home extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      showDatePicker: false,
      item: [],
      chosenDate: new Date(),
    }
  }
componentWillMount(){
  // const { fetchHotels } = this.props;
  this.props.fetchHotels().then(()=> this.checkifReceived());
}

checkifReceived = () => {
  alert(JSON.stringify(this.props.data))
}

  static navigationOptions = {
    header: null
  };
  setDate = (newDate) => {
    this.setState({ chosenDate: newDate, showDatePicker:false,});
    // alert("Hotel Booked");
  }
  render() {
    if(this.props.isFetching){
      return <Spinner color = "red" style={{flex: 1,
        alignItems: 'center',
        justifyContent: 'center',}}/>
    }
    
    if(this.state.showDatePicker){
      
      return(
        <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
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
            placeHolderTextStyle={{ color: "black" }}
            onDateChange={this.setDate}
            disabled={false}
            >Select Date</DatePicker>
            </View>
      )
      
    }
    const { data } = this.props;
    // const { data } = this.props;
    // const { fetchHotels } = this.props;
    // const { data } = this.props;
    // data.json();
    // alert(JSON.stringify(this.props.data));
    // alert(JSON.stringify(this.state.data))
    // if(this.props.data != null){
      submit = (cardData) => {
        this.setState({item: cardData,showDatePicker:true});
      }
    return (
      <Container>
        <ImageBackground 
                 source={bgImage}
                 style={{width:"100%",height:"100%",margin:0}}
                 imageStyle={{resizeMode:"cover"}}
                 >
        <Header style={{backgroundColor:"#dd3737",}} transparent >
            <Right>
            <Body>
              <Title style={{color:"white"}}>
              Home
              </Title>
            </Body>
            </Right>
            </Header>
            <ScrollView>
            
        <Content>
          {/* <Text> */}
            {data.map(item=> (
              
               <Card style={{backgroundColor:"transparent"}} key={item.id}> 
                 <CardItem style={{backgroundColor:"#dd3737"}} >
                  <Body style={{}}>
                    <Text style={{color:"white",fontSize:24,fontWeight:'bold',alignSelf:"center",}}>
                        {item.title}
                    </Text>
                  </Body>
                  </CardItem> 
                  <CardItem style={{backgroundColor:'rgba(255, 255, 255, 0.2)'}}>
                    {/* <Item> */}
                    <Body style={{flexDirection:"column",justifyContent:"center"}}>
                      <Text style={{fontWeight:"bold",alignSelf:"center",color:"white"}}> Address: </Text><Text style={{alignSelf:"center",marginTop:5,color:"white"}}>{item.address}</Text>
                    {/* </Body> */}
                    {/* </Item> */}
                  {/* </CardItem> */}
                  {/* <CardItem style={{}}> */}
                    {/* <Body> */}
                      <Text style={{alignSelf:"center",fontWeight:"bold",fontSize:16,marginTop:10,color:"white"}}> Price Starting From {item.price}</Text>
                    {/* </Body> */}
                  {/* </CardItem> */}
                  {/* <CardItem> */}
                    {/* <Body> */}
                    <Button block rounded style={{backgroundColor:"#dd3737",alignSelf:"center",marginTop:10}}
                  onPress={() => submit(item)}
                >
                  <Text>
                    Book Now!
                  </Text>
                </Button>
                    </Body>
                  </CardItem>
                  
             
                </Card>
                
              // <Text key = {item.id}>
              //   {item.title}
              // </Text>
              
            ))}
            
          {/* </Text> */}
          
        </Content>
        {/* </ImageBackground> */}
        </ScrollView>
        </ImageBackground>
      </Container>
    );
  }
// }
}
