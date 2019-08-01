import React, { Component } from "react";
import { BackHandler, TouchableOpacity } from "react-native";
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

  handleTouch = e => {
    this.props.navigation.navigate("Notification");
  };

  messengeList = () => {
    const list = [
      {
        url: "../Images/Message/notification.png",
        title: "Notification",
        note: "Hi Tiglath, view the most popular pr...",
        date: "Yesterday"
      },
      {
        url: "../Images/Message/contact.png",
        title: "New Contacts",
        note: "New Connections and Requests"
      },
      {
        url: "../Images/Message/inquiries.png",
        title: "Inquiries",
        note: "No Content"
      }
    ];
    return (
      <List>
        {list.map((k, i) => (
          <ListItem
            thumbnail
            key={i}
            itemHeader
            button
            onPress={() => this.handleTouch(k.title)}
          >
            <Left>
              <Thumbnail
                style={{ backgroundColor: "#e67e22" }}
                source={require(k.url)}
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
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("Notification")}
            >
              <Icon name="ios-search" style={{ color: "#fff" }} />
            </TouchableOpacity>
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
                    <TouchableOpacity
                      onPress={() => this.handleTouch("TradeManager")}
                    >
                      <Thumbnail
                        source={require("../Images/Message/alibaba.png")}
                      />
                    </TouchableOpacity>
                    <Text>TradeManager</Text>
                  </View>
                </Col>
                <Col>
                  <View style={styles.mItem}>
                    <TouchableOpacity
                      onPress={() => this.handleTouch("Connections")}
                    >
                      <Thumbnail
                        source={require("../Images/Message/connect.png")}
                      />
                    </TouchableOpacity>
                    <Text>Connections</Text>
                  </View>
                </Col>
                <Col>
                  <View style={styles.mItem}>
                    <TouchableOpacity onPress={() => this.handleTouch("Tags")}>
                      <Thumbnail
                        source={require("../Images/Message/tags.png")}
                      />
                    </TouchableOpacity>
                    <Text>Tags</Text>
                  </View>
                </Col>
              </Grid>
            </View>
            <View style={styles.new}>
              <TouchableOpacity
                onPress={() => this.handleTouch("New Contacts")}
              >
                <Thumbnail
                  source={require("../Images/Message/contact.png")}
                  style={{ marginRight: 10, marginLeft: 10 }}
                />
              </TouchableOpacity>
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
