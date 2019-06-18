import React from "react";
import { Image } from "react-native";
import { View, Text } from "native-base";
import styles from "./Styles/HomeProductStyle";

export default function HomeProduct() {
  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <Text style={styles.title}>TOP-SELLING PRODUCTS</Text>
        <Image
          style={styles.image}
          source={{
            uri:
              "https://sc01.alicdn.com/kf/HTB1YhGraMmH3KVjSZKzq6z2OXXab.jpg_100x100.jpg"
          }}
        />
      </View>
      <View style={styles.item}>
        <Text style={styles.title}>TOP-SELLING PRODUCTS</Text>
        <Image
          style={styles.image}
          source={{
            uri:
              "https://sc01.alicdn.com/kf/HTB1YhGraMmH3KVjSZKzq6z2OXXab.jpg_100x100.jpg"
          }}
        />
      </View>
    </View>
  );
}
