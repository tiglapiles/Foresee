import React, { useState, useEffect } from "react";
// import PropTypes from 'prop-types';
import { View, Text } from "native-base";
import Video from "react-native-video";
import styles from "./Styles/VideoContainStyle";

export default function VideoContain(props) {
  const url = `http://b2b.yjzw.net/images/videos/Eco-Friendly-Geodesic-Dome-Tent-Camp-Resort.mp4`;
  const url2 = `https://www.sample-videos.com/video/mp4/720/big_buck_bunny_720p_10mb.mp4`;
  const params = props.videoItem || { url };
  return (
    <View style={styles.container}>
      <Video
        source={{ uri: url2 }}
        ref={ref => {
          this.player = ref;
        }} // Store reference
        onBuffer={this.onBuffer} // Callback when remote video is buffering
        onError={this.videoError} // Callback when video cannot be loaded
        style={styles.backgroundVideo}
      />
      <Text style={styles.text}>Video Player</Text>
    </View>
  );
}
