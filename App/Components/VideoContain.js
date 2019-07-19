import React, { Component } from "react";
// import PropTypes from 'prop-types';
import { Image } from "react-native";
import { View, Text } from "native-base";
import VideoComponent from "../Components/Video.js";
import styles from "./Styles/VideoContainStyle";

export default class VideoContain extends Component {
  constructor(props) {
    super(props);
    this.url = `http://b2b.yjzw.net/images/videos/Eco-Friendly-Geodesic-Dome-Tent-Camp-Resort.mp4`;
    this.url2 = "http://techslides.com/demos/sample-videos/small.mp4";
  }

  render() {
    const { item } = this.props;

    return (
      <View style={styles.container}>
        <VideoComponent url={this.url2} />
        {/* <TouchableOpacity */}
        {/*   onPress={() => this.props.navigation.goBack()} */}
        {/*   style={styles.outline} */}
        {/* > */}
        {/*   <Icon name="ios-close-circle-outline" style={styles.outline} /> */}
        {/* </TouchableOpacity> */}
        {/* <Image source={{ uri: item.img }} style={styles.image} /> */}
        {/* <Text style={styles.text}>Video Player</Text> */}
      </View>
    );
  }
}
