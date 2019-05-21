import { createAppContainer, createStackNavigator } from "react-navigation";
// import { SignUp } from "./views/SignUp";
import { Signup } from '../containers/Auth';
// import { Login } from "./views/Login";
import Login from '../containers/Auth';
// import { Home } from "./views/Home";
import Home from '../containers/Home';

import  {BookedHotels}  from './views/BookedHotels';

const AppNavigator = createStackNavigator({
  LoginScreen: Login,
  HomeScreen: Home,
  Signup: Signup,
  BookedScreen: BookedHotels
  
});

export default createAppContainer(AppNavigator);
