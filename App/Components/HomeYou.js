import React from "react";
import { Image, TouchableOpacity } from "react-native";
import { View, Text, Icon } from "native-base";
import styles from "./Styles/HomeYouStyle";

export default function HomeYou(props) {
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
  const handleDetail = () => {
    props.navigation.navigate("ProductDetail");
  };
  const cardItems = c => {
    return c.map((k, i) => (
      <View style={styles.item} key={i}>
        <TouchableOpacity onPress={handleDetail}>
          <Image style={styles.img} source={{ uri: k.img }} />
          <Text style={styles.title}>{k.title}</Text>
          <Text style={styles.priceS}>
            {k.priceS}-{k.priceE}
          </Text>
          <Text>{k.piece} Piece</Text>
          <View style={styles.bottom}>
            <Text style={{ fontSize: 10 }}>1YR</Text>
            <Icon name="star" style={{ fontSize: 12, color: "#d35400" }} />
            <Icon name="ios-heart" style={{ fontSize: 12, color: "red" }} />
          </View>
        </TouchableOpacity>
      </View>
    ));
  };
  return <View style={styles.container}>{cardItems(youItems)}</View>;
}
