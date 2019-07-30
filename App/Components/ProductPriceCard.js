import React, { Component } from "react";
// import PropTypes from 'prop-types';
import {
  Left,
  Right,
  Icon,
  View,
  Text,
  Card,
  CardItem,
  Body
} from "native-base";
import styles from "./Styles/ProductPriceCardStyle";

export default class ProductPriceCard extends Component {
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

  render() {
    const { detail = {} } = this.props;

    return (
      <View style={styles.container}>
        <View style={{ height: 24 }} />
        <CardItem>
          <Body>
            <Text numberOfLines={2} style={styles.name}>
              {detail.name || "Product Detail Name"}
            </Text>
            <Text style={styles.price}>$4.30 - $5.20</Text>
            <Text style={styles.name}>Min.Order: 1000 Piesces</Text>
          </Body>
        </CardItem>
        <CardItem
          style={styles.footer}
          footer
          button
          onPress={() => alert("This is Card Footer")}
        >
          <Left>
            <Text style={styles.name}>Quick Quitation</Text>
          </Left>
          <Right>
            <Icon name="ios-more" />
          </Right>
        </CardItem>
      </View>
    );
  }
}
