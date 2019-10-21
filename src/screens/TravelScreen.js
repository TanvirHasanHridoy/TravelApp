import React from "react";
import { Button, Text, StyleSheet, View , ScrollView} from "react-native";
import TopBoxes from "../component/TopBoxes";
import ScrollableTiles from "../component/ScrollableTiles";
import ImagesBackgrounds from "../component/ImagesBackgrounds";


const TravelScreen = props => (
  <ScrollView style={[{paddingTop:50},{backgroundColor:'rgb(26, 49, 199)'},{borderRadius:7},]}>

    <View style={{paddingBottom:50}}>

      {/* <ImagesDetails title="beach" source={require('../../assets/beach.jpg')} score={9}/>
      <ImagesDetails title="mountain" source={require('../../assets/mountain.jpg')} score={7}/>
      <ImagesDetails title="forest" source={require('../../assets/forest.jpg')} score={8}/> */}
        <TopBoxes 
        name1='HOTEL' name2='FLIGHTS' name3='HOLIDAY' name4='TOUR' name5='TRANSFER'
        icon1='hotel' icon2='plane-departure' icon3='glass-cheers' icon4='hiking' icon5='car' 
      />
      <Text style={[styles.header,{paddingBottom: 5},{paddingTop: 14},{paddingLeft: 12},{backgroundColor:'white'}]}>SEE THE DEALS</Text>
      
      <ScrollView  horizontal={true} showsHorizontalScrollIndicator={false}>

        <ScrollableTiles placename='Kyoto' source={require('../../assets/images/kyoto.jpg')}/> 
        
        <ScrollableTiles placename='Hongkong' source={require('../../assets/images/hongkong.jpg')}/> 
        
        <ScrollableTiles placename='Tokyo' source={require('../../assets/images/tokyo.jpg')}/> 
        
        <ScrollableTiles placename='beach' source={require('../../assets/beach.jpg')}/> 
        
        <ScrollableTiles placename='beach' source={require('../../assets/beach.jpg')}/> 
        
        <ScrollableTiles placename='beach' source={require('../../assets/beach.jpg')}/> 

      </ScrollView>
      
      <ImagesBackgrounds price='1000' days='4 days' discount='10' picplace='Pattaya, Thailand' imgback={require('../../assets/beach.jpg') }/>
      <ImagesBackgrounds price='700' days='3 days' discount='15' picplace='Bali, Indonesia' imgback={require('../../assets/images/bali.jpg') }/>
      <ImagesBackgrounds price='500' days='5 days' discount='20' picplace='Sikkim, India' imgback={require('../../assets/images/sikkim.jpg') }/>
     
    </View>

  </ScrollView>
);




const styles = StyleSheet.create({
  text: {
    fontSize: 18
  },
  header:{
    fontSize:20,
    fontWeight:'bold',
  }
});

export default TravelScreen;
