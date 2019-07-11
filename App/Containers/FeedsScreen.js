import React, { Component } from "react";
import { BackHandler, TouchableOpacity } from "react-native";
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
  View,
  Tabs,
  Tab
} from "native-base";
import { connect } from "react-redux";
import BottomFooter from "../Components/BottomFooter.js";
import FeedsFollowing from "../Components/FeedsFollowing.js";
import FeedsDiscover from "../Components/FeedsDiscover.js";
import FeedsVideos from "../Components/FeedsVideos.js";
// import FeedNavRedux from "../Navigation/FeedsNavigation.js";
// import ProductList from "../Containers/ProductList.js";
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from "./Styles/FeedsScreenStyle";

class FeedsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      indexPage: 1
    };
  }
  componentDidMount() {
    BackHandler.addEventListener("hardwareBackPress", () => {
      this.props.navigation.goBack();
      return true;
    });
  }

  changeTab = e => {
    console.log(e.i);
  };

  render() {
    const { indexPage } = this.state;

    return (
      <Container>
        <Header hasTabs>
          <Left />
          <Body>
            <Title>Feeds</Title>
          </Body>
          <Right>
            <TouchableOpacity onPress={() => this.setState({ indexPage: 0 })}>
              <Icon name="heart" />
            </TouchableOpacity>
          </Right>
        </Header>

        <Tabs page={indexPage} onChangeTab={this.changeTab} initialPage={1}>
          <Tab heading="Following">
            <FeedsFollowing {...this.props} />
          </Tab>
          <Tab heading="Discover">
            <FeedsDiscover {...this.props} />
          </Tab>
          <Tab heading="Videos">
            <FeedsVideos {...this.props} />
          </Tab>
        </Tabs>
        {/* <Content padder> */}
        {/*   <View style={{ height: 100, backgroundColor: "#ddd" }} /> */}
        {/*   <Text>FeedsScreen Content</Text> */}
        {/* </Content> */}

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
)(FeedsScreen);
