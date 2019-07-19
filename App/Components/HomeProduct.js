import React from "react";
import { Image, TouchableOpacity } from "react-native";
import { View, Text } from "native-base";
import styles from "./Styles/HomeProductStyle";

export default function HomeProduct(props) {
  const handleTouch = e => {
    props.navigation.navigate("ProductDetail");
  };
  const { info = [] } = props;

  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <TouchableOpacity onPress={handleTouch}>
          <Text style={styles.title}>TOP-SELLING PRODUCTS</Text>
          <Image style={styles.image} source={{ uri: info[0].img }} />
        </TouchableOpacity>
      </View>
      <View style={styles.item}>
        <TouchableOpacity onPress={handleTouch}>
          <Text style={styles.title}>TOP-SELLING PRODUCTS</Text>
          <Image style={styles.image} source={{ uri: info[1].img }} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
