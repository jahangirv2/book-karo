import React from "react";
import { Font, AppLoading } from "expo";
import { createAppContainer } from "react-navigation";
import AppNavigator from "./components/AppNavigator";
import { Provider } from 'react-redux';
import store from './store';
import { SplashScreen } from "./components/views/SplashScreen";

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = { loading: true,loader: true };
  }
  async componentWillMount() {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
    });
    this.setState({ loading: false });
  }
  performTimeConsumingTask = async() => {
    return new Promise((resolve) =>
      setTimeout(
        () => { resolve('result') },
        2500
      )
    );
  }
  async componentDidMount(){
    const data = await this.performTimeConsumingTask();

  if (data !== null) {
    this.setState({ loader: false });
  }
  }
  render() {
    if (this.state.loader) {
      return <SplashScreen />;
    }
    return (
      <Provider store={store} >
        <AppContainer/>
      </Provider>
    );
  }
}
