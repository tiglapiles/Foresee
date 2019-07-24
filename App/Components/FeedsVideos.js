import React, { Component } from "react";
import { FlatList, ActivityIndicator, View } from "react-native";
import { connect } from "react-redux";
import styles from "./Styles/FeedsDiscoverStyle";
import { timeout } from "../Lib/utils.js";
import FeedsTopic from "../Components/FeedsTopic";
import FeedsVideoList from "../Components/FeedsVideoList.js";

class FeedsVideos extends Component {
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
    await timeout(500);
    const response = require("../Fixtures/videos.json");
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

  handleUp = id => {
    this.props.navigation.navigate("VideoFlip", { id });
  };

  scrollEnd = ({ distanceFromEnd }) => {
    this.getProductElements();
    this.setState({});
  };

  render() {
    const { list } = this.state;

    return (
      <View style={styles.container}>
        <FlatList
          ListHeaderComponent={() => <FeedsTopic {...this.props} />}
          columnWrapperStyle={{ justifyContent: "space-between", padding: 10 }}
          /* ItemSeparatorComponent={highlighted => ( */
          /*   <View style={[{ height: 2 }, highlighted && { marginLeft: 0 }]} /> */
          /* )} */
          renderItem={({ item, index, section }) => (
            <FeedsVideoList item={item} handleUp={this.handleUp} />
          )}
          data={list}
          keyExtractor={(item, index) => index}
          style={styles.list}
          contentContainerStyle={styles.list}
          numColumns={2}
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

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FeedsVideos);
