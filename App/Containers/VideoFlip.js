import React, { Component } from "react";
import { BackHandler, Image, ScrollView, TouchableOpacity } from "react-native";
import { Content, Text, View, Icon } from "native-base";
import { connect } from "react-redux";
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
import VideoContain from "../Components/VideoContain.js";

// Styles
import styles from "./Styles/VideoFlipStyle";

class VideoFlip extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    BackHandler.addEventListener("hardwareBackPress", () => {
      this.props.navigation.goBack();
      return true;
    });
  }

  slideItem = items =>
    items.map((k, i) => (
      <View key={i} style={styles.item}>
        <VideoContain item={k} {...this.props} />
      </View>
    ));

  onScroll = e => {
    console.log(e);
  };

  scrollEnd = e => {
    console.log(e);
  };

  render() {
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
        {this.slideItem(require("../Fixtures/videoflip.json"))}
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
