import React, { Component } from 'react';

import { Actions } from 'react-native-router-flux';
import { removeStudent } from '../services/DataService';
import { Alert } from 'react-native';
import { Container, Content, Footer, FooterTab, Button, Icon, Text, List } from 'native-base';
import { db } from '../config/db';
import StudentList from '../components/StudentList';
import {
  
  View,
 
  TouchableOpacity,
  Linking,
  StyleSheet
} from 'react-native';
import SplashScreen from 'react-native-splash-screen'
let studentsRef = db.ref('/Product');

export default class HomeScreen extends Component {
  componentDidMount() {
    SplashScreen.hide();
}


  constructor(){
    super();
    this.state = {
    students: []
    }
  }

  componentDidMount() {
    studentsRef.on('value', (snapshot) => {
        let data = snapshot.val();
          if(data){
            let firebaseData = Object.values(data);
            this.setState({students: firebaseData});
            console.log(this.state.students);
          }
     });
  }

  deleteConfirmation= (matricno) => {
    Alert.alert(
      'Status', 
      'Are you sure you want to delete this student?',
      [
        {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
        {text: 'OK', onPress: () => removeStudent(matricno)}
      ],
      { cancelable: false }
      );
  }

  render() {
    return (
      <TouchableOpacity
      
                style={styles.container}
                onPress={(e)=> {
                    Linking.openURL('https://console.firebase.google.com/project/fir-example-a56f4/database/fir-example-a56f4/data');
                }}
            >
       <Text style={styles.item}>
               Press here to go to open firebase 
                </Text>      
      <Container>

        <Content padder>
        <Text style={{textAlign: "center", height: 40, fontWeight: "bold", marginTop: 20}}>List of Available Products</Text>
        <List vertical={true}>
        <StudentList students={this.state.students} onPress={(matricno) => {Actions.ViewScreen({matricno: matricno});}} onLongPress={(matricno) => {this.deleteConfirmation(matricno)}} />
        </List>
        <Text>{this.props.matricno}</Text>
        </Content>
  
        <Footer>
          <FooterTab>
            <Button vertical onPress={() => {Actions.NewScreen();}}>
              <Icon name="person" />
              <Text>Add New Product</Text>
            </Button>
          </FooterTab>
        </Footer>
        
      </Container>
      
      </TouchableOpacity>     
    );
  }
  
}
const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#f3f2f2',
      marginTop: 30
  },
  item: {
      fontSize: 20,
  },
  line: {
      flex: 1,
      height: 0.3,
      backgroundColor: 'darkgray',
  },
})