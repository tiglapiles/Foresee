import React, { Component } from "react";
import { BackHandler, Image } from "react-native";
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
  Title
} from "native-base";
import { connect } from "react-redux";
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/
import ProductOverview from "../Components/ProductOverview.js";
import HomeYou from "../Components/HomeYou.js";

// Styles
import styles from "./Styles/ProductDetailStyle";

class ProductDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    BackHandler.addEventListener("hardwareBackPress", () => {
      this.props.navigation.goBack();
      return true;
    });
  }

  render() {
    return (
      <Content style={{ backgroundColor: "yellow" }}>
        <Header transparent hasTabs>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Product Details</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name="ios-heart" />
            </Button>
          </Right>
        </Header>
        <Tabs>
          <Tab
            heading="OVERVIEW"
            textStyle={styles.tabTitle}
            activeTextStyle={styles.tabTitle}
          >
            {/* <ProductOverview /> */}
          </Tab>
          <Tab
            heading="DETAILS"
            textStyle={styles.tabTitle}
            activeTextStyle={styles.tabTitle}
          >
            <Image
              source={{
                uri:
                  "https://sc01.alicdn.com/kf/HTB1AbzTddHO8KJjSZFLq6yTqVXai/205205747/HTB1AbzTddHO8KJjSZFLq6yTqVXai.jpg"
              }}
              style={{
                width: "100%",
                height: "100%"
                /* transform: [{ rotate: "90deg" }] */
              }}
            />
          </Tab>
          <Tab
            heading="RECOMMENDED"
            textStyle={styles.tabTitle}
            activeTextStyle={styles.tabTitle}
          >
            <HomeYou {...this.props} />
          </Tab>
        </Tabs>
      </Content>
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
)(ProductDetail);
