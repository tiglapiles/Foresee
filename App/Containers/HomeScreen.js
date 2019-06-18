import React, { Component } from "react";
import { BackHandler, Image } from "react-native";
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
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from "./Styles/HomeScreenStyle";
import BottomFooter from "../Components/BottomFooter.js";
import ImagesSwiper from "../Components/ImagesSwiper.js";
import HomeMenu from "../Components/HomeMenu.js";
import HomeSubTitle from "../Components/HomeSubTitle.js";
import HomeProduct from "../Components/HomeProduct.js";
import HomeMarkets from "../Components/HomeMarkets.js";
import HomeDeals from "../Components/HomeDeals.js";
import HomeTrade from "../Components/HomeTrade.js";
import HomeYou from "../Components/HomeYou.js";

class HomeScreen extends Component {
  componentDidMount() {
    BackHandler.addEventListener("hardwareBackPress", () => {
      this.props.navigation.goBack();
      return true;
    });
  }

  renderSubItems = () => {
    const subItems = [
      {
        name: "products",
        color: "#f1c40f",
        title: "selected products",
        more: false
      },
      {
        name: "markets",
        color: "#2980b9",
        title: "industry markets",
        more: true
      },
      {
        name: "deals",
        color: "#d35400",
        title: "weekly deals",
        more: false
      },
      {
        name: "brand",
        color: "#8e44ad",
        title: "brand zone",
        more: false
      },
      {
        name: "business",
        color: "#3498db",
        title: "business insights",
        more: false
      },
      {
        name: "trade",
        color: "#e74c3c",
        title: "trade shows",
        more: true
      },
      {
        name: "you",
        color: "#2ecc71",
        title: "just for you",
        more: false
      }
    ];
    const bCard = () => (
      <Card>
        <CardItem>
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
          return <HomeProduct />;
        case "markets":
          return <HomeMarkets />;
        case "deals":
          return <HomeDeals />;
        case "brand":
          return <HomeDeals />;
        case "business":
          return bCard();
        case "trade":
          return <HomeTrade />;
        case "you":
          return <HomeYou />;
        default:
          return <View style={{ height: 100, backgroundColor: "#fff" }} />;
      }
    };
    return subItems.map((o, i) => (
      <View style={{ marginTop: 20 }} key={i}>
        <HomeSubTitle color={o.color} title={o.title} more={o.more} />
        {subComponent(o.name)}
      </View>
    ));
  };

  render() {
    return (
      <Container style={styles.container}>
        {/* <Header searchBar rounded transparent> */}
        {/*   <Item> */}
        {/*     <Icon */}
        {/*       name="menu" */}
        {/*       onPress={() => this.props.navigation.navigate("DrawerOpen")} */}
        {/*     /> */}
        {/*     <Input placeholder="Search" /> */}
        {/*     <Icon name="ios-camera" /> */}
        {/*   </Item> */}
        {/* </Header> */}

        <Content>
          <ImagesSwiper style={{ padding: 0 }} />
          <HomeMenu />
          <View style={{ padding: 5 }}>{this.renderSubItems()}</View>
        </Content>

        <BottomFooter {...this.props} />
      </Container>
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
)(HomeScreen);
