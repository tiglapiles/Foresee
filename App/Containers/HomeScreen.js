import React, { Component } from "react";
import { BackHandler, TouchableOpacity } from "react-native";
import { View, Icon } from "native-base";
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
  constructor(props) {
    super(props);
    this.homeRef;
    this.offset = 0;
    this.state = {
      upDisplay: false,
      footer: true
    };
  }

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

  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.upDisplay !== nextState.upDisplay) return true;
    if (this.state.footer !== nextState.footer) return true;
    return false;
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

  scrollToTop = () => {
    this.homeRef.scrollToTop();
  };

  scrollAction = e => {
    const { nativeEvent = {} } = e;
    const scrollDown = ({ layoutMeasurement, contentOffset, contentSize }) =>
      contentOffset.y > layoutMeasurement.height;
    const isCloseToTop = ({ layoutMeasurement, contentOffset, contentSize }) =>
      contentOffset.y <= layoutMeasurement.height;
    const scrollUp = ({ layoutMeasurement, contentOffset, contentSize }) => {
      const dir = contentOffset.y > this.offset ? true : false;
      this.offset = contentOffset.y;
      return dir;
    };
    if (scrollDown(nativeEvent)) {
      this.setState({ upDisplay: true });
    }
    if (isCloseToTop(nativeEvent)) {
      this.setState({ upDisplay: false });
    }
    if (scrollUp(nativeEvent)) {
      this.setState({ footer: false });
    } else {
      this.setState({ footer: true });
    }
  };

  render() {
    const { home = {} } = this.props;

    return (
      <View style={styles.container}>
        <SearchBarTem {...this.props} />

        <HomeYou
          ref={ref => ref && (this.homeRef = ref)}
          {...this.props}
          onScroll={this.scrollAction}
        >
          <View>
            <ImagesSwiper
              style={{ padding: 0 }}
              imgList={convertToImgList(home.swiperData)}
            />
            <HomeMenu {...this.props} />
            <View style={{ padding: 5 }}>{this.renderSubItems()}</View>

            <View style={{ marginTop: 20, padding: 5 }}>
              <HomeSubTitle title={"JUST FOR YOU"} />
            </View>
          </View>
        </HomeYou>

        {this.state.upDisplay ? (
          <TouchableOpacity style={styles.up} onPress={this.scrollToTop}>
            <Icon name="md-arrow-round-up" style={{ color: "#fff" }} />
          </TouchableOpacity>
        ) : null}
        {this.state.footer ? <BottomFooter {...this.props} /> : null}
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
