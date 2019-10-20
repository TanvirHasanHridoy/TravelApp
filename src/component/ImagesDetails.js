import React,{useState} from "react";
import { Button, Text, StyleSheet, View, Image} from "react-native";

const ImagesScreen = props => {
 //  const [count, setCount]=useState(0);
    return(  
        <View>
            <Image source={props.source} />
            <Text>Image of a {props.title}</Text>
            <Text>{props.score}</Text>
            <Text>{count}</Text>
            <Button title={props.title} onPress={()=>setCount(count+1)}/>
        </View>
    );
};
const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default ImagesScreen;
