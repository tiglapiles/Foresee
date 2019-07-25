import React, { Component } from "react";
import PropTypes from "prop-types";
import { TouchableOpacity, Image, View } from "react-native";
import Video from "react-native-video";
import images from "../Themes/Images.js";
import styles from "./Styles/VideoStyle";

export default class VideoComponent extends Component {
  constructor(props) {
    super(props);
    this.player;
    this.state = {
      paused: true
    };
  }

  shouldComponentUpdate(newProps, nextState) {
    if (this.props.url !== newProps.url) return true;
    if (this.state.paused !== nextState.paused) return true;
    return false;
  }

  // Prop type warnings
  static propTypes = {
    url: PropTypes.string.isRequired
  };

  // Defaults for props
  static defaultProps = {
    url: "http://techslides.com/demos/sample-videos/small.mp4"
  };

  videoPause = () => {
    this.setState({ paused: !this.state.paused });
  };

  onBuffer = e => {
    // console.log(e);
  };

  videoError = e => {
    console.log(e);
  };

  readyPlay = e => {
    // console.log("video: ready to play!: ", e);
    return e.duration;
  };

  playVideo = () => {
    this.setState({ paused: false });
  };

  renderControl = () =>
    this.state.paused && (
      <View style={styles.imgBox}>
        <Image source={images.playButton} style={styles.img} />
      </View>
    );

  render() {
    return (
      <TouchableOpacity style={styles.container} onPress={this.videoPause}>
        <Video
          {...this.props}
          source={{ uri: this.props.url }}
          paused={this.state.paused}
          onBuffer={this.onBuffer} //  Callback when remote video is buffering
          onError={this.videoError} //  Callback when video cannot be loaded
          style={styles.backgroundVideo}
          resizeMode="contain"
          onLoad={this.readyPlay}
          controlTimeout={5000}
          repeat={false}
        />
        {this.renderControl()}
      </TouchableOpacity>
    );
  }
}
