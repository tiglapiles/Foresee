import React from "react";
import { Image, ScrollView, TouchableOpacity } from "react-native";
import { View, Text } from "native-base";
import styles from "./Styles/HomeMarketsStyle";

export default function HomeMarkets(props) {
  const handleTouch = e => {
    props.navigation.navigate("ProductDetail");
  };
  const markets = goods => {
    return goods.map((i, k) => (
      <View key={k} style={styles.boxs}>
        <Text style={styles.title}>{i.title}</Text>
        <View style={styles.imgs}>
          {i.imgs.map((o, j) => (
            <TouchableOpacity onPress={handleTouch} key={j}>
              <Image style={styles.img} source={{ uri: o }} />
            </TouchableOpacity>
          ))}
        </View>
      </View>
    ));
  };
  return (
    <ScrollView horizontal contentContainerStyle={styles.container}>
      {markets(require("../Fixtures/markets.json"))}
    </ScrollView>
  );
}
