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
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/
import ProductOverview from "../Components/ProductOverview.js";
import HomeYou from "../Components/HomeYou.js";
import ImageSwiper from "../Components/ImagesSwiper.js";
import ProductPriceCard from "../Components/ProductPriceCard.js";
import SupplierProfileCard from "../Components/SupplierProfileCard.js";
import DetailDrawer from "../Components/DetailDrawer.js";
import FeedsCard from "../Components/FeedsCard";
// Styles
import styles from "./Styles/ShopDetailStyle";

class ShopDetail extends Component {
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
  renderCards = c => c.map((k, i) => <FeedsCard cardInfo={k} key={i} />);
  render() {
    return (
      <Container style={styles.container}>
        <Header transparent hasTabs searchBar rounded>
          {/* <Left> */}
          <Button transparent onPress={() => this.props.navigation.goBack()}>
            <Icon name="arrow-back" />
          </Button>
          {/* </Left> */}
          {/* <Body> */}
          <Item>
            <Icon name="ios-search" />
            <Input placeholder="Search" />
            <Icon name="ios-people" />
          </Item>
          {/* </Body> */}
          {/* <Right> */}
          <Button transparent>
            <Icon name="ios-menu" />
          </Button>
          {/* </Right> */}
        </Header>
        <Tabs>
          <Tab
            /* heading="Home" */
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
              <ImageSwiper />
              <ProductPriceCard />
              <SupplierProfileCard />
              <DetailDrawer />
            </Content>
          </Tab>
          <Tab
            /* heading="Product" */
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
            /* heading="Profile" */
            textStyle={styles.tabTitle}
            activeTextStyle={styles.tabTitle}
            heading={
              <TabHeading style={{ flexDirection: "column" }}>
                <Icon name="ios-document" />
                <Text>Profile</Text>
              </TabHeading>
            }
          >
            {/* <Content style={{ flex: 1 }}> */}
            {/* <ScrollView style={{ width: "100%", height: "100%", flex: 1 }}> */}
            <Image
              source={{
                uri:
                  "https://sc01.alicdn.com/kf/HTB1AbzTddHO8KJjSZFLq6yTqVXai/205205747/HTB1AbzTddHO8KJjSZFLq6yTqVXai.jpg"
              }}
              style={{
                width: "100%",
                height: "100%"
                /* flex: 1 */
              }}
            />
            {/* </ScrollView> */}
            {/* </Content> */}
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
            <Button small style={styles.footButton}>
              <Text style={styles.buttonText}>SEND INQUIRY</Text>
            </Button>
            {/* <Button small style={styles.footButton}> */}
            {/*   <Text style={styles.buttonText}>SEND INQUIRY</Text> */}
            {/* </Button> */}
            <Button small style={styles.footButton}>
              <Text style={styles.buttonText}>CHAT NOW</Text>
            </Button>
          </View>
        </Footer>
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
)(ShopDetail);
