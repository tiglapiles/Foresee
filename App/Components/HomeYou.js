import React, { Component } from "react";
import { Image } from "react-native";
import { View, Text, Card, CardItem } from "native-base";
import styles from "./Styles/HomeYouStyle";

export default function HomeYou() {
  const youItems = [
    {
      img:
        "https://sc02.alicdn.com/kf/HTB1foTel7SWBuNjSszdq6zeSpXae/Wholesale-100-Cotton-Children-Blank-Round-Collar.jpg_300x300.jpg",
      title: "Original Unlocked Main Motherboard For LG G4 Height",
      priceS: "$1.00",
      priceE: "$33.99",
      piece: 1
    },
    {
      img:
        "https://sc02.alicdn.com/kf/HTB1foTel7SWBuNjSszdq6zeSpXae/Wholesale-100-Cotton-Children-Blank-Round-Collar.jpg_300x300.jpg",
      title: "Original Unlocked Main Motherboard For LG G4 Height",
      priceS: "$1.00",
      priceE: "$33.99",
      piece: 1
    },
    {
      img:
        "https://sc02.alicdn.com/kf/HTB1foTel7SWBuNjSszdq6zeSpXae/Wholesale-100-Cotton-Children-Blank-Round-Collar.jpg_300x300.jpg",
      title: "Original Unlocked Main Motherboard For LG G4 Height",
      priceS: "$1.00",
      priceE: "$33.99",
      piece: 1
    },
    {
      img:
        "https://sc02.alicdn.com/kf/HTB1foTel7SWBuNjSszdq6zeSpXae/Wholesale-100-Cotton-Children-Blank-Round-Collar.jpg_300x300.jpg",
      title: "Original Unlocked Main Motherboard For LG G4 Height",
      priceS: "$1.00",
      priceE: "$33.99",
      piece: 1
    }
  ];
  const cardItems = c => {
    return c.map((k, i) => (
      <Card style={styles.item} key={i}>
        <CardItem>
          <Image style={styles.img} source={{ uri: k.img }} />
        </CardItem>
        <CardItem>
          <Text>{k.title}</Text>
          <Text>{k.priceS}</Text>
        </CardItem>
        <CardItem>
          <Text>1YR</Text>
        </CardItem>
      </Card>
    ));
  };
  return <View style={styles.container}>{cardItems(youItems)}</View>;
}
