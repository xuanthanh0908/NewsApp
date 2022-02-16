import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import HorizotalList from '../component/List/HorizotalList';

export default function BreakingNews({data}) {
  return (
    <HorizotalList title= "Breaking News" data={data}/>
  );
}
const styles = StyleSheet.create({})