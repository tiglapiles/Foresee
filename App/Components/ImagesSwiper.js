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
      imgList: ["banner.png", "banner2.png"],
      loadQueue: [0, 0, 0, 0]
    };
    this.loadHandle = this.loadHandle.bind(this);
  }

  componentDidMount() {}

  loadHandle(i) {
    let loadQueue = this.state.loadQueue;
    loadQueue[i] = 1;
    this.setState({
      loadQueue
    });
  }

  getImageList = (e, defaultList) => {
    const { home = {}, detail = {}, shop = {} } = e;
    // detail.img : home.swiperData:shop.banner
    const pMap = new Map([
      [home, "swiperData"],
      [detail, "img"],
      [shop, "banner"]
    ]);
    let listData = [];
    for (let [key, value] of pMap) {
      if (key[value]) {
        listData = key[value];
      }
    }
    const list =
      listData && listData.length !== 0
        ? [...listData].reduce((a, c) => [...a, c.img], [])
        : defaultList;
    return list;
  };

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
          {this.getImageList(this.props, this.state.imgList).map((item, i) => (
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
