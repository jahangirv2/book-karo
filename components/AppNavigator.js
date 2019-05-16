import { createAppContainer, createStackNavigator } from "react-navigation";
// import { SignUp } from "./views/SignUp";
import { Signup } from '../containers/Auth';
// import { Login } from "./views/Login";
import Login from '../containers/Auth';
// import { Home } from "./views/Home";
import Home from '../containers/Home';

const AppNavigator = createStackNavigator({
  
  LoginScreen: Login,
  Signup: Signup,
  HomeScreen: Home,
});

export default createAppContainer(AppNavigator);
