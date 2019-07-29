import React, { Component } from "react";
import { BackHandler, Image, ScrollView } from "react-native";
import {
  Content,
  Text,
  Header,
  Tab,
  Tabs,
  Button,
  Icon,
  Container,
  View,
  Footer,
  TabHeading,
  Input,
  Item
} from "native-base";
import { connect } from "react-redux";
import HTMLView from "react-native-htmlview";
// Add Actions - replace 'Your' with whatever your reducer is called :)
import ProductActions from "../Redux/ProductRedux.js";
import { convertToImgList } from "../Lib/utils.js";
// import ProductOverview from "../Components/ProductOverview.js";
import HomeYou from "../Components/HomeYou.js";
import ImageSwiper from "../Components/ImagesSwiper.js";
import CompanyInfo from "../Components/CompanyInfo";
import CompanyContract from "../Components/CompanyContract.js";
import FeedsFollowing from "../Components/FeedsFollowing.js";
// Styles
import styles from "./Styles/ShopDetailStyle";

class ShopDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      company: true
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.state.company !== nextState.company;
  }

  componentDidMount() {
    const {
      navigation: {
        state: { params }
      }
    } = this.props;
    const url_name = params ? params.url_name : "url_name";
    this.props.getShopInfo("china-disposable");

    BackHandler.addEventListener("hardwareBackPress", () => {
      this.props.navigation.goBack();
      return true;
    });
  }

  handleScroll = ({ layoutMeasurement, contentOffset, contentSize }) => {
    if (contentOffset.y == 0) {
      !this.state.company && this.setState({ company: true });
    }
    if (contentOffset.y > 20) {
      this.state.company && this.setState({ company: false });
    }
  };

  render() {
    const { shop = {}, home = [] } = this.props;
    const { shop_info = {} } = shop;

    return (
      <Container style={styles.container}>
        <Header transparent hasTabs searchBar rounded>
          <Button transparent onPress={() => this.props.navigation.goBack()}>
            <Icon name="arrow-back" />
          </Button>
          <Item>
            <Icon name="ios-search" />
            <Input placeholder="Search" />
            <Icon name="ios-people" />
          </Item>
          <Button transparent>
            <Icon name="ios-menu" />
          </Button>
        </Header>

        <CompanyInfo
          style={{ display: this.state.company ? "flex" : "none" }}
          {...this.props}
          shop_info={shop.shop_info}
        />

        <Tabs locked={true}>
          <Tab
            textStyle={styles.tabTitle}
            activeTextStyle={styles.tabTitle}
            heading={
              <TabHeading style={{ flexDirection: "column" }}>
                <Icon name="home" />
                <Text>Home</Text>
              </TabHeading>
            }
          >
            <Content
              scrollEventThrottle={1}
              onScroll={e => this.handleScroll(e.nativeEvent)}
            >
              <ImageSwiper imgList={convertToImgList([...home])} />
              <HomeYou {...this.props} />
              <CompanyContract contract={shop.shop_info} />
            </Content>
          </Tab>
          <Tab
            textStyle={styles.tabTitle}
            activeTextStyle={styles.tabTitle}
            heading={
              <TabHeading style={{ flexDirection: "column" }}>
                <Icon name="logo-dropbox" />
                <Text>Product</Text>
              </TabHeading>
            }
          >
            <Content
              scrollEventThrottle={1}
              onScroll={e => this.handleScroll(e.nativeEvent)}
            >
              <HomeYou {...this.props} />
            </Content>
          </Tab>
          <Tab
            textStyle={styles.tabTitle}
            activeTextStyle={styles.tabTitle}
            heading={
              <TabHeading style={{ flexDirection: "column" }}>
                <Icon name="ios-document" />
                <Text>Profile</Text>
              </TabHeading>
            }
          >
            <Content
              scrollEventThrottle={1}
              onScroll={e => this.handleScroll(e.nativeEvent)}
            >
              <HTMLView
                value={
                  `<p>${shop_info.title}</p>` +
                    `<p>${shop_info.url_name}</p>` +
                    `<p>${shop_info.company}</p>` +
                    `<p>${shop_info.remarks}</p>` +
                    `<p>${shop_info.api_url}</p>` ||
                  `<p><a href="http://jsdf.co">&hearts; nice job!</a></p>`
                }
              />
            </Content>
          </Tab>
          <Tab
            textStyle={styles.tabTitle}
            activeTextStyle={styles.tabTitle}
            heading={
              <TabHeading style={{ flexDirection: "column" }}>
                <Icon name="heart" />
                <Text>Feeds</Text>
              </TabHeading>
            }
          >
            <FeedsFollowing
              {...this.props}
              scrollEventThrottle={1}
              onScroll={e => this.handleScroll(e.nativeEvent)}
            />
          </Tab>
        </Tabs>

        <Footer style={styles.footer}>
          <View style={styles.footV}>
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
        </Footer>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    shop: state.product.shop,
    home: state.product.home
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getShopInfo: url_name => dispatch(ProductActions.requestShopHome(url_name))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShopDetail);
