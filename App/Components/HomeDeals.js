import React from "react";
import { Image } from "react-native";
import { View, Text } from "native-base";
import styles from "./Styles/HomeDealsStyle";

export default function HomeDeals() {
  const dealsData = [
    {
      url:
        "https://sc01.alicdn.com/kf/HTB1BLK.JAKWBuNjy1zjq6AOypXav.jpg_100x100.jpg",
      price: "16.96",
      off: "15%"
    },
    {
      url:
        "https://sc02.alicdn.com/kf/HTB1wWsmJx9YBuNjy0Ffq6xIsVXaF.jpg_100x100.jpg",
      price: "16.96",
      off: "15%"
    },
    {
      url:
        "https://sc01.alicdn.com/kf/HTB1z.2CmHZnBKNjSZFrq6yRLFXaJ.jpg_100x100.jpg",
      price: "16.96",
      off: "15%"
    }
  ];
  const deals = data => {
    return data.map((k, i) => (
      <View key={i} style={styles.item}>
        <Image source={{ uri: k.url }} style={styles.img} />
        <Text style={styles.price}>{"$" + k.price + ""}</Text>
        <Text style={styles.off}>{k.off + "OFF"}</Text>
      </View>
    ));
  };
  return <View style={styles.container}>{deals(dealsData)}</View>;
}
