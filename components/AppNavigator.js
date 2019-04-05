import { createAppContainer, createStackNavigator  } from 'react-navigation';
import { SignUp } from './views/SignUp';
import { Login } from './views/Login';

const AppNavigator = createStackNavigator({
    LoginScreen: Login,
    Signup: SignUp,
});

export default createAppContainer(AppNavigator);