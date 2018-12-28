import React, { Component } from 'react';
import { Font } from 'expo';
import { Router, Scene } from 'react-native-router-flux';
import HomeScreen from './src/screens/HomeScreen';
import NewScreen from './src/screens/NewScreen';
import ViewScreen from './src/screens/ViewScreen';
import Biometric from './src/screens/Biometric';

export default class App extends Component {
	 state = {
    fontLoaded: false,
  }
  async componentWillMount() {
    await Expo.Font.loadAsync({
      'Roboto_medium': require('./assets/fonts/Roboto_medium.ttf'),
    });
    this.setState({ fontLoaded: true });
  }
	
  render() {
	 
    return (
	 this.state.fontLoaded ? (
      <Router hideNavBar={true}>
        <Scene key="root">
        <Scene key="Biometric" component={Biometric} backTitle=" " title="Put your Finger to Scan" initial={true} />
          <Scene key="HomeScreen" component={HomeScreen} backTitle=" " title="Home"  />
          <Scene key="NewScreen" component={NewScreen} backTitle=" " title="Enter New Product" />
          <Scene key="ViewScreen" component={ViewScreen} backTitle=" " title="Update Details" />
          
        </Scene>
      </Router>
	        
          ) : null
      
	  
    )
  }
}