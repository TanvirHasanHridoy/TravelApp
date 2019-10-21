import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Header} from 'react-native-elements';

const HeaderComponent = props => {
  return (
    <Header
      leftComponent={{
        icon: props.leftIcon,
        type: 'material',
        onPress: props.leftButton,
        color: '#fff',
      }}
      centerComponent={{
        text: props.title,
        style: {color: '#fff', fontSize: 22, fontFamily: Fonts.KellySlab},
      }}
    />
  );
};

export default HeaderComponent;
