import React from 'react';
import { View, Text,StyleSheet,Image,TouchableOpacity } from 'react-native';
import Title from '../Common/Title';
import SubTitle from '../Common/SubTitle';


export default function BlockCard({style,imageStyle,item,onPress}) {
  const {thumbnail, desc, title} = item;
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.7} style = {[styles.container,style]}>
        <Image style = {[styles.image,imageStyle]} source={{uri : thumbnail}}/>
        <View style = {styles.contenContainer}>
            <Title>{title}</Title>
            <SubTitle>{desc}</SubTitle>
        </View>
     </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
    container: {
        width : '100%',
        height : 300,
        borderRadius : 8,
        overflow : 'hidden',
        backgroundColor : '#fff',
        marginBottom : 10
    },
    image :{
        width : '100%',
        height : 200
    },
    contenContainer : {
        marginTop : 15
    }
})