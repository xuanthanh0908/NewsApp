import React from 'react';
import { View, Text,StyleSheet } from 'react-native';

export default function Title({children,numberOfLine = 2,size = 18}) {
  return (
    <Text 
        numberOfLines={numberOfLine}
        style = {{fontWeight : 'bold',fontSize : size}}
    >{children}</Text>
  );
}
const styles = StyleSheet.create({

})