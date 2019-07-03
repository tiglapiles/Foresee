import React, { Component } from "react";
import { BackHandler } from "react-native";
import { Content, Text } from "native-base";
import { connect } from "react-redux";
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
import VideoContain from "../Components/VideoContain.js";

// Styles
import styles from "./Styles/VideoFlipStyle";

class VideoFlip extends Component {
  // constructor (props) {
  //   super(props)
  //   this.state = {}
  // }
  componentDidMount() {
    BackHandler.addEventListener("hardwareBackPress", () => {
      this.props.navigation.goBack();
      return true;
    });
  }

  render() {
    return (
      <Content>
        <VideoContain
          videoItem={{
            url: `http://b2b.yjzw.net/images/videos/Eco-Friendly-Geodesic-Dome-Tent-Camp-Resort.mp4`
          }}
        />
      </Content>
    );
  }
}

const mapStateToProps = state => {
  return {
    nav: state.nav
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VideoFlip);
