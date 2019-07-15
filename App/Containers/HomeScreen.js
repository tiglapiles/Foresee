import React, { Component } from "react";
import { BackHandler, Image, TouchableOpacity } from "react-native";
import {
  Content,
  Container,
  Header,
  Left,
  Right,
  Body,
  Button,
  Text,
  Title,
  Icon,
  Item,
  Input,
  View,
  Card,
  CardItem
} from "native-base";
import { connect } from "react-redux";
// Add Actions - replace 'Your' with whatever your reducer is called :)
import ProductActions from "../Redux/ProductRedux.js";

// Styles
import styles from "./Styles/HomeScreenStyle";
import { convertToImgList } from "../Lib/utils.js";
import BottomFooter from "../Components/BottomFooter.js";
import ImagesSwiper from "../Components/ImagesSwiper.js";
import HomeMenu from "../Components/HomeMenu.js";
import HomeSubTitle from "../Components/HomeSubTitle.js";
import HomeProduct from "../Components/HomeProduct.js";
import HomeMarkets from "../Components/HomeMarkets.js";
import HomeDeals from "../Components/HomeDeals.js";
import HomeTrade from "../Components/HomeTrade.js";
import HomeYou from "../Components/HomeYou.js";
import SearchBar from "../Components/SearchBar.js";

class HomeScreen extends Component {
  componentDidMount() {
    BackHandler.addEventListener("hardwareBackPress", () => {
      this.props.navigation.goBack();
      return true;
    });
    this.props.getHome();
  }

  renderSubItems = () => {
    const subItems = require("../Fixtures/homeItems");
    const bCard = () => (
      <Card>
        <CardItem
          button
          onPress={() => this.props.navigation.navigate("ProductDetail")}
        >
          <Left>
            <Text>//Your text here</Text>
          </Left>
          <Right>
            <Image
              style={{ width: 60, height: 60 }}
              source={{
                uri:
                  "https://sc02.alicdn.com/kf/HTB1foTel7SWBuNjSszdq6zeSpXae/Wholesale-100-Cotton-Children-Blank-Round-Collar.jpg_300x300.jpg"
              }}
            />
          </Right>
        </CardItem>
      </Card>
    );
    const subComponent = i => {
      switch (i) {
        case "products":
          return <HomeProduct {...this.props} />;
        case "markets":
          return <HomeMarkets {...this.props} />;
        case "deals":
          return <HomeDeals {...this.props} />;
        case "brand":
          return <HomeDeals {...this.props} />;
        case "business":
          return bCard();
        case "trade":
          return <HomeTrade {...this.props} />;
        case "you":
          return <HomeYou {...this.props} />;
        default:
          return <View style={{ height: 100, backgroundColor: "#fff" }} />;
      }
    };
    return subItems.map((o, i) => (
      <View style={{ marginTop: 20 }} key={i}>
        <HomeSubTitle
          color={o.color}
          title={o.title}
          more={o.more}
          {...this.props}
        />
        {subComponent(o.name)}
      </View>
    ));
  };
  searchBar = () => (
    <View
      style={{
        paddingLeft: 10,
        paddingRight: 10,
        zIndex: 999,
        width: "100%",
        position: "absolute",
        top: 20
      }}
    >
      <View
        style={{
          /* flex: 1, */
          /* width: "95%", */
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "#fff",
          margin: "auto",
          shadowOpacity: 0.75,
          shadowRadius: 5,
          shadowColor: "#bdc3c7",
          shadowOffset: { height: 0, width: 0 }
        }}
      >
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <Icon
            name="menu"
            onPress={() => this.props.navigation.navigate("DrawerOpen")}
          />
        </View>
        <View>
          <Input
            placeholder="Search products or suppliers"
            style={{ flex: 4 }}
          />
        </View>
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("Scan QR Code")}
          >
            <Icon name="ios-camera" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  render() {
    const { home = {} } = this.props;

    return (
      <View style={styles.container}>
        {this.searchBar()}
        {/* <SearchBar /> */}
        <Content>
          <ImagesSwiper
            style={{ padding: 0 }}
            {...this.props}
            imgList={convertToImgList(home.swiperData)}
          />
          <HomeMenu {...this.props} />
          <View style={{ padding: 5 }}>{this.renderSubItems()}</View>
        </Content>

        <BottomFooter {...this.props} />
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    home: state.product.home
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getHome: () => dispatch(ProductActions.requestHome())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeScreen);
