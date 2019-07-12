import React, { Component } from "react";
import { BackHandler, Image, ScrollView } from "react-native";
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
import FeedsCard from "../Components/FeedsCard";
import CompanyInfo from "../Components/CompanyInfo";
import CompanyContract from "../Components/CompanyContract.js";
// Styles
import styles from "./Styles/ShopDetailStyle";

class ShopDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    const {
      navigation: {
        state: { params }
      }
    } = this.props;
    const url_name = params ? params.url_name : "url_name";
    BackHandler.addEventListener("hardwareBackPress", () => {
      this.props.navigation.goBack();
      return true;
    });
    this.props.getShopInfo("china-disposable");
  }
  renderCards = c => c.map((k, i) => <FeedsCard cardInfo={k} key={i} />);
  render() {
    const { shop = {} } = this.props;
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
        <Tabs>
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
            <Content>
              <CompanyInfo {...this.props} shop_info={shop.shop_info} />
              <ImageSwiper
                {...this.props}
                imgList={convertToImgList(shop.banner)}
              />
              {/* <ProductPriceCard {...this.props} /> */}
              {/* <SupplierProfileCard {...this.props} /> */}
              {/* <DetailDrawer {...this.props} /> */}
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
            <Content>
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
            <Content>
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
            /* heading="Feeds" */
            textStyle={styles.tabTitle}
            activeTextStyle={styles.tabTitle}
            heading={
              <TabHeading style={{ flexDirection: "column" }}>
                <Icon name="heart" />
                <Text>Feeds</Text>
              </TabHeading>
            }
          >
            <Content>
              {this.renderCards(require("../Fixtures/follows.json"))}
            </Content>
          </Tab>
        </Tabs>

        <Footer style={styles.footer}>
          <View style={styles.footV}>
            <Button
              small
              style={styles.footButton}
              onPress={() => this.props.navigation.navigate("Login")}
            >
              <Text style={styles.buttonText}>SEND INQUIRY</Text>
            </Button>
            <Button
              small
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
    shop: state.product.shop
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
