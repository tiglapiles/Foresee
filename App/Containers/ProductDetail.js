import React, { Component } from "react";
import { BackHandler, ScrollView } from "react-native";
import {
  Content,
  Text,
  Header,
  Tab,
  Tabs,
  Left,
  Body,
  Right,
  Button,
  Icon,
  Title,
  View
} from "native-base";
import { connect } from "react-redux";
import HTMLView from "react-native-htmlview";
// Add Actions - replace 'Your' with whatever your reducer is called :)
import ProductActions from "../Redux/ProductRedux.js";
import { convertToImgList } from "../Lib/utils.js";
// import ProductOverview from "../Components/ProductOverview.js";
import HomeYou from "../Components/HomeYou.js";
import ImageSwiper from "../Components/ImagesSwiper.js";
import ProductPriceCard from "../Components/ProductPriceCard.js";
import SupplierProfileCard from "../Components/SupplierProfileCard.js";
import DetailDrawer from "../Components/DetailDrawer.js";

// Styles
import styles from "./Styles/ProductDetailStyle";

class ProductDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      indexTab: 0
    };
  }

  componentWillMount() {
    const {
      navigation: {
        state: { params }
      }
    } = this.props;
    const id = params ? params.id : 1;
    this.props.getContent(id);
    this.props.getHome();
  }

  componentDidMount() {
    BackHandler.addEventListener("hardwareBackPress", () => {
      this.props.navigation.goBack();
      return true;
    });
  }

  scrollTab = (e, tab) => {
    const { nativeEvent = {} } = e;
    const { indexTab } = this.state;
    const isScrollDown = ({ layoutMeasurement, contentOffset, contentSize }) =>
      contentOffset.y > contentSize.height - 350;
    const isScrollTop = ({ layoutMeasurement, contentOffset, contentSize }) =>
      contentOffset.y <= -120;
    console.log(nativeEvent);
    if (isScrollDown(nativeEvent)) {
      tab === "view" && indexTab == 0 && this.setState({ indexTab: 1 });

      tab === "detail" && indexTab == 1 && this.setState({ indexTab: 2 });
    }
    if (isScrollTop(nativeEvent)) {
      tab === "detail" && indexTab == 1 && this.setState({ indexTab: 0 });
    }
  };

  render() {
    const { detail = {}, home = [] } = this.props;

    return (
      <View style={styles.container}>
        <Header hasTabs>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Product Details</Title>
          </Body>
          <Right>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate("Login")}
            >
              <Icon name="ios-heart" />
            </Button>
            <Button transparent onPress={() => console.log("more")}>
              <Icon name="md-more" />
            </Button>
          </Right>
        </Header>

        <Tabs
          /* scrollWithoutAnimation={true} */
          locked={true}
          style={{ backgroundColor: "transparent" }}
          page={this.state.indexTab}
          onChangeTab={e => this.setState({ indexTab: e.i })}
        >
          <Tab
            heading="OVERVIEW"
            textStyle={styles.tabTitle}
            activeTextStyle={styles.tabTitle}
            style={{ backgroundColor: "transparent" }}
          >
            <ImageSwiper
              imgList={convertToImgList([...home])}
              style={styles.swiper}
            />

            <ScrollView
              contentContainerStyle={styles.overview}
              showsVerticalScrollIndicator={false}
              scrollEventThrottle={0.1}
              onScroll={e => this.scrollTab(e, "view")}
            >
              <View style={styles.separator} />
              <View style={{ backgroundColor: "#ecf0f1" }}>
                <ProductPriceCard {...this.props} />
                <SupplierProfileCard {...this.props} />
                <DetailDrawer {...this.props} />
              </View>
            </ScrollView>
          </Tab>
          <Tab
            heading="DETAILS"
            textStyle={styles.tabTitle}
            activeTextStyle={styles.tabTitle}
          >
            <Content
              showsVerticalScrollIndicator={false}
              scrollEventThrottle={0.1}
              onScroll={e => this.scrollTab(e, "detail")}
            >
              <HTMLView
                value={
                  detail.description ||
                  `<p><a href="http://jsdf.co">&hearts; nice job!</a></p>`
                }
                /* stylesheet={styles} */
              />
            </Content>
          </Tab>
          <Tab
            heading="RECOMMENDED"
            textStyle={styles.tabTitle}
            activeTextStyle={styles.tabTitle}
          >
            <HomeYou {...this.props}>
              <Text style={styles.recommend}>
                Recommended From This Supplier
              </Text>
            </HomeYou>
          </Tab>
        </Tabs>

        <View style={styles.footer}>
          <View style={styles.footV}>
            <Button
              warning
              style={styles.footButton}
              onPress={() => this.props.navigation.navigate("Login")}
            >
              <Text style={styles.buttonText}>START ORDER</Text>
            </Button>
            <Button
              warning
              style={styles.footButton}
              onPress={() => this.props.navigation.navigate("Login")}
            >
              <Text style={styles.buttonText}>SEND INQUIRY</Text>
            </Button>
            <Button
              warning
              style={styles.footButton}
              onPress={() => this.props.navigation.navigate("Login")}
            >
              <Text style={styles.buttonText}>CHAT NOW</Text>
            </Button>
          </View>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    detail: state.product.detail,
    home: state.product.home
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getContent: id => dispatch(ProductActions.requestProductContent(id)),
    getHome: () => dispatch(ProductActions.requestHome())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductDetail);
