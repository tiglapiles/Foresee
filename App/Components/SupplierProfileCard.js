import React, { Component } from "react";
// import PropTypes from 'prop-types';
import { TouchableOpacity } from "react-native";
import { Left, Right, Icon, View, Text, CardItem, Body } from "native-base";
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
        <CardItem header button onPress={() => alert("This is Card Header")}>
          <Left>
            <Text style={styles.tip}>Supplier Profile</Text>
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
            <View style={styles.profile}>
              <View style={{ width: "72%" }}>
                <Text style={styles.company} numberOfLines={2}>
                  {detail.name || "Company Name In There"}
                </Text>
                <Text numberOfLines={2} note>
                  CN Manuafacturer, Trading Company, Distributor/Wholesaler
                </Text>
              </View>
              <TouchableOpacity style={styles.follow}>
                <Text style={styles.followText}>FOLLOW</Text>
              </TouchableOpacity>
            </View>
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
        <CardItem
          style={styles.footer}
          footer
          button
          onPress={() => alert("This is Card Footer")}
        >
          <Left>
            <Text style={[styles.tip, { fontSize: 10 }]}>4YRS</Text>
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
      </View>
    );
  }
}
