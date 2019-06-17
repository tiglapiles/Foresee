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
  Item,
  Input
} from "native-base";
import { connect } from "react-redux";
import BottomFooter from "../Components/BottomFooter.js";
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from "./Styles/HomeScreenStyle";

class HomeScreen extends Component {
  componentDidMount() {
    BackHandler.addEventListener("hardwareBackPress", () => {
      this.props.navigation.goBack();
      return true;
    });
  }
  render() {
    return (
      <Container>
        <Header searchBar rounded transparent>
          <Item>
            <Icon
              name="menu"
              onPress={() => this.props.navigation.navigate("DrawerOpen")}
            />
            <Input placeholder="Search" />
            <Icon name="ios-camera" />
          </Item>
        </Header>

        <Content padder>
          <Text>HomeScreen Content</Text>
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
