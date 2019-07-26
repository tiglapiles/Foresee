import React, { Component } from "react";
import { FlatList, ActivityIndicator, View } from "react-native";
import { timeout } from "../Lib/utils.js";
import styles from "./Styles/FeedsFollowingStyle";
import FeedsCard from "../Components/FeedsCard";

export default class FeedsFollowing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      page: 1,
      conunt: 0
    };
    this.waitForResponse = false;
  }

  componentWillMount() {
    this.getProductElements();
  }

  async getProductElements() {
    const { page, list, count } = this.state;
    this.waitForResponse = true;
    await timeout(1000);
    const response = require("../Fixtures/following.json");
    this.waitForResponse = false;
    // if (!response.ok) {
    // return;
    // }
    const resList = response;
    this.setState({
      list: list.concat(resList),
      page: page + 1,
      count: count + 6
    });
  }

  scrollEnd = ({ distanceFromEnd }) => {
    this.getProductElements();
    this.setState({});
  };

  renderFooter = () =>
    this.waitForResponse ? (
      <ActivityIndicator
        style={{ margin: 10, height: 60 }}
        size="large"
        color={"black"}
      />
    ) : (
      <View style={{ height: 60 }} />
    );

  render() {
    const { list } = this.state;

    return (
      <View style={styles.container}>
        <FlatList
          renderItem={({ item, index, section }) => (
            <FeedsCard cardInfo={item} {...this.props} />
          )}
          data={list}
          bounces={false}
          keyExtractor={(item, index) => index}
          /* contentContainerStyle={styles.list} */
          numColumns={1}
          horizontal={false}
          onEndReachedThreshold={0.5}
          onEndReached={this.scrollEnd}
          showsVerticalScrollIndicator={false}
          ListFooterComponent={() => this.renderFooter()}
        />
      </View>
    );
  }
}
