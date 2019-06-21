import React, { Component } from "react";
import { BackHandler } from "react-native";
import {
  View,
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
  Tabs,
  Tab,
  List,
  ListItem,
  Thumbnail,
  Card,
  CardItem,
  Grid,
  Col
} from "native-base";
import { connect } from "react-redux";
import BottomFooter from "../Components/BottomFooter.js";
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from "./Styles/MessengerScreenStyle";

class MessengerScreen extends Component {
  componentDidMount() {
    BackHandler.addEventListener("hardwareBackPress", () => {
      this.props.navigation.goBack();
      return true;
    });
  }

  messengeList = () => {
    const list = [
      {
        url:
          "https://i.alicdn.com/sc01/kf/HTB1oKhnbRGw3KVjSZFw762Q2FXau/Wholesales-different-dial-alloy-insert-clock.png_140x140xz.jpg",
        title: "Notification",
        note: "Hi Tiglath, view the most popular pr...",
        date: "Yesterday"
      },
      {
        url:
          "https://i.alicdn.com/sc01/kf/HTB1JXQ4aEvrK1RjSspcq6zzSXXau/30-inch-8k-190T-pongee-auto-open.jpg_140x140xz.jpg",
        title: "New Contacts",
        note: "New Connections and Requests"
      },
      {
        url:
          "https://i.alicdn.com/sc01/kf/HTB1XQn3V9zqK1RjSZFpq6ykSXXaX/freezer-safe-meal-prep-container-15-packs.jpg_140x140.jpg",
        title: "Inquiries",
        note: "No Content"
      }
    ];
    return (
      <List>
        {list.map((k, i) => (
          <ListItem thumbnail key={i} itemHeader>
            <Left>
              <Thumbnail
                style={{ backgroundColor: "#e67e22" }}
                source={{ uri: k.url }}
              />
            </Left>
            <Body>
              <Text>{k.title}</Text>
              <Text note numberOfLines={1}>
                {k.note}
              </Text>
            </Body>
            <Right />
          </ListItem>
        ))}
      </List>
    );
  };
  render() {
    return (
      <Container>
        <Header hasTabs style={{ backgroundColor: "#e67e22" }}>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate("DrawerOpen")}
            >
              <Icon name="menu" style={{ color: "#fff" }} />
            </Button>
          </Left>
          <Body>
            <Title style={{ color: "#fff" }}>Messenger</Title>
          </Body>
          <Right>
            <Icon name="ios-search" style={{ color: "#fff" }} />
          </Right>
        </Header>
        <Tabs tabBarUnderlineStyle={{ backgroundColor: "#fff" }}>
          <Tab
            style={{ backgroundColor: "#f5f6fa" }}
            tabStyle={{ backgroundColor: "#e67e22" }}
            activeTabStyle={{ backgroundColor: "#e67e22" }}
            textStyle={{ color: "#bdc3c7" }}
            activeTextStyle={{ color: "#fff" }}
            heading="MESSAGE"
          >
            {this.messengeList()}
          </Tab>
          <Tab
            style={{ backgroundColor: "#f5f6fa" }}
            tabStyle={{ backgroundColor: "#e67e22" }}
            textStyle={{ color: "#bdc3c7" }}
            activeTabStyle={{ backgroundColor: "#e67e22" }}
            activeTextStyle={{ color: "#fff" }}
            heading="CONTACTS"
          >
            <View style={styles.contactM}>
              <Grid>
                <Col>
                  <View style={styles.mItem}>
                    <Icon name="ios-ionitron" style={{ fontSize: 60 }} />
                    <Text>TradeManager</Text>
                  </View>
                </Col>
                <Col>
                  <View style={styles.mItem}>
                    <Icon name="ios-git-network" style={{ fontSize: 60 }} />
                    <Text>Connections</Text>
                  </View>
                </Col>
                <Col>
                  <View style={styles.mItem}>
                    <Icon name="ios-pricetag" style={{ fontSize: 60 }} />
                    <Text>Tags</Text>
                  </View>
                </Col>
              </Grid>
            </View>
            <View style={styles.new}>
              <Icon
                name="ios-contacts"
                style={{ fontSize: 60, marginRight: 10, marginLeft: 10 }}
              />
              <Text>New Contacts</Text>
            </View>
            <View style={styles.contact}>
              <Icon name="information-circle" />
              <Text>No Contacts</Text>
            </View>
          </Tab>
        </Tabs>

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
)(MessengerScreen);
