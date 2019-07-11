import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { View, Text } from "native-base";

export default function HomeSubTitle(props) {
  const color = props.color || "white";
  const more = props.more || false;
  const title = props.title || "Sub Title";
  const styles = StyleSheet.create({
    container: {
      height: 20,
      flexDirection: "row",
      alignItems: "center",
      marginBottom: 8
    },
    block: {
      backgroundColor: color,
      width: 10,
      height: 20,
      width: 10,
      marginRight: 5
    },
    title: {
      fontSize: 20,
      fontWeight: "bold",
      color: "black"
    },
    more: {
      color: "black",
      fontSize: 12,
      marginLeft: "auto"
    }
  });

  return (
    <View style={styles.container}>
      <View style={styles.block} />
      <Text style={styles.title}>{title.toUpperCase()}</Text>
      {more ? (
        <Text
          style={styles.more}
          onPress={() => props.navigation.navigate("ProductCategory")}
        >
          MORE
        </Text>
      ) : null}
    </View>
  );
}
