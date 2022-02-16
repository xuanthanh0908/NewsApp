import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
export default function Close({ onPress }) {
  return (
    <View style={styles.container}>
      <AntDesign
        name="close"
        size={24}
        color="white"
        onPress={onPress}
        style={styles.icon}
      />
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    marginVertical: 20,
  },
  icon: {
    backgroundColor: 'rgba(92,90,91,0.7)',
    padding: 10,
    borderRadius: 50,
  },
})
