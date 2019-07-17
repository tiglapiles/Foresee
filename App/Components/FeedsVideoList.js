import React from "react";
import { Image, TouchableOpacity, View } from "react-native";
import {
  Text,
  Left,
  Thumbnail,
  Body,
  Right,
  Button,
  Icon,
  CardItem
} from "native-base";
import styles from "./Styles/FeedsVideoListStyle";

export default function FeedsVideoList(props) {
  const info = props.item;
  const action = props.handleUp;

  return (
    <TouchableOpacity
      onPress={() => action(info.videoIndex)}
      style={styles.container}
    >
      <View style={styles.imgContainer}>
        <Image source={{ uri: info.url }} style={styles.img} />
      </View>
      <View style={styles.textContainer}>
        <Text numberOfLines={2}>{info.title}</Text>

        <View style={styles.info}>
          <View style={styles.thumb}>
            <Thumbnail
              square
              source={{ uri: info.thumb }}
              style={{ width: 30, height: 30, marginRight: 2 }}
            />

            <Text
              numberOfLines={1}
              style={{ color: "#95a5a6", fontSize: 12 }}
              ellipsizeMode="tail"
            >
              {info.name}
            </Text>
          </View>

          <View transparent style={styles.view}>
            <Icon name="ios-eye" style={{ color: "#bdc3c7" }} />
            <Text
              style={{ color: "#bdc3c7", overflow: "hidden", fontSize: 12 }}
              numberOfLines={1}
            >
              {info.view}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}
