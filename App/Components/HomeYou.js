import React, { Component } from "react";
import { FlatList, View, Platform, ActivityIndicator } from "react-native";
import ProductApi from "../Services/ProductApi.js";
import ProductCard from "../Components/ProductCard.js";
import styles from "./Styles/HomeYouStyle";
const API = ProductApi.create();

export default class HomeYou extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      page: 1,
      lang: "en",
      count: 0
    };
    this.waitForResponse = false;
  }

  componentWillMount() {
    this.getProductElements();
  }

  async getProductElements() {
    const { page, list, lang, count } = this.state;
    this.waitForResponse = true;
    const response = await API.getProductCards({ page, lang });
    this.waitForResponse = false;
    if (!response.ok) {
      return;
    }
    const resList = response.data.data.data;
    this.setState({
      list: list.concat(resList),
      page: page + 1,
      count: count + 6
    });
  }

  scrollEndRefresh = ({ distanceFromEnd }) => {
    this.getProductElements();
    this.setState({});
  };

  itemSeparator = ({ highlighted }) => (
    <View style={[styles.separator, highlighted && { marginLeft: 0 }]} />
  );

  renderFooter = () =>
    this.waitForResponse ? (
      <ActivityIndicator
        style={{ margin: 10, backgroundColor: "#fff" }}
        size="large"
        color={"black"}
      />
    ) : (
      <View style={{ height: 30 }} />
    );

  renderHeader = () => {
    const { children = <View /> } = this.props;
    return children;
  };

  scrollToTop = () => {
    this.listRef.scrollToOffset({ animated: true, offset: 0 });
  };

  render() {
    const { list = [] } = this.state;

    return (
      <View style={styles.container}>
        {this.state.count > 0 ? (
          <FlatList
            {...this.props}
            ref={ref => (this.listRef = ref)}
            ListHeaderComponent={this.renderHeader}
            columnWrapperStyle={styles.list}
            ItemSeparatorComponent={this.itemSeparator}
            renderItem={({ item, index, section }) => (
              <ProductCard {...this.props} item={item} />
            )}
            data={list}
            keyExtractor={(item, index) => index}
            numColumns={2}
            horizontal={false}
            onEndReachedThreshold={0.5}
            onEndReached={this.scrollEndRefresh}
            ListFooterComponent={this.renderFooter}
            scrollEventThrottle={0}
          />
        ) : null}
      </View>
    );
  }
}
