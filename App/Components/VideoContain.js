import React, { Component } from "react";
import PropTypes from "prop-types";
import { TouchableOpacity, Image } from "react-native";
import { View, Text, Icon, Thumbnail, Button } from "native-base";
import VideoComponent from "../Components/Video.js";
import styles from "./Styles/VideoContainStyle";

export default class VideoContain extends Component {
  static propTypes = {
    item: PropTypes.object,
    play: PropTypes.bool.isRequired
  };

  static defaultProps = {
    item: {
      url: "http://techslides.com/demos/sample-videos/small.mp4",
      img:
        "https://i.alicdn.com/img/tfs/TB1_9hVumzqK1RjSZFLXXcn2XXa-1000-1500.png",
      title: "Picture Contain in one screen",
      hashTag: "#Factory"
    },
    play: false
  };

  shouldComponentUpdate(nextProps, nextState) {
    if (this.props.item.url !== nextProps.item.url) return true;
    if (this.props.play !== nextProps.play) return true;
    return false;
  }

  componentDidUpdate(prevProps) {}

  renderThumbs = () => {
    const items = [
      { icon: "ios-add-circle" },
      { icon: "ios-thumbs-up" },
      { icon: "md-share" },
      { icon: "ios-chatboxes" }
    ];
    return items.map((k, i) => (
      <TouchableOpacity
        onPress={() => this.props.navigation.navigate("Login")}
        key={i}
      >
        <Icon name={k.icon} style={{ color: "#fff" }} />
      </TouchableOpacity>
    ));
  };

  renderLink = () => (
    <TouchableOpacity
      style={styles.link}
      onPress={() => this.props.navigation.navigate("ProductDetail")}
    >
      <View style={styles.linkLeft}>
        <Thumbnail
          square
          source={{
            uri:
              "https://sc01.alicdn.com/kf/HTB1bgyOXTjxK1Rjy0Fnq6yBaFXag.jpg_100x100.jpg"
          }}
        />
        <View style={styles.linkText}>
          <Text style={{ fontSize: 14 }}>US $100-200</Text>
          <Text style={{ fontSize: 14 }}>100 (MOQ)</Text>
        </View>
      </View>
      <View>
        <Button transparent>
          <Text style={{ fontSize: 14 }}>VIEW</Text>
          <Icon name="arrow-forward" />
        </Button>
      </View>
    </TouchableOpacity>
  );

  render() {
    const { item, play } = this.props;

    return (
      <View style={styles.container}>
        {play ? (
          <VideoComponent ref={ref => ref && ref.playVideo()} url={item.url} />
        ) : (
          <Image source={{ uri: item.img }} style={styles.image} />
        )}
        <TouchableOpacity
          onPress={() => this.props.navigation.goBack()}
          style={styles.outline}
        >
          <Icon name="ios-close-circle-outline" style={styles.back} />
        </TouchableOpacity>

        <View style={styles.box}>
          <Text numOfLines={1} style={styles.title}>
            {item.hashTag}
          </Text>
          <Text numberOfLines={2} style={styles.title}>
            {item.title}
          </Text>
          {this.renderLink()}
        </View>
        <View style={styles.thumb}>{this.renderThumbs()}</View>
      </View>
    );
  }
}
