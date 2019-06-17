import React, { Component } from "react";
import { BackHandler } from "react-native";
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
  Footer,
  FooterTab
} from "native-base";
import { connect } from "react-redux";
import BottomFooter from "../Components/BottomFooter.js";
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from "./Styles/FeedsScreenStyle";

class FeedsScreen extends Component {
  componentDidMount() {
    BackHandler.addEventListener("hardwareBackPress", () => {
      this.props.navigation.goBack();
      return true;
    });
  }
  render() {
    return (
      <Container>
        <Header>
          <Left>
            {/* <Button */}
            {/*   transparent */}
            {/*   onPress={() => this.props.navigation.navigate("DrawerOpen")} */}
            {/* > */}
            {/*   <Icon name="menu" /> */}
            {/* </Button> */}
          </Left>
          <Body>
            <Title>Feeds</Title>
          </Body>
          <Right>
            <Icon name="heart" />
          </Right>
        </Header>

        <Content padder>
          <Text>FeedsScreen Content</Text>
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
)(FeedsScreen);
