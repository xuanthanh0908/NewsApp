import React from 'react';
import { View, Text, StyleSheet,FlatList } from 'react-native';
import Title from '../Common/Title';
import SmallCard from '../Cards/SmallCard'

export default function HorizotalList({title,data}) {
  return (
    <View>
      <Title size={20}>{title}</Title>
      <View style = {styles.Divider}></View>
      <FlatList 
            data = {data} 
            keyExtractor={item => item.id} 
            horizontal
            showsHorizontalScrollIndicator = {false}
            renderItem={({item}) => <SmallCard item = {item}/>}
     />
     </View>
  );
}
const styles = StyleSheet.create({
  Divider :{
    marginVertical : 10
  }
})
