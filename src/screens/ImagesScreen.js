import React from "react";
import { Button, Text, StyleSheet, View , ScrollView} from "react-native";
import ImagesDetails from "../component/ImagesDetails";


const ImagesScreen = props => (
  <ScrollView>
    <ImagesDetails title="beach" source={require('../../assets/beach.jpg')} score={9}/>
    <ImagesDetails title="mountain" source={require('../../assets/mountain.jpg')} score={7}/>
    <ImagesDetails title="forest" source={require('../../assets/forest.jpg')} score={8}/>
  </ScrollView>
);

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default ImagesScreen;
