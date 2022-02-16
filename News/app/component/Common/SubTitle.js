import React from 'react';
import { View, Text,StyleSheet } from 'react-native';

export default function SubTitle({children,numberOfLine = 2,size = 15}) {
  return (
    <Text 
        numberOfLines={numberOfLine}
        style = {{fontSize : size}}
    >{children}</Text>
  );
}
const styles = StyleSheet.create({

})