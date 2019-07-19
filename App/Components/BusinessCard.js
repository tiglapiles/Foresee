import React, { Component } from "react";
// import PropTypes from 'prop-types';
import { Image } from "react-native";
import { View, Text, Card, CardItem, Left, Right } from "native-base";
import styles from "./Styles/BusinessCardStyle";

export default class BusinessCard extends Component {
  shouldComponentUpdate(newProps) {
    return this.props.img !== newProps.img;
  }
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
    const { info } = this.props;

    return (
      <View style={styles.container}>
        <Card>
          <CardItem
            button
            onPress={() => this.props.navigation.navigate("ProductDetail")}
          >
            <Left>
              <Text>//Your text here</Text>
            </Left>
            <Right>
              <Image
                style={{ width: 60, height: 60 }}
                source={{
                  uri:
                    "https://sc02.alicdn.com/kf/HTB1foTel7SWBuNjSszdq6zeSpXae/Wholesale-100-Cotton-Children-Blank-Round-Collar.jpg_300x300.jpg"
                }}
              />
            </Right>
          </CardItem>
        </Card>
      </View>
    );
  }
}
