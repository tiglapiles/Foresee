import React, { Component } from "react";
// import PropTypes from 'prop-types';
import { View, Image } from "react-native";
import Swiper from "react-native-swiper";
import styles from "./Styles/ImagesSwiperStyle";

const loading = require("../Images/Home/loading.gif");

const Slide = props => {
  return (
    <View style={styles.slide}>
      <Image
        onLoad={props.loadHandle.bind(null, props.i)}
        style={styles.image}
        source={{ uri: props.uri }}
      />
      {!props.loaded && (
        <View style={styles.loadingView}>
          <Image style={styles.loadingImage} source={loading} />
        </View>
      )}
    </View>
  );
};

export default class ImagesSwiper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgList: [
        "https://sc01.alicdn.com/kf/HLB1fG5qTmzqK1RjSZFHq6z3CpXaQ/summer-Boy-Suit-Hoodie-Kid-Custom-Set.jpg_350x350.jpg",
        "https://sc01.alicdn.com/kf/HLB1fG5qTmzqK1RjSZFHq6z3CpXaQ/summer-Boy-Suit-Hoodie-Kid-Custom-Set.jpg_350x350.jpg",
        "https://sc01.alicdn.com/kf/HLB1fG5qTmzqK1RjSZFHq6z3CpXaQ/summer-Boy-Suit-Hoodie-Kid-Custom-Set.jpg_350x350.jpg",
        "https://sc01.alicdn.com/kf/HLB1fG5qTmzqK1RjSZFHq6z3CpXaQ/summer-Boy-Suit-Hoodie-Kid-Custom-Set.jpg_350x350.jpg",
        "https://sc01.alicdn.com/kf/HLB1fG5qTmzqK1RjSZFHq6z3CpXaQ/summer-Boy-Suit-Hoodie-Kid-Custom-Set.jpg_350x350.jpg"
      ],
      loadQueue: [0, 0, 0, 0]
    };
    this.loadHandle = this.loadHandle.bind(this);
  }
  loadHandle(i) {
    let loadQueue = this.state.loadQueue;
    loadQueue[i] = 1;
    this.setState({
      loadQueue
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Swiper
          loadMinimal
          loadMinimalSize={1}
          style={styles.wrapper}
          autoplay={true}
          loop={true}
        >
          {this.state.imgList.map((item, i) => (
            <Slide
              loadHandle={this.loadHandle}
              loaded={!!this.state.loadQueue[i]}
              uri={item}
              i={i}
              key={i}
            />
          ))}
        </Swiper>
      </View>
    );
  }
}
