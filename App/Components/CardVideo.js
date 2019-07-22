import React, { Component } from "react";
import PropTypes from "prop-types";
import { Image, TouchableOpacity } from "react-native";
import { View, Text } from "native-base";
import VideoComponent from "../Components/Video.js";
import styles from "./Styles/CardVideoStyle";

export default class CardVideo extends Component {
  shouldComponentUpdate(nextProps) {
    return this.props.info.video !== nextProps.info.video;
  }

  // Prop type warnings
  static propTypes = {
    info: PropTypes.object
  };

  // Defaults for props
  static defaultProps = {
    info: {
      thumb:
        "https://sc01.alicdn.com/kf/HTB1bgyOXTjxK1Rjy0Fnq6yBaFXag.jpg_100x100.jpg",
      title: "Foresee TLD.",
      video: "http://techslides.com/demos/sample-videos/small.mp4",
      img:
        "https://sc01.alicdn.com/kf/HTB1bgyOXTjxK1Rjy0Fnq6yBaFXag.jpg_100x100.jpg",
      content: "content could be anything",
      follow: true,
      type: "images"
    }
  };

  render() {
    const { info = {} } = this.props;

    return (
      <View style={styles.container}>
        <Text numberOfLines={2}>{info.content}</Text>
        <View style={{ width: "100%", height: "65%" }}>
          <VideoComponent url={info.video} />
        </View>
        <TouchableOpacity
          style={styles.textLink}
          onPress={() => this.props.navigation.navigate("VideoFlip", { id })}
        >
          <Image source={{ uri: info.img }} style={styles.img} />
          <View>
            <Text style={styles.text}>US $1.18 Pieces</Text>
            <Text>100 (MOQ)</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}
