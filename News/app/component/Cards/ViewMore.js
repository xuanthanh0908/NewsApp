import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import newsApi from "../../api/newsApi";
import { useNavigation } from "@react-navigation/native";

export default function ViewMore({ style, item }) {
  const { id, category: categoryPost } = item;
  const [categoryNews, setCategoryNews] = useState([]);
  const navigation = useNavigation();

  const fetchCategoryNews = async (category) => {
    const result = await newsApi.getByCategory(category);
    setCategoryNews(result.filter((item) => item.id != id));
  };
  useEffect(() => {
    fetchCategoryNews(categoryPost);
  }, []);
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("List", {
          item: categoryNews,
          category: categoryPost,
        })
      }
      style={[styles.container, style]}
    >
      <Text style={styles.TextViewMore}>View More</Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    width: "100%",
    height: 50,
    backgroundColor: "white",
  },
  TextViewMore: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#7a74e0",
  },
});
