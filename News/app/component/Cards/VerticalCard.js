import React from "react";
import { View, Text } from "react-native";
import FlatCard from "./FlatCard";
import ViewMore from "./ViewMore";
import { useNavigation } from "@react-navigation/native";

export default function VerticalCard({ item }) {
  const navigation = useNavigation();
  if (item.type === "viewMore") {
    return <ViewMore item={item} />;
  } else
    return (
      <FlatCard
        onPress={() => navigation.navigate("Detail", { item })}
        item={item}
      />
    );
}
