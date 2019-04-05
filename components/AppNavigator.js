import { createAppContainer, createStackNavigator } from "react-navigation";
import { SignUp } from "./views/SignUp";
import { Login } from "./views/Login";
import { Home } from "./views/Home";

const AppNavigator = createStackNavigator({
  LoginScreen: Login,
  Signup: SignUp,
  HomeScreen: Home
});

export default createAppContainer(AppNavigator);
