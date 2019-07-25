import React, { Component } from "react";
import { Image, TouchableOpacity, View } from "react-native";
import { Text, Thumbnail, Icon } from "native-base";
import styles from "./Styles/FeedsVideoListStyle";

const IMG = `https://sc01.alicdn.com/kf/HLB1AVBSTmzqK1RjSZPcq6zTepXaT/Summer-Boy-Suit-Hoodie-Kid-Custom-Set.jpg_50x50.jpg`;

export default class FeedsVideoList extends Component {
  shouldComponentUpdate(nextProps) {
    return this.props.item.id !== nextProps.item.id;
  }

  render() {
    const { item = {} } = this.props;
    const thumbUrl = item.user_avatar ? item.user_avatar : IMG;
    const img = item.img ? item.img : IMG;

    return (
      <TouchableOpacity
        onPress={() =>
          this.props.navigation.navigate("VideoFlip", { id: item.id })
        }
        style={styles.container}
      >
        <View style={styles.imgContainer}>
          <Image source={{ uri: img }} style={styles.img} />
        </View>
        <View style={styles.textContainer}>
          <Text numberOfLines={2}>{item.name}</Text>

          <View style={styles.info}>
            <View style={styles.thumb}>
              <Thumbnail
                square
                source={{ uri: thumbUrl }}
                style={styles.miniThumb}
              />

              <Text
                numberOfLines={1}
                style={styles.miniText}
                ellipsizeMode="tail"
              >
                {item.author}
              </Text>
            </View>

            <View transparent style={styles.view}>
              <Icon name="ios-eye" style={{ color: "#bdc3c7" }} />
              <Text style={styles.viewNum} numberOfLines={1}>
                {item.cid}
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}
