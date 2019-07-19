import React from "react";
import { Image, TouchableOpacity } from "react-native";
import { View, Text } from "native-base";
import styles from "./Styles/HomeDealsStyle";

export default function HomeDeals(props) {
  const handleTouch = e => {
    props.navigation.navigate("ProductDetail");
  };
  const { info = [] } = props;
  const url =
    "https://sc01.alicdn.com/kf/HTB1BLK.JAKWBuNjy1zjq6AOypXav.jpg_100x100.jpg";

  const deals = data => {
    return data.map((k, i) => (
      <View key={i} style={styles.item}>
        <TouchableOpacity onPress={handleTouch}>
          <Image source={{ uri: k.img || url }} style={styles.img} />
          <Text style={styles.price}>{"$" + k.price + ""}</Text>
          <Text style={styles.off}>{k.off + "OFF"}</Text>
        </TouchableOpacity>
      </View>
    ));
  };
  return <View style={styles.container}>{deals(info)}</View>;
}
