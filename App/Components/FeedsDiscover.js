import React, { Component } from "react";
import { FlatList, ActivityIndicator, View } from "react-native";
import { timeout } from "../Lib/utils.js";
import styles from "./Styles/FeedsDiscoverStyle";
import ProductApi from "../Services/ProductApi.js";
import FeedsTopic from "../Components/FeedsTopic";
import FeedsCard from "../Components/FeedsCard.js";

const API = ProductApi.create();

export default class FeedsDiscover extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      page: 1,
      conunt: 0,
      lang: "en",
      info: []
    };
    this.waitForResponse = false;
  }

  componentWillMount() {}

  componentDidMount() {
    this.getProductElements();
    this.getTopicInfo();
  }

  async getTopicInfo() {
    const { lang } = this.state;
    const response = await API.getProductTop({ lang });
    if (response.ok) {
      this.setState({ info: response.data.data });
    }
  }

  async getProductElements() {
    const { page, list, count } = this.state;
    this.waitForResponse = true;
    await timeout(1000);
    const response = require("../Fixtures/discover.json");
    this.waitForResponse = false;
    // if (!response.ok) {
    // return;
    // }
    const resList = response;
    this.setState({
      list: list.concat(resList),
      page: page + 1,
      count: count + 4
    });
  }

  scrollEnd = ({ distanceFromEnd }) => {
    this.getProductElements();
    this.setState({});
  };

  renderFooter = () => {
    return this.waitForResponse ? (
      <ActivityIndicator
        style={{ margin: 10, height: 60 }}
        size="large"
        color={"black"}
      />
    ) : (
      <View style={{ height: 60 }} />
    );
  };

  renderHeader() {
    return <FeedsTopic info={this.state.info} {...this.props} />;
  }

  render() {
    const { list } = this.state;
    return (
      <View style={styles.container}>
        <FlatList
          ListHeaderComponent={this.renderHeader.bind(this)}
          renderItem={({ item, index, section }) => (
            <FeedsCard cardInfo={item} {...this.props} />
          )}
          data={list}
          bounces={false}
          keyExtractor={(item, index) => index}
          numColumns={1}
          horizontal={false}
          onEndReachedThreshold={0.5}
          onEndReached={this.scrollEnd}
          ListFooterComponent={this.renderFooter}
          showsVerticalScrollIndicator={false}
        />
      </View>
    );
  }
}
