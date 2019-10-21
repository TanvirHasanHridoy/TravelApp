import React,{useState} from "react";
import {ScrollView, Button, Text, StyleSheet, View, Image} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome5';

const TopBoxes = props => {
 //  const [count, setCount]=useState(0);
    return(  
        <ScrollView >
            <View style={{backgroundColor:'rgb(26, 49, 199)'}}>
                <View style={{display:'flex', flexDirection: 'row'}}>
                    <View style={[styles.box,]}>
                        <Icon style={styles.icons} name={props.icon1} size={30}/>
                        <Text style={styles.text}>{props.name1}</Text>
                    </View>
                    <View  style={[styles.box,]}>
                        <Icon style={styles.icons} name={props.icon2} size={30}/>
                        <Text style={styles.text}>{props.name2}</Text>
                    </View>
                </View>
                <View style={{display:'flex', flexDirection: 'row'}}>
                    <View  style={styles.box}>
                        <Icon style={styles.icons} name={props.icon3} size={30}/>
                        <Text style={styles.text}>{props.name3}</Text>
                    </View>
                    <View  style={styles.box}>
                        <Icon style={styles.icons} name={props.icon4} size={30}/>
                        <Text style={styles.text}>{props.name4}</Text>
                    </View>
                    <View  style={styles.box}>
                        <Icon style={styles.icons} name={props.icon5} size={30}/>
                        <Text style={styles.text}>{props.name5}</Text>
                    </View>
                </View>
                    {/* <Image
                    style={{width: 180, height: 30,}}
                    source={require('../../assets/beach.jpg')}
                    />   */}
              
            </View>
        </ScrollView>
    );
};
const styles = StyleSheet.create({
  text: {
    fontSize: 15,
    color:'white',
    fontWeight:'bold' 
  },
  box: {
    flex:1,
    alignItems:'center',
    textAlignVertical:'center',
    justifyContent:'center',
    textAlign:'center',
    height:100,
    borderRadius: 10,
    backgroundColor:'rgba(136, 187, 252,0.3)',
    margin:7,
    marginBottom:10,
    width: '50%',  
  },
  image:{

  },
  icons:{
      color:'white'
    // display: 'block',
  }

});

export default TopBoxes;
