import React, { Component } from "react";
import { FlatList, ActivityIndicator, View } from "react-native";
import { connect } from "react-redux";
import styles from "./Styles/FeedsDiscoverStyle";
import ProductApi from "../Services/ProductApi.js";
import FeedsTopic from "../Components/FeedsTopic";
import FeedsVideoList from "../Components/FeedsVideoList.js";

const API = ProductApi.create();

class FeedsVideos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lang: "en",
      list: [],
      page: 1,
      conunt: 0,
      info: []
    };
    this.waitForResponse = false;
  }

  componentWillMount() {
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
    const { page, list, count, lang } = this.state;
    this.waitForResponse = true;
    const response = await API.getProductVideosList({ page, lang });
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
    const { list, info } = this.state;

    return (
      <View style={styles.container}>
        <FlatList
          ListHeaderComponent={() => <FeedsTopic info={info} {...this.props} />}
          columnWrapperStyle={{ justifyContent: "space-between", padding: 10 }}
          renderItem={({ item, index, section }) => (
            <FeedsVideoList item={item} {...this.props} />
          )}
          data={list}
          bounces={false}
          keyExtractor={(item, index) => index}
          style={styles.list}
          contentContainerStyle={styles.list}
          numColumns={2}
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
