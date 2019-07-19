import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, Text } from "native-base";
import Video from "react-native-video";
import styles from "./Styles/VideoStyle";

export default class VideoComponent extends Component {
  shouldComponentUpdate(newProps) {
    return this.props.url !== newProps.url;
  }

  // Prop type warnings
  static propTypes = {
    url: PropTypes.string.isRequired
  };

  // Defaults for props
  static defaultProps = {
    url: "http://techslides.com/demos/sample-videos/small.mp4"
  };

  onBuffer = e => {
    console.log(e);
  };

  videoError = e => {
    console.log(e);
  };

  readyPlay = e => {
    console.log("video: ready to play!");
  };

  render() {
    return (
      <View style={styles.container}>
        <Video
          source={{ uri: this.props.url }}
          ref={ref => {
            this.player = ref;
          }} // Store reference
          onBuffer={this.onBuffer} // Callback when remote video is buffering
          onError={this.videoError} // Callback when video cannot be loaded
          style={styles.backgroundVideo}
          controls={true}
          resizeMode="contain"
          /* onReadyForDisplay={this.readyPlay} */
          onLoad={this.readyPlay}
        />
      </View>
    );
  }
}
