import React, { Component } from "react";
import { BackHandler, View, ActivityIndicator } from "react-native";
import { Header, Left, Right, Body, Button, Title, Icon } from "native-base";
import { RecyclerListView, DataProvider } from "recyclerlistview";
import { connect } from "react-redux";
// Add Actions - replace 'Your' with whatever your reducer is called :)
import ProductActions from "../Redux/ProductRedux.js";
import { LayoutUtil } from "../Lib/LayoutUtil";
import { ListRenderer } from "../Components/ListRenderer";
import { ViewSelector } from "../Components/ViewSelector";
// Styles
import styles from "./Styles/ProductListScreenStyle";

class ProductListScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataProvider: new DataProvider((r1, r2) => {
        return r1 !== r2;
      }),
      layoutProvider: LayoutUtil.getLayoutProvider(2),
      images: [],
      count: 0,
      viewType: 2,
      page: 1,
      total: 0
    };
    this.inProgressNetworkReq = false;
  }

  componentWillMount() {
    // const {
    //   navigation: { state: params }
    // } = this.props;
    // const id = params ? params.id : 1;
    // this.props.getList(id, 1);
    this.fetchMoreData();
  }

  componentDidMount() {
    BackHandler.addEventListener("hardwareBackPress", () => {
      this.props.navigation.goBack();
      return true;
    });
  }

  // scrollToBottomLoad = page => {
  //   const {
  //     getList,
  //     navigation: {
  //       state: { params }
  //     }
  //   } = this.props;
  //   getList(params.id, parseInt(page, 10) + 1);
  // };

  async fetchMoreData() {
    const {
      navigation: {
        state: { params }
      }
    } = this.props;
    const cid = params ? params.id : 1;
    if (!this.inProgressNetworkReq) {
      //To prevent redundant fetch requests. Needed because cases of quick up/down scroll can trigger onEndReached
      //more than once
      this.inProgressNetworkReq = true;
      // const images = await DataCall.get(this.state.count, 18);
      const imagesR = await fetch(
        `http://ok.yjzw.net/api/Product/ProductList.html?cid=${cid}&&page=${
          this.state.page
        }`
      );
      const imagesD = await imagesR.json();
      const images = imagesD.data.data;
      this.inProgressNetworkReq = false;
      this.setState({
        dataProvider: this.state.dataProvider.cloneWithRows(
          this.state.images.concat(images)
        ),
        images: this.state.images.concat(images),
        count: this.state.count + 18,
        page: this.state.page + 1,
        total: imagesD.data.total
      });
    }
  }
  rowRenderer = (type, data) => {
    //We have only one view type so not checks are needed here
    return (
      <ListRenderer
        imageUrl={data}
        viewType={this.state.viewType}
        {...this.props}
      />
    );
  };
  viewChangeHandler = viewType => {
    //We will create a new layout provider which will trigger context preservation maintaining the first visible index
    this.setState({
      layoutProvider: LayoutUtil.getLayoutProvider(viewType),
      viewType: viewType
    });
  };
  handleListEnd = () => {
    this.fetchMoreData();

    //This is necessary to ensure that activity indicator inside footer gets rendered. This is required given the implementation I have done in this sample
    this.setState({});
  };
  renderFooter = () => {
    //Second view makes sure we don't unnecessarily change height of the list on this event. That might cause indicator to remain invisible
    //The empty view can be removed once you've fetched all the data
    return this.inProgressNetworkReq ? (
      <ActivityIndicator style={{ margin: 10 }} size="large" color={"black"} />
    ) : (
      <View style={{ height: 60 }} />
    );
  };

  render() {
    const {
      // list = [],
      navigation: {
        state: { params }
      }
    } = this.props;
    const cateName = params ? params.cateName : "ProductList";

    return (
      <View style={styles.container}>
        <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="md-arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>{cateName}</Title>
          </Body>
          <Right>
            <Button transparent onPress={() => console.log("more")}>
              <Icon name="md-more" />
            </Button>
          </Right>
        </Header>

        <ViewSelector
          total={this.state.total}
          viewType={this.state.viewType}
          viewChange={this.viewChangeHandler}
        />
        {this.state.count > 0 ? (
          <RecyclerListView
            style={{ flex: 1 }}
            contentContainerStyle={{ margin: 3 }}
            onEndReached={this.handleListEnd}
            dataProvider={this.state.dataProvider}
            layoutProvider={this.state.layoutProvider}
            rowRenderer={this.rowRenderer}
            renderFooter={this.renderFooter}
          />
        ) : null}
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    list: state.product.list
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getList: (cid, page) =>
      dispatch(ProductActions.requestProductList(cid, page))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductListScreen);
