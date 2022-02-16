import React from 'react'
import { View, Text, StyleSheet, Dimensions, ScrollView } from 'react-native'
import FlatCard from '../Cards/FlatCard'
import { useNavigation } from '@react-navigation/native'

const { height } = Dimensions.get('window')
export default function SearchModel({ visible, data, notFound }) {
  const navigation = useNavigation()
  if (!visible) return null

  if (visible && data.length === 0 && !notFound) return null

  if (notFound)
    return (
      <View
        style={[
          styles.container,
          { justifyContent: 'center', alignItems: 'center' },
        ]}
      >
        <Text style={styles.TextNotFound}>{notFound}</Text>
      </View>
    )
  return (
    <View style={styles.container}>
      <ScrollView
        keyboardDismissMode="on-drag"
        keyboardShouldPersistTaps="always"
      >
        {data.map((item) => (
          <FlatCard
            item={item}
            key={item.id}
            onPress={() => {
              navigation.navigate('Detail', { item })
            }}
          />
        ))}
      </ScrollView>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 60,
    backgroundColor: 'rgba(0,0,0,0.5)',
    width: '100%',
    maxHeight: height / 2,
    zIndex: 1,
    padding: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  TextNotFound: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
})
