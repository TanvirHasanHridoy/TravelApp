import React,{useState} from "react";
import {ScrollView, Button, Text, StyleSheet, View, Image} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome5';

const ScrollableTiles = props => {
 //  const [count, setCount]=useState(0);
    return(  
        <ScrollView  >
            
            <View style={[{backgroundColor:'rgb(187, 232, 242)'},{borderRadius:7}]}>
                
                {/* <View style={{display:'flex', flexDirection: 'row'}}> */}
                <View style={[{backgroundColor:'white'},{paddingLeft:8}]}>
                    <Image
                    style={[{width: 220, height: '100%',},styles.box]}
                    source={props.source}
                    />  
                    <Text style={styles.text}>{props.placename}</Text>
                </View>
            
            </View>
        </ScrollView>
    );
};
const styles = StyleSheet.create({
  text: {
    fontSize: 16,fontWeight:'bold',paddingLeft:10
  },
  box: {
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    height:120,
    borderRadius: 8,
    backgroundColor:'white',
    // backgroundColor:'rgba(136, 187, 252,0.8)',
    margin:4,
    width: 150,  
  },
  image:{

  },
  icons:{
    // display: 'block',
  }

});

export default ScrollableTiles;
