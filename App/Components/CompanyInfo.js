import React, { Component } from "react";
// import PropTypes from 'prop-types';
import { View, Body, Thumbnail, Text, Card, CardItem } from "native-base";
import styles from "./Styles/CompanyInfoStyle";

export default class CompanyInfo extends Component {
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
    const { shop_info = {} } = this.props;
    return (
      // <View style={styles.container}>
      // </View>
      <Card style={styles.card}>
        <CardItem>
          <Body>
            <Thumbnail
              square
              style={styles.icon}
              source={{
                uri:
                  "http://ok.yjzw.net/uploads/images/1/Banner/IMG-2019062310298575.png"
              }}
            />
          </Body>
        </CardItem>
        <CardItem>
          <Body>
            <Text style={styles.nameC}>{shop_info.remarks || "公司名称"}</Text>
          </Body>
        </CardItem>
        <CardItem>
          <Body>
            <Text style={styles.nameE}>{shop_info.company || "Company"}</Text>
          </Body>
        </CardItem>
      </Card>
    );
  }
}
