import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import HorizotalList from './List/HorizotalList';

export default function TechNews({data}) {
  return (
    <HorizotalList title= "Tech News" data={data}/>
  );
}
const styles = StyleSheet.create({})