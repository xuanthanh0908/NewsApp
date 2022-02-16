import React from "react";
import { View, Text, StyleSheet, StatusBar,ScrollView } from "react-native";
import VerticalList from "./VerticalList";

export default function NewsList({ route }) {
  return (
    <ScrollView>
      <View style={styles.HeaderContainer}>
        <Text style={styles.categoryTitle}>{route.params.category}</Text>
      </View>
      <View style = {styles.relatedList}>
        <VerticalList title="" data={route.params.item} />
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  HeaderContainer: {
    width: "100%",
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    marginTop: StatusBar.currentHeight,
    backgroundColor: "#4e4d4d",
  },
  categoryTitle: {
    fontSize: 20,
    fontWeight: "bold",
    textTransform: "uppercase",
    color: "white",
  },
  relatedList :{
    paddingHorizontal : 10
  }
});
