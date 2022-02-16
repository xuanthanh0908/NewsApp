import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import BlockCard from './Cards/BlockCard'
import { useNavigation } from '@react-navigation/native'

export default function FeatureNews({ item }) {
  const navigation = useNavigation()
  return (
    <BlockCard
      item={item}
      onPress={() => navigation.navigate('Detail', { item })}
      style={{ marginVertical: 15 }}
    />
  )
}
const styles = StyleSheet.create({})
