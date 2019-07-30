import React, { Component } from "react";
// import PropTypes from 'prop-types';
import {
  View,
  Text,
  Left,
  Right,
  Icon,
  Card,
  CardItem,
  Body
} from "native-base";
import HTMLView from "react-native-htmlview";
import styles from "./Styles/DetailDrawerStyle";

export default class DetailDrawer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
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
    const { detail = {} } = this.props;

    return (
      <View style={styles.container}>
        <CardItem header button onPress={() => alert("This is Card Header")}>
          <Left>
            <Text style={styles.tip}>Quick Details</Text>
          </Left>
          <Right>
            <Icon name="ios-more" />
          </Right>
        </CardItem>
        <CardItem onPress={() => alert("This is Card Header")}>
          <Body>
            <HTMLView
              value={
                detail.parameter || "Descript Detail About Product Infomation"
              }
            />
          </Body>
        </CardItem>
      </View>
    );
  }
}
