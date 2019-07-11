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
  FooterTab
} from "native-base";
import { connect } from "react-redux";
// Add Actions - replace 'Your' with whatever your reducer is called :)
import ProductActions from "../Redux/ProductRedux.js";
import ProductOverview from "../Components/ProductOverview.js";
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
    this.state = {};
  }
  componentDidMount() {
    const {
      navigation: {
        state: { params }
      }
    } = this.props;
    const id = params ? params.id : 1;
    BackHandler.addEventListener("hardwareBackPress", () => {
      this.props.navigation.goBack();
      return true;
    });
    this.props.getContent(id);
  }

  render() {
    const { detail = {} } = this.props;

    return (
      <Container style={styles.container}>
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
            <Button
              transparent
              onPress={() => this.props.navigation.navigate("Login")}
            >
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
            <Content>
              <ImageSwiper {...this.props} />
              <ProductPriceCard {...this.props} />
              <SupplierProfileCard {...this.props} />
              <DetailDrawer {...this.props} />
            </Content>
          </Tab>
          <Tab
            heading="DETAILS"
            textStyle={styles.tabTitle}
            activeTextStyle={styles.tabTitle}
          >
            <Content>
              {/* <ScrollView style={{ width: "100%", height: "100%", flex: 1 }}> */}
              {/* <Image */}
              {/*   source={{ */}
              {/*     uri: */}
              {/*       "https://sc01.alicdn.com/kf/HTB1AbzTddHO8KJjSZFLq6yTqVXai/205205747/HTB1AbzTddHO8KJjSZFLq6yTqVXai.jpg" */}
              {/*   }} */}
              {/*   style={{ */}
              {/*     width: "100%", */}
              {/*     height: "100%" */}
              {/*   }} */}
              {/* /> */}
              {/* </ScrollView> */}
              <Text>{detail.url_name}</Text>
            </Content>
          </Tab>
          <Tab
            heading="RECOMMENDED"
            textStyle={styles.tabTitle}
            activeTextStyle={styles.tabTitle}
          >
            <Content>
              <HomeYou {...this.props} />
            </Content>
          </Tab>
        </Tabs>

        <Footer style={styles.footer}>
          {/* <FooterTab> */}
          <View style={styles.footV}>
            <Button
              small
              style={styles.footButton}
              onPress={() => this.props.navigation.navigate("Login")}
            >
              <Text style={styles.buttonText}>START ORDER</Text>
            </Button>
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
            {/* </FooterTab> */}
          </View>
        </Footer>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    detail: state.product.detail
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getContent: id => dispatch(ProductActions.requestProductContent(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductDetail);
