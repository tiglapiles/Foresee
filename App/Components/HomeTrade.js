import React, { Component } from "react";
import { Image, ScrollView, TouchableOpacity } from "react-native";
import { View, Text } from "native-base";
import styles from "./Styles/HomeTradeStyle";

export default class HomeTrade extends Component {
  handleTouch = e => {
    this.props.navigation.navigate("ProductDetail");
  };
  render() {
    return (
      <ScrollView horizontal contentContainerStyle={styles.container}>
        <TouchableOpacity onPress={this.handleTouch}>
          <View style={styles.more}>
            <Image
              style={styles.img}
              source={{
                uri:
                  "https://sc02.alicdn.com/kf/HLB1FuxWQHvpK1RjSZPiq6zmwXXah/AS-399B-Personality-Kids-Boy-Clothes-Set.jpg_300x300.jpg"
              }}
            />
            <Text style={styles.view}>VIEW MORE</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.handleTouch}>
          <View style={styles.council}>
            <Image
              style={styles.img}
              source={{
                uri:
                  "https://sc02.alicdn.com/kf/HTB1jEI3NVXXXXa4apXXq6xXFXXXv/3-pcs-kids-clothes-child-clothes-plaid.jpg_300x300.jpg"
              }}
            />
            <Text style={styles.date}>on Oct 13,2019</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    );
  }
}
