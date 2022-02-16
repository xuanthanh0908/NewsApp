import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import AnimatedLottieView from 'lottie-react-native'

export default function ActivityIndicator({ visible }) {
  if (!visible) {
    return null
  }
  return (
    <View style={styles.container}>
      <AnimatedLottieView
        source={require('../../../assets/loading.json')}
        autoPlay
        loop
      />
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1,
  },
})
