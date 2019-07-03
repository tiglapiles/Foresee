import React, { Component } from "react";
import { BackHandler, Image, ScrollView, TouchableOpacity } from "react-native";
import { Content, Text, View, Icon } from "native-base";
import { connect } from "react-redux";
import Video from "react-native-video";
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
import VideoContain from "../Components/VideoContain.js";

// Styles
import styles from "./Styles/VideoFlipStyle";

class VideoFlip extends Component {
  constructor(props) {
    super(props);
    this.state = {
      poundTime: 5,
      pound: true
    };
  }

  componentDidMount() {
    BackHandler.addEventListener("hardwareBackPress", () => {
      this.props.navigation.goBack();
      return true;
    });
    this.playVideo();
  }

  playVideo = () => {
    setTimeout(() => {
      this.setState({ pound: false });
    }, this.state.poundTime * 1000);
  };

  videoList = [
    {
      index: 1,
      title: "Picture Contain in one screen",
      url:
        "http:b2b.yjzw.net/images/videos/Eco-Friendly-Geodesic-Dome-Tent-Camp-Resort.mp4",
      img:
        "https://i.alicdn.com/img/tfs/TB1Hgw9vhjaK1RjSZKzXXXVwXXa-240-320.png"
    },
    {
      index: 2,
      title: "Picture Contain in one screen",
      url:
        "http:b2b.yjzw.net/images/videos/Eco-Friendly-Geodesic-Dome-Tent-Camp-Resort.mp4",
      img:
        "https://i.alicdn.com/img/tfs/TB1_9hVumzqK1RjSZFLXXcn2XXa-1000-1500.png"
    },
    {
      index: 3,
      title: "Picture Contain in one screen",
      url:
        "http:b2b.yjzw.net/images/videos/Eco-Friendly-Geodesic-Dome-Tent-Camp-Resort.mp4",
      img:
        "https://i.alicdn.com/img/tfs/TB1_9hVumzqK1RjSZFLXXcn2XXa-1000-1500.png"
    }
  ];

  slideItem = (items, pound) =>
    items.map((k, i) => (
      <View key={i} style={styles.item}>
        <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
          <Icon name="ios-close-circle-outline" style={styles.outline} />
        </TouchableOpacity>
        {pound ? (
          <Image source={{ uri: k.img }} style={styles.image} />
        ) : (
          <VideoContain />
        )}
        <Text style={styles.title}>{k.title}</Text>
      </View>
    ));

  onScroll = e => {
    console.log(e);
    this.setState({ pound: true });
    this.playVideo();
  };

  scrollEnd = e => {
    console.log(e);
  };

  render() {
    const { pound } = this.state;

    return (
      <ScrollView
        centerContent={true}
        contentContainerStyle={styles.scroll}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        keyboardDismissMode={"on-drag"}
        onScroll={this.onScroll}
        style={styles.box}
        directionalLockEnabled={true}
        onScrollAnimationEnd={this.scrollEnd}
        pagingEnabled={true}
        /* scrollToTop={true} */
      >
        {this.slideItem(this.videoList, pound)}
      </ScrollView>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VideoFlip);
