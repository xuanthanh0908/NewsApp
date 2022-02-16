import React from 'react'
import { View, Text, StyleSheet, StatusBar, ScrollView } from 'react-native'

export default function Screen({ children, isSearchFocused }) {
  const keyboardShouldPersistTaps = isSearchFocused ? 'always' : 'never'
  return (
    <ScrollView
      keyboardShouldPersistTaps={keyboardShouldPersistTaps}
      scrollEnabled={!isSearchFocused}
      showsVerticalScrollIndicator={false}
      style={styles.Container}
    >
      {children}
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  Container: {
    marginTop: StatusBar.currentHeight,
    paddingHorizontal: 15,
    backgroundColor: '#f7f3f3',
    flex: 1,
  },
})
