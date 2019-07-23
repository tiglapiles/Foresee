import React, { Component } from "react";
import { FlatList, Image, ActivityIndicator, View } from "react-native";
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

  handleUp = id => {
    this.propsnavigation.navigate("VideoFlip", { id });
  };

  async getProductElements() {
    const { page, list, count } = this.state;
    this.waitForResponse = true;
    await timeout(500);
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

  render() {
    const { list } = this.state;

    return (
      <View style={styles.container}>
        <FlatList
          /* columnWrapperStyle={{ justifyContent: "space-between", padding: 10 }} */
          renderItem={({ item, index, section }) => (
            <FeedsCard cardInfo={item} {...this.props} />
          )}
          data={list}
          keyExtractor={(item, index) => index}
          /* style={styles.list} */
          /* contentContainerStyle={styles.list} */
          numColumns={1}
          horizontal={false}
          onEndReachedThreshold={0.5}
          onEndReached={this.scrollEnd}
          ListFooterComponent={() =>
            this.waitForResponse ? (
              <ActivityIndicator
                style={{ margin: 10 }}
                size="large"
                color={"black"}
              />
            ) : (
              <View style={{ height: 30 }} />
            )
          }
        />
      </View>
    );
  }
}
