import React, { Component } from "react";
import { BackHandler, ScrollView } from "react-native";
import { View } from "native-base";
import { connect } from "react-redux";
// Add Actions - replace 'Your' with whatever your reducer is called :)
import ProductActions from "../Redux/ProductRedux.js";
import { convertToImgList } from "../Lib/utils.js";
// home component
import BottomFooter from "../Components/BottomFooter.js";
import ImagesSwiper from "../Components/ImagesSwiper.js";
import HomeMenu from "../Components/HomeMenu.js";
import HomeSubTitle from "../Components/HomeSubTitle.js";
import HomeProduct from "../Components/HomeProduct.js";
import HomeMarkets from "../Components/HomeMarkets.js";
import HomeDeals from "../Components/HomeDeals.js";
// import HomeTrade from "../Components/HomeTrade.js";
import HomeYou from "../Components/HomeYou.js";
import SearchBarTem from "../Components/SearchBarTem.js";
import BusinessCard from "../Components/BusinessCard.js";
// Styles
import styles from "./Styles/HomeScreenStyle";

class HomeScreen extends Component {
  componentWillMount() {
    this.props.getHome();
    this.props.getHomeProduct("en");
  }

  componentDidMount() {
    BackHandler.addEventListener("hardwareBackPress", () => {
      this.props.navigation.goBack();
      return true;
    });
  }

  renderSubItems = () => {
    const { homeProduct = [] } = this.props;
    const subComponent = ({ name, info = {} }) => {
      switch (name) {
        case "Preferred area":
          return <HomeProduct info={info} {...this.props} />;
        case "Industry market":
          return <HomeMarkets info={info} {...this.props} />;
        case "Weekly specials":
          return <HomeDeals info={info} {...this.props} />;
        case "Brand Zone":
          return <HomeDeals info={info} {...this.props} />;
        case "made in America":
          return <HomeDeals info={info} {...this.props} />;
        case "Exhibition":
          return <BusinessCard info={info} {...this.props} />;
        // case "trade":
        //   return <HomeTrade info={info} {...this.props} />;
        // case "you":
        //   return <HomeYou info={info} {...this.props} />;
        default:
          return <View style={{ height: 100, backgroundColor: "#fff" }} />;
      }
    };

    return homeProduct.map((o = {}, i) => (
      <View style={{ marginTop: 20 }} key={i}>
        <HomeSubTitle
          color={o.color}
          title={o.name}
          more={o.more}
          {...this.props}
        />
        {subComponent({ name: o.name, info: o.child })}
      </View>
    ));
  };

  render() {
    const { home = {} } = this.props;

    return (
      <View style={styles.container}>
        <SearchBarTem {...this.props} />

        <HomeYou {...this.props}>
          <ImagesSwiper
            style={{ padding: 0 }}
            imgList={convertToImgList(home.swiperData)}
          />
          <HomeMenu {...this.props} />
          <View style={{ padding: 5 }}>{this.renderSubItems()}</View>

          <View style={{ marginTop: 20, padding: 5 }}>
            <HomeSubTitle title={"JUST FOR YOU"} />
          </View>
        </HomeYou>

        <BottomFooter {...this.props} />
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    home: state.product.home,
    homeProduct: state.product.homeProduct
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getHome: () => dispatch(ProductActions.requestHome()),
    getHomeProduct: lang => dispatch(ProductActions.requestHomeProduct(lang))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeScreen);
