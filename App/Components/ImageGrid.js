import React, { Component } from "react";
// import PropTypes from 'prop-types';
import { Image, TouchableOpacity } from "react-native";
import { View, Text, Button } from "native-base";
import { Col, Row, Grid } from "react-native-easy-grid";
import {
  convertToTwoVectorArray,
  convertToThreeVectorArray
} from "../Lib/utils.js";
import styles from "./Styles/ImageGridStyle";

export default class ImageGrid extends Component {
  // // Prop type warnings
  // static propTypes = {
  //   someProperty: PropTypes.object,
  //   someSetting: PropTypes.bool.isRequired,
  // }
  //
  // // Defaults for props
  // static defaultProps = {
  //   someSetting: false
  // }
  images = () => [
    // "https:i.alicdn.com/sc01/kf/HTB1hXLkazvuK1Rjy0Faq6x2aVXav/8000w-Electric-Bike-Kits-with-LCD-5.jpg_250x250.jpg",
    "https:i.alicdn.com/sc01/kf/HTB1AynNXynrK1RjSsziq6xptpXak/Big-power-Enduroebike-48v-72v-3000w-electric.jpg_250x250.jpg",
    "https:i.alicdn.com/sc01/kf/HTB134tlafuSBuNkHFqDq6xfhVXau/CZJB-205-35-48v-1000-watt-electric.jpg_250x250.jpg",
    "https:i.alicdn.com/sc01/kf/HTB19Jc4NFXXXXX5XFXXq6xXFXXXQ/police-motorcycle-48v-2000w-electric-bike-motor.jpg_250x250.jpg",
    "https:i.alicdn.com/sc01/kf/HTB19FnjDNSYBuNjSspjq6x73VXak/60V-72V-3000W-5000W-high-speed-full.jpg_250x250.jpg",
    "https:i.alicdn.com/sc01/kf/HTB1wJNLi3LD8KJjSszeq6yGRpXa9/QS-Motor-3000W-205-50H-V2-E.jpg_250x250.jpg",
    "https:i.alicdn.com/sc01/kf/HTB1g19EKkSWBuNjSszdq6zeSpXaA/2016-newest-design-high-strong-stainless-steel.jpg_250x250.jpg",
    "https://i.alicdn.com/sc01/kf/HTB1oii4n0bJ8KJjy1zjq6yqapXaY/Yiwu-Market-Best-Price-Long-Range-DIY.jpg_250x250.jpg",
    "https://i.alicdn.com/sc01/kf/HTB1JAbWObrpK1RjSZTEq6AWAVXa7/high-quality-72V-5000w-Electric-Conversion-Bike.jpg_250x250.jpg"
  ];

  renderImage = ({ id, url }) => (
    <Col size={33} key={id}>
      <TouchableOpacity onPress={() => this.handleTouch(id)}>
        <View style={styles.imgC}>
          <Image
            source={{ uri: url }}
            style={{ width: "100%", height: "100%" }}
          />
        </View>
      </TouchableOpacity>
    </Col>
  );

  renderImages = (images = []) =>
    images.map((k, i) => this.renderImage({ id: i, url: k }));

  renderGrid = (data = []) => {
    const length = data.length;
    let arrayImg = [];
    let threeArrImg = [];
    if (length === 0) {
      return null;
    } else if (length > 0 && length <= 3) {
      return <Row style={styles.row}>{this.renderImages(data)}</Row>;
    } else if (length === 4) {
      arrayImg = convertToTwoVectorArray(data);
      return arrayImg.map((k, i) => (
        <Row key={i} style={styles.row}>
          {this.renderImages(k)}
        </Row>
      ));
    } else if (length > 4 && length <= 9) {
      threeArrImg = convertToThreeVectorArray(data);
      return threeArrImg.map((k, i) => (
        <Row key={i} style={[k.length < 3 ? { width: "66%" } : styles.row]}>
          {this.renderImages(k)}
        </Row>
      ));
    }
  };

  handleTouch = e => {
    console.log(e);
  };

  render() {
    const { images } = this.props;

    return (
      <Grid style={styles.container}>{this.renderGrid(this.images())}</Grid>
    );
  }
}
