import React, { Component } from 'react';
import { Container, Content, Footer, FooterTab, Button, Icon, Text, Form, Item, Label, Input, Picker } from 'native-base';
import { Actions } from 'react-native-router-flux';
import { db } from '../config/db';
import { updateStudent } from '../services/DataService';

let studentsRef = db.ref('/Product');

export default class ViewScreen extends Component {
  constructor(){
   super();
   this.state = {
     students: [],
     name: null,
     matricno: null,
     major: null,
     year: 0,
     status: null,
     postID: null
   }
  }

  componentDidMount() {
    let query = studentsRef.orderByChild("matricno").equalTo(this.props.matricno);
      query.once('value', (snapshot) => {
      let data = snapshot.val();
          if(data){
            let firebaseData = Object.values(data);
            this.setState({students: firebaseData},()=>{
              this.state.students.map((element) => {
                this.setState({
                  name: element.name,
                  matricno: element.matricno,
                  major: element.major,
                  year: element.year,
               
                });
              });
            });
          }
     });
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

  

  updateData = () =>{
    if(this.state.name && this.state.matricno && this.state.major && this.state.year ){
      if(isNaN(this.state.matricno)){
        Alert.alert('Status','Invalid Matric No!');
      }
       else{
         updateStudent(this.state.name, this.state.matricno, this.state.major, this.state.year);
       }
    } else{
       Alert.alert('Status','Empty Field(s)!');
    }
  }

  render() {
    return (
      <Container>
        <Content padder>
        <Text style={{textAlign: "center", height: 40, fontWeight: "bold", marginTop: 20}}>Product ID : {this.state.matricno}</Text>
        <Text>{this.state.postID}</Text>
        <Form>
       
        <Item fixedLabel last>
              <Label>Product ID</Label>
              <Input onChangeText={this.setMatricNo} value={this.state.matricno} disabled={true} />
        </Item>
        <Item fixedLabel last>
              <Label>Product Name</Label>
              <Input onChangeText={this.setName} value={this.state.name} />
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
          Title="Product Type"
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
          placeholder="Select Year"
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

          <Button block last style={{marginTop: 50}} onPress={this.updateData}>
            <Text style={{fontWeight: "bold"}}>Update</Text>
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