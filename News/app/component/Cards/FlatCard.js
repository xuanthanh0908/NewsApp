import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import Title from "../Common/Title";
import SubTitle from "../Common/SubTitle";

export default function FlatCard({ item, onPress }) {
  const { thumbnail, desc, title } = item;
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress}
      style={styles.container}
    >
      <Image style={styles.image} source={{ uri: thumbnail }} />
      <View style={styles.contenContainer}>
        <Title>{title}</Title>
        <SubTitle>{desc}</SubTitle>
      </View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 8,
    overflow: "hidden",
    marginBottom: 10,
    height: 80,
  },
  image: {
    flex: 0.35,
    height: "100%",
  },
  contenContainer: {
    flex: 0.65,
    paddingHorizontal: 5,
  },
});
