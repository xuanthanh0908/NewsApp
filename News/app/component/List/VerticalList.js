import React from 'react';
import { View, Text, StyleSheet,FlatList } from 'react-native';
import Title from '../Common/Title';
import VerticalCard from '../Cards/VerticalCard';

export default function VerticalList({title,data}) {
  return (
    <View>
      <Title size={20}>{title}</Title>
      <View style = {styles.container}>
        {data.map(item =>(
            <VerticalCard item={item} key={item.id}/>
        ))}
      </View>
     </View>
  );
}
const styles = StyleSheet.create({
    container :{
        marginVertical : 15
    }
})
