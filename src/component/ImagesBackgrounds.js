import React,{useState} from "react";
import {ImageBackground, ScrollView, Button, Text, StyleSheet, View, Image} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome5';

const ImagesBackgrounds = props => {
 //  const [count, setCount]=useState(0);
    return(  
       
    <View style={{backgroundColor:'white',justifyContent: 'center',
    alignItems: 'center',}}>
            
        <ImageBackground source={props.imgback} style={[styles.image,{ marginBottom:7}]}>
            {/* <Text>HEY</Text> */}
            <Icon style={{color:'white', marginLeft:15,marginTop:20}} name='calendar-alt' size={18}/>
            <Text style={[styles.text,]}>{props.days}</Text>
            <Icon style={{color:'white', marginLeft:15,marginTop:20, paddingLeft:'20%'}} name='dollar-sign' size={18}/>
            <Text style={[styles.text,]}>{props.price}</Text>
            <Icon style={{color:'white', marginLeft:15,marginTop:20, paddingLeft:'7%'}} name='share-square' size={18}/>
            <Text style={[styles.text,]}>{props.discount}</Text>
            <Text style={[styles.text,{marginLeft:'-80%',marginTop:'50%'}]}>{props.picplace}</Text>
            
        </ImageBackground>
                       
    </View>
    );
};
const styles = StyleSheet.create({
  text: {
    fontSize: 18,fontWeight:'bold',paddingLeft:10, marginTop:15, color:'white'
  },
 
  image:{
    width: '100%', height:250, marginTop:15, flexDirection:'row',
  },

});

export default ImagesBackgrounds;
