import React, { Component } from "react";
import { FlatList, View, Platform } from "react-native";
import ProductApi from "../Services/ProductApi.js";
import ProductCard from "../Components/ProductCard.js";
import styles from "./Styles/HomeYouStyle";
const API = ProductApi.create();

export default class HomeYou extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: []
    };
  }

  componentWillMount() {
    this.getProductElements();
  }

  async getProductElements() {
    const response = await API.getProductCards({ page: 1, lang: "en" });
    if (response.ok) {
      this.setState({ list: response.data.data.data });
    }
  }

  scrollEndRefresh = ({ distanceFromEnd }) => {
    console.log("flatlist scroll end: ", distanceFromEnd);
  };

  itemSeparator = ({ highlighted }) => (
    <View style={[styles.separator, highlighted && { marginLeft: 0 }]} />
  );

  render() {
    const { list = [] } = this.state;

    return (
      <View style={styles.container}>
        <FlatList
          columnWrapperStyle={{ justifyContent: "space-between" }}
          ItemSeparatorComponent={this.itemSeparator}
          renderItem={({ item, index, section }) => (
            <ProductCard {...this.props} item={item} />
          )}
          data={list}
          keyExtractor={(item, index) => index}
          numColumns={2}
          horizontal={false}
          onEndReachedThreshold={0}
          onEndReached={this.scrollEndRefresh}
        />
      </View>
    );
  }
}
