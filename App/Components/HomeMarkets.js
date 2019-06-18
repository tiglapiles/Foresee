import React from "react";
import { Image, ScrollView } from "react-native";
import { View, Text } from "native-base";
import styles from "./Styles/HomeMarketsStyle";

export default function HomeMarkets() {
  const products = [
    {
      title: "Electronic Component & Suppli",
      imgs: [
        "https://sc01.alicdn.com/kf/HTB1bgyOXTjxK1Rjy0Fnq6yBaFXag.jpg_100x100.jpg",
        "https://sc01.alicdn.com/kf/HTB1SsGQXJjvK1RjSspiq6AEqXXaO.jpg_100x100.jpg",
        "https://sc02.alicdn.com/kf/HTB1IoaUXPzuK1RjSsppq6xz0XXac.jpg_100x100.jpg"
      ]
    },
    {
      title: "Consumer Electronics",
      imgs: [
        "https://sc01.alicdn.com/kf/HTB1bgyOXTjxK1Rjy0Fnq6yBaFXag.jpg_100x100.jpg",
        "https://sc01.alicdn.com/kf/HTB1SsGQXJjvK1RjSspiq6AEqXXaO.jpg_100x100.jpg",
        "https://sc02.alicdn.com/kf/HTB1IoaUXPzuK1RjSsppq6xz0XXac.jpg_100x100.jpg"
      ]
    },
    {
      title: "Apparel",
      imgs: [
        "https://sc01.alicdn.com/kf/HTB1bgyOXTjxK1Rjy0Fnq6yBaFXag.jpg_100x100.jpg",
        "https://sc01.alicdn.com/kf/HTB1SsGQXJjvK1RjSspiq6AEqXXaO.jpg_100x100.jpg",
        "https://sc02.alicdn.com/kf/HTB1IoaUXPzuK1RjSsppq6xz0XXac.jpg_100x100.jpg"
      ]
    }
  ];
  const markets = goods => {
    return goods.map((i, k) => (
      <View key={k} style={styles.boxs}>
        <Text style={styles.title}>{i.title}</Text>
        <View style={styles.imgs}>
          {i.imgs.map((o, j) => (
            <Image style={styles.img} source={{ uri: o }} key={j} />
          ))}
        </View>
      </View>
    ));
  };
  return (
    <ScrollView horizontal contentContainerStyle={styles.container}>
      {markets(products)}
    </ScrollView>
  );
}
