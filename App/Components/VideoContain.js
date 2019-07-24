import React, { Component } from "react";
import PropTypes from "prop-types";
import { TouchableOpacity } from "react-native";
import { View, Text, Icon } from "native-base";
import VideoComponent from "../Components/Video.js";
import styles from "./Styles/VideoContainStyle";

export default class VideoContain extends Component {
  constructor(props) {
    super(props);
  }

  shouldComponentUpdate(nextProps) {
    return this.props.item.url !== nextProps.item.url;
  }

  static propTypes = {
    item: PropTypes.object
  };

  static defaultProps = {
    item: {
      url: "http://techslides.com/demos/sample-videos/small.mp4",
      img:
        "https://i.alicdn.com/img/tfs/TB1_9hVumzqK1RjSZFLXXcn2XXa-1000-1500.png",
      title: "Picture Contain in one screen",
      hashTag: "#Factory"
    }
  };

  renderThumbs = () => {
    const items = [
      {
        icon: "ios-add-circle",
        event: () => this.props.navigation.navigate("Login")
      },
      {
        icon: "ios-thumbs-up",
        event: () => this.props.navigation.navigate("Login")
      },
      {
        icon: "md-share",
        event: () => this.props.navigation.navigate("Login")
      },
      {
        icon: "ios-chatboxes",
        event: () => this.props.navigation.navigate("Login")
      }
    ];
    return items.map((k, i) => (
      <TouchableOpacity onPress={k.event} key={i}>
        <Icon name={k.icon} style={{ color: "#fff" }} />
      </TouchableOpacity>
    ));
  };

  render() {
    const { item = {} } = this.props;

    return (
      <View style={styles.container}>
        <VideoComponent ref={ref => (this.video = ref)} url={item.url} />
        <TouchableOpacity
          onPress={() => this.props.navigation.goBack()}
          style={styles.outline}
        >
          <Icon name="ios-close-circle-outline" style={styles.back} />
        </TouchableOpacity>
        {/* <Image source={{ uri: item.img }} style={styles.image} /> */}
        <View style={styles.box}>
          <Text style={styles.title}>{item.hashTag}</Text>
          <Text style={styles.title}>{item.title}</Text>
        </View>
        <View style={styles.thumb}>{this.renderThumbs()}</View>
      </View>
    );
  }
}
