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
  Input,
  View
} from "native-base";
import { connect } from "react-redux";
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from "./Styles/HomeScreenStyle";
import BottomFooter from "../Components/BottomFooter.js";
import ImagesSwiper from "../Components/ImagesSwiper.js";
import HomeMenu from "../Components/HomeMenu.js";

class HomeScreen extends Component {
  componentDidMount() {
    BackHandler.addEventListener("hardwareBackPress", () => {
      this.props.navigation.goBack();
      return true;
    });
  }
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

        <ImagesSwiper style={{ padding: 0 }} />
        <HomeMenu />

        <Content padder />

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
