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
import styles from "./Styles/SupplierProfileCardStyle.js";

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
        <Card>
          <CardItem
            header
            button
            onPress={() => alert("This is Card Header")}
            bordered
          >
            <Left>
              <Text style={styles.tip}>Supplier Profile</Text>
            </Left>
            <Right>
              <Icon name="ios-more" />
            </Right>
          </CardItem>
          <CardItem
            button
            bordered
            onPress={() => this.props.navigation.navigate("ShopDetail")}
          >
            <Body>
              <Text style={styles.company}>
                {detail.summary || "Company Name In There"}
              </Text>
              <View style={styles.rate}>
                <View style={styles.rateItem}>
                  <Text style={styles.rateTitle}>Response Time</Text>
                  <Text style={styles.rateTitle}>&lt;24</Text>
                </View>
                <View style={styles.rateItem}>
                  <Text style={styles.rateTitle}>Response Rate</Text>
                  <Text style={styles.rateTitle}>96.4%</Text>
                </View>
                <View style={styles.rateItem}>
                  <Text style={styles.rateTitle}>22 Transactions</Text>
                  <Text style={styles.rateTitle}>$ 520,000+</Text>
                </View>
              </View>
            </Body>
          </CardItem>
          <CardItem footer button onPress={() => alert("This is Card Footer")}>
            <Left>
              <Text style={styles.tip}>4YRS</Text>
            </Left>
            <Right>
              <Text
                style={styles.tip}
                onPress={() => alert("This is Card Header")}
              >
                Learn More
              </Text>
            </Right>
          </CardItem>
        </Card>
      </View>
    );
  }
}
