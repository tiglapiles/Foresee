import React from "react";
import { FlatList, View, Platform } from "react-native";
import ProductCard from "../Components/ProductCard.js";
import styles from "./Styles/HomeYouStyle";

export default function HomeYou(props) {
  scrollEndRefresh = () => {
    console.log("flatlist scroll end ");
  };
  itemSeparator = ({ highlighted }) => (
    <View style={[styles.separator, highlighted && { marginLeft: 0 }]} />
  );

  return (
    <View style={styles.container}>
      <FlatList
        columnWrapperStyle={{ justifyContent: "space-between" }}
        ItemSeparatorComponent={this.itemSeparator}
        renderItem={({ item, index, section }) => (
          <ProductCard {...props} item={item} />
        )}
        data={require("../Fixtures/cardItem.json")}
        keyExtractor={(item, index) => index}
        numColumns={2}
        horizontal={false}
        onEndReached={this.scrollEndRefresh}
      />
    </View>
  );
}
