import React from 'react';
import {  View,Button, Text, StyleSheet } from 'react-native';

const TestScreen = props => {
  return(
    <View>
        
      <Button title="Home" onPress={() => props.navigation.navigate("Home")}/>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default TestScreen;
