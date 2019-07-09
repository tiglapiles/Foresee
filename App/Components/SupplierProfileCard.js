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
    return (
      <View style={styles.container}>
        <Card>
          <CardItem header button onPress={() => alert("This is Card Header")}>
            <Left>
              <Text>Supplier Profile</Text>
            </Left>
            <Right>
              <Icon name="ios-more" />
            </Right>
          </CardItem>
          <CardItem
            button
            onPress={() => this.props.navigation.navigate("ShopDetail")}
          >
            <Body>
              <Text>Click on any carditem</Text>
              <Text>Click on any carditem</Text>
              <Text>Click on any carditem</Text>
            </Body>
          </CardItem>
          <CardItem footer button onPress={() => alert("This is Card Footer")}>
            <Left>
              <Text>4YRS</Text>
            </Left>
            <Right>
              <Text>Learn More</Text>
            </Right>
          </CardItem>
        </Card>
      </View>
    );
  }
}
