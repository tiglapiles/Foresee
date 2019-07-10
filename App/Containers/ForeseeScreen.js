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
  Card,
  CardItem,
  View,
  Grid,
  Col
} from "native-base";
import { connect } from "react-redux";
import BottomFooter from "../Components/BottomFooter.js";
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from "./Styles/ForeseeScreenStyle";

class ForeseeScreen extends Component {
  componentDidMount() {
    BackHandler.addEventListener("hardwareBackPress", () => {
      this.props.navigation.goBack();
      return true;
    });
  }

  handleItem = name => this.props.navigation.navigate(name);

  getCardItems = items => require("../Fixtures/foresee.json")[items];

  render() {
    return (
      <Container>
        <Content>
          <View style={styles.head}>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate("DrawerOpen")}
            >
              <Icon name="menu" style={{ color: "#fff" }} />
            </Button>
            <Text style={{ fontSize: 30, color: "#fff", marginLeft: 30 }}>
              Tiglath Pileser
            </Text>
          </View>

          <View style={styles.info}>
            <Card>
              <CardItem>
                <Body>
                  <Text style={{ marginBottom: 5 }}>
                    <Text style={{ fontSize: 25 }}>6</Text> Step (s) left to
                    complete your profile
                  </Text>
                </Body>
              </CardItem>
              <CardItem>
                <Body>
                  <Text note>
                    Suppliers are more likely to reply if you profile is
                    complete.
                  </Text>
                </Body>
              </CardItem>
              <CardItem>
                <Body>
                  <Text>------ ------ ------ ------ ------ ------</Text>
                </Body>
              </CardItem>
            </Card>
            <Card>
              <CardItem>
                <Grid>
                  <Col>
                    <View style={styles.col}>
                      <Text style={{ fontSize: 25 }}>1</Text>
                      <Text note>My Favorites</Text>
                    </View>
                  </Col>
                  <Col>
                    <View style={styles.col}>
                      <Text style={{ fontSize: 25 }}>0</Text>
                      <Text note>Shopping Cart</Text>
                    </View>
                  </Col>
                  <Col>
                    <View style={styles.col}>
                      <Text style={{ fontSize: 25 }}>4</Text>
                      <Text note>Browsing History</Text>
                    </View>
                  </Col>
                </Grid>
              </CardItem>
            </Card>
            <Card
              style={{ flexDirection: "column" }}
              dataArray={this.getCardItems("manage")}
              renderRow={o => (
                <CardItem button onPress={() => this.handleItem(o.navigate)}>
                  <Icon name={o.icon} />
                  <Text>{o.name}</Text>
                  <Right />
                </CardItem>
              )}
            />
            <Card
              style={{ flexDirection: "column" }}
              dataArray={this.getCardItems("pay")}
              renderRow={o => (
                <CardItem button onPress={() => this.handleItem(o.navigate)}>
                  <Icon name={o.icon} />
                  <Text>{o.name}</Text>
                  <Right />
                </CardItem>
              )}
            />
            <Card
              style={{ flexDirection: "column" }}
              dataArray={this.getCardItems("set")}
              renderRow={o => (
                <CardItem button onPress={() => this.handleItem(o.navigate)}>
                  <Icon name={o.icon} />
                  <Text>{o.name}</Text>
                  <Right />
                </CardItem>
              )}
            />
          </View>
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
)(ForeseeScreen);
