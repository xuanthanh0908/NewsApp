import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import BlockCard from "./BlockCard";
import ViewMore from "./ViewMore";
import { useNavigation } from "@react-navigation/native";
const { width } = Dimensions.get("window");
export default function SmallCard({ item }) {
  const navigation = useNavigation();
  if (item.type == "viewMore") {
    return <ViewMore item={item} style={styles.viewMore} />;
  }
  return (
    <BlockCard
      item={item}
      onPress={() => navigation.push("Detail", { item })}
      style={styles.container}
      imageStyle={styles.Image}
    />
  );
}
const styles = StyleSheet.create({
  container: {
    width: width / 2,
    marginRight: 15,
    height: 200,
  },
  Image: {
    height: 100,
  },
  viewMore: {
    width: width / 2,
    height: 200,
  },
});
