import React from "react";
import { Button, Text, StyleSheet, View , ScrollView} from "react-native";
import TopBoxes from "../component/TopBoxes";


const TravelScreen = props => (
  <ScrollView>
    {/* <ImagesDetails title="beach" source={require('../../assets/beach.jpg')} score={9}/>
    <ImagesDetails title="mountain" source={require('../../assets/mountain.jpg')} score={7}/>
    <ImagesDetails title="forest" source={require('../../assets/forest.jpg')} score={8}/> */}
        <TopBoxes></TopBoxes>
  </ScrollView>
);

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default TravelScreen;
