import React,{useState} from "react";
import {ScrollView, Button, Text, StyleSheet, View, Image} from "react-native";

const TopBoxes = props => {
 //  const [count, setCount]=useState(0);
    return(  
        <ScrollView >
            <View style={{backgroundColor:'rgb(187, 232, 242)'}}>
                <View style={{display:'flex', flexDirection: 'row'}}>
                    <Text style={styles.box}>BALAMAR</Text>
                    <Text style={styles.box}>BALAMAR</Text>         
                </View>
                <View style={{flex: 1, flexDirection: 'row', }}>
                    <Text style={styles.box}>BALAMAR</Text>
                    <Text style={styles.box}>BALAMAR</Text>         
                    <Text style={styles.box}>BALAMAR</Text>         
                </View>
                <View style={styles.box}>
                            
                <Text style={styles.box}>BALAMAR</Text> 
                    <Image source={require('../../assets/beach.jpg')}/>
                </View>
            </View>
        </ScrollView>
    );
};
const styles = StyleSheet.create({
  text: {
    fontSize: 30
  },
  box: {
      flex:1,
      alignItems:'center',
      textAlignVertical:'center',
      justifyContent:'center',
      textAlign:'center',
    //   alignContent:'center',
    //   alignItems:'center',
      height:200,
      borderRadius: 10,
      backgroundColor:'rgba(136, 187, 252,0.8)',
      margin:7,
      width: 200,  
  },

});

export default TopBoxes;
