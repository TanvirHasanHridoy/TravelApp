import React, { Component } from 'react';
import { Text, StyleSheet, View,Button,Image } from 'react-native';

class ImageScreen extends Component {

  constructor(){
    super();
    this.state = {
      show : true
    }
  }

  ShowHideComponent = () =>{
    if(this.state.show == true){
      this.setState({ show: false })
    }else{
      this.setState({ show: true })
    }
  }
  
  render(){
    return(
      <View>
      {this.state.show?(
      <View>
        <Image style={{height:50,width:50}} source={require('../../assets/mountain.jpg')}/>
      </View>
      ): null}
      <Button title="Hide/Show Component" onPress={this.ShowHideComponent}/>
    </View>
    )   
  }
}


export default ImageScreen;
