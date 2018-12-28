import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { Alert } from 'react-native';
import { Container, Content, Footer, FooterTab, Button, Icon, Text, Form, Item, Label, Input, Picker } from 'native-base';
import { addStudent } from '../services/DataService';

export default class NewScreen extends Component {
  constructor() {
    super();
    this.state = {
      name: null,
      matricno: null,
      major: null,
      year: 0,
      
    };
  }

  setName = (value) =>{
    this.setState({ name: value });
  }

  setMatricNo = (value) =>{
    this.setState({ matricno: value });
  }

  selectMajor = (value) => {
    this.setState({ major: value });
  }

  selectYear = (value) => {
    this.setState({ year: value });
  }

 

  saveData = () =>{
    if(this.state.name && this.state.matricno && this.state.major && this.state.year ){
      if(isNaN(this.state.matricno)){
        Alert.alert('Status','Invalid Matric No!');
      }
       else{
         addStudent(this.state.name, this.state.matricno, this.state.major, this.state.year);
       }
    } else{
       Alert.alert('Status','Empty Field(s)!');
    }
  }

  render() {
    return (
      <Container>
        <Content padder>
        <Text style={{textAlign: "center", height: 40, fontWeight: "bold", marginTop: 20}}>Add Product</Text>
        <Form>
        <Item fixedLabel last>
              <Label>Product ID</Label>
              <Input onChangeText={this.setMatricNo} />
        </Item>
        <Item fixedLabel last>
              <Label>Product Name</Label>
              <Input onChangeText={this.setName} />
        </Item>
        
        <Item fixedLabel picker last>
          <Label>Product Type</Label>
          <Picker 
          mode="dropdown" 
          iosIcon={<Icon name="ios-arrow-down-outline" />}
          style={{ width: undefined }}
          placeholder="Select Type"
          placeholderStyle={{ color: "#bfc6ea" }}
          placeholderIconColor="#007aff"
          selectedValue={this.state.major}
          onValueChange={this.selectMajor}
          Title="Major"
          >
           <Picker.Item label="Food" value="Food" />
          <Picker.Item label="Inventory" value="Home Appliances" />
          <Picker.Item label="Electronic Device" value="Electronic Device" />
          <Picker.Item label="Sports" value="Sports" />
          <Picker.Item label="Entertainments" value="Entertainment" />
          </Picker>
        </Item>

        <Item fixedLabel picker last>
          <Label>Quantity</Label>
          <Picker 
          mode="dropdown" 
          iosIcon={<Icon name="ios-arrow-down-outline" />}
          style={{ width: undefined }}
          placeholder="Select Quantity"
          placeholderStyle={{ color: "#bfc6ea" }}
          placeholderIconColor="#007aff"
          selectedValue={this.state.year}
          onValueChange={this.selectYear}
          >
          <Picker.Item label="5" value="5" />
          <Picker.Item label="10" value="10" />
          <Picker.Item label="20" value="20" />
          <Picker.Item label="50" value="50" />
          </Picker>
        </Item>

        
        </Form>

          <Button block last style={{marginTop: 50}} onPress={this.saveData}>
            <Text style={{fontWeight: "bold"}}>Save</Text>
          </Button>
        </Content>

        <Footer>
          <FooterTab>
          <Button vertical onPress={() => {Actions.HomeScreen();}}>
              <Icon name="home" />
              <Text>Home</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}