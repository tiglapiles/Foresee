import React, { Component } from "react";
// import PropTypes from 'prop-types';
import { ImageBackground } from "react-native";
import { View, Thumbnail, Text } from "native-base";
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
      <View style={[styles.container, this.props.style]}>
        <ImageBackground
          source={{
            uri:
              "https://s.alicdn.com/@img/tfs/TB1L4xJba67gK0jSZFHXXa9jVXa-990-400.jpg"
          }}
          style={styles.background}
        >
          <View style={styles.inner}>
            <View style={{ marginTop: -38 }}>
              <Thumbnail
                square
                style={styles.icon}
                source={{
                  uri:
                    "https://i.alicdn.com/sc01/kf/HTB1j6F_pNSYBuNjSspjq6x73VXaB/2018-Jumpsuit-for-women-halter-neck-back.jpg_350x350q80.jpg"
                }}
              />
            </View>
            <View>
              <Text style={styles.nameC} numberOfLines={2}>
                {shop_info.remarks ||
                  "Jiangmen Guanqiang Hardware Plastic Products Co., Ltd."}
              </Text>
            </View>
            <View>
              <Text style={styles.nameE}>{shop_info.company || "Company"}</Text>
            </View>
          </View>
        </ImageBackground>
      </View>
    );
  }
}
