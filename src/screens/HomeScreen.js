import React from 'react';
import {  View,Button, Text, StyleSheet } from 'react-native';

const HomeScreen = props => {
  return(
    <View>
      <Text>FUCK RN    </Text>
      <Button title="IMAGE SCREEN" onPress={()=>(props.navigation.navigate("Image"))} />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
