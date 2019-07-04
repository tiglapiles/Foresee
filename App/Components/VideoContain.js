import React, { Component } from "react";
// import PropTypes from 'prop-types';
import { Image } from "react-native";
import { View, Text } from "native-base";
import Video from "react-native-video";
import styles from "./Styles/VideoContainStyle";

export default class VideoContain extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toPlay: false
    };
    this.url = `http://b2b.yjzw.net/images/videos/Eco-Friendly-Geodesic-Dome-Tent-Camp-Resort.mp4`;
    this.url2 = "http://techslides.com/demos/sample-videos/small.mp4";
  }

  readyPlay = e => {
    console.log(e);
    this.setState({ toPlay: true });
  };

  onBuffer = e => {
    // console.log(e);
  };

  videoError = e => {
    console.log(e);
  };

  render() {
    const { toPlay } = this.state;
    const { item } = this.props;

    return (
      <View style={styles.container}>
        {/* <TouchableOpacity */}
        {/*   onPress={() => this.props.navigation.goBack()} */}
        {/*   style={styles.outline} */}
        {/* > */}
        {/*   <Icon name="ios-close-circle-outline" style={styles.outline} /> */}
        {/* </TouchableOpacity> */}
        <Video
          source={{ uri: this.url2 }}
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
        {/* <Image source={{ uri: item.img }} style={styles.image} /> */}
        {/* <Text style={styles.text}>Video Player</Text> */}
      </View>
    );
  }
}
