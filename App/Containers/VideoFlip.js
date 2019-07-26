import React, { Component } from "react";
import { BackHandler, ScrollView, ActivityIndicator } from "react-native";
import PropTypes from "prop-types";
import { View } from "native-base";
import { connect } from "react-redux";
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
import { timeout } from "../Lib/utils.js";
import VideoContain from "../Components/VideoContain.js";

// Styles
import styles from "./Styles/VideoFlipStyle";

class VideoFlip extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      page: 1,
      count: 0,
      index: 0
    };
    this.waitForResponse = false;
  }

  componentDidMount() {
    BackHandler.addEventListener("hardwareBackPress", () => {
      this.props.navigation.goBack();
      return true;
    });
    this.setState({ videos: this.props.videos });
    this.getProductVideos();
  }

  static propTypes = {
    videos: PropTypes.array
  };

  static defaultProps = {
    videos: [
      {
        index: 1,
        hashTag: "#Factory",
        title: "Picture Contain in one screenx",
        url: "http://techslides.com/demos/sample-videos/small.mp4",
        img:
          "https://i.alicdn.com/img/tfs/TB1Hgw9vhjaK1RjSZKzXXXVwXXa-240-320.png"
      }
    ]
  };

  async getProductVideos() {
    const { page, videos, count } = this.state;
    this.waitForResponse = true;
    await timeout(1000);
    const response = require("../Fixtures/videoflip.json");
    this.waitForResponse = false;
    // if (!response.ok) {
    //   return;
    // }
    const resVideo = response;
    this.setState({
      videos: videos.concat(resVideo),
      page: page + 1,
      count: count + 3
    });
  }

  slideItem = items => {
    const { index } = this.state;
    return items.map((k, i) => (
      <View key={i} style={styles.item}>
        <VideoContain item={k} play={i == index} {...this.props} />
      </View>
    ));
  };

  onScroll = e => {
    const { nativeEvent = {} } = e;
    const isCloseToBottom = ({
      layoutMeasurement,
      contentOffset,
      contentSize
    }) => layoutMeasurement.height + contentOffset.y >= contentSize.height;
    const isCloseToTop = ({ layoutMeasurement, contentOffset, contentSize }) =>
      contentOffset.y == 0;
    const isInMiddle = ({ layoutMeasurement, contentOffset, contentSize }) =>
      contentOffset.y % layoutMeasurement.height == 0;
    const indexPage = ({ layoutMeasurement, contentOffset, contentSize }) =>
      Math.floor(contentOffset.y / layoutMeasurement.height);

    if (isCloseToTop(nativeEvent)) {
      //do something
    }
    if (isCloseToBottom(nativeEvent)) {
      this.getProductVideos();
      this.setState({});
    }
    if (isInMiddle(nativeEvent)) {
      this.setState({ index: indexPage(nativeEvent) });
    }
  };

  renderFooter = () =>
    this.waitForResponse ? (
      <ActivityIndicator style={{ margin: 0 }} size="small" color={"black"} />
    ) : (
      <View style={{ height: 1 }} />
    );

  render() {
    const { videos } = this.state;

    return (
      <ScrollView
        alwaysBounceVertical={true}
        centerContent={true}
        contentContainerStyle={styles.scroll}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        keyboardDismissMode={"on-drag"}
        scrollEventThrottle={0}
        onScroll={this.onScroll}
        style={styles.box}
        directionalLockEnabled={true}
        onScrollAnimationEnd={this.scrollEnd}
        pagingEnabled={true}
        scrollToTop={true}
      >
        {this.slideItem(videos)}
        {this.renderFooter()}
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
