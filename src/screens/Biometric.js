import React, { Component } from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Platform, Alert,Button,Icon, Image} from 'react-native';
import { Constants } from 'expo';
import { Actions } from 'react-native-router-flux';
import DropdownAlert from 'react-native-dropdownalert';


export default class Biometric extends Component {
  state = {
    compatible: false,
    loggedIn:false,
  };

  componentDidMount() {
    this.checkDeviceForHardware();
  }

  checkDeviceForHardware = async () => {
    let compatible = await Expo.Fingerprint.hasHardwareAsync();
    this.setState({ compatible });
    if (!compatible && !loogedIn) {
      this.showIncompatibleAlert();
     
    }
  };

  showIncompatibleAlert = () => {
    this.dropdown.alertWithType(
      'error',
      'Incompatible Device',
      'Current device does not have the necessary hardware to use this API.'
    );
  };

  checkForBiometrics = async () => {
    let biometricRecords = await Expo.Fingerprint.isEnrolledAsync();
    if (!biometricRecords) {
      this.dropdown.alertWithType(
        'warn',
        'No Biometrics Found',
        'Please ensure you have set up biometrics in your OS settings.'
      );
    } else {
      this.handleLoginPress();

    }
  };
  
  handleLoginPress = () => {
    if (Platform.OS === 'android') {
      this.showAndroidAlert();
    } else {
      this.scanBiometrics();
    }
  };

  showAndroidAlert = () => {
    Alert.alert('Fingerprint Scan', 'Place your finger over the finger print touch sensor.');
    this.scanBiometrics();
  };

  scanBiometrics = async () => {
    let result = await Expo.Fingerprint.authenticateAsync('Biometric Scan.');
    if (result.success) {
      this.dropdown.alertWithType(
        'success',
        'Welcome admin!',
        'Bio-Authentication succeeded.'
      );
      this.state.loggedIn=true;

    } else {
      this.dropdown.alertWithType(
        'error',
        'Uh oh!',
        'Bio-Authentication failed or canceled.'
      );
    }
  };

  render() {
    return ( <View style={styles.container}>
    <Text>Admin Inventory Control</Text>
      <Image
        style={styles.logo}
       
        source={require('./assets/fingerprint.png')}
      />
    
      <TouchableOpacity
        onPress={
          this.state.compatible
            ? this.checkForBiometrics
            : this.showIncompatibleAlert
        }
        style={styles.button}>
        <Text style={styles.buttonText}>
          Biometric Login
        </Text>
      </TouchableOpacity>
        <DropdownAlert
        ref={ref => (this.dropdown = ref)}
        closeInterval={5000}
      />
      <Button vertical 
       onPress= {() => {
          
            Actions.HomeScreen();
        }
      }
      title="Home">
          </Button>
    </View>
   
    );
  }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ECF0F1',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 250,
    height: 60,
    backgroundColor: 'transparent',
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#fff',
  },
  buttonText: {
    fontSize: 30,
    color: '#0C0B0B',
    textShadowColor: '#0C0B0B',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },
  logo: {
    height: 158,
    width: 138,
  },
});
