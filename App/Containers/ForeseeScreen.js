import React, { Component } from "react";
import { BackHandler, TouchableOpacity, ScrollView } from "react-native";
import {
  Right,
  Body,
  Button,
  Text,
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

  renderPerson = () => {
    const navigate = e => {
      this.props.navigation.navigate(e);
    };

    return require("../Fixtures/person.json").map((k, i) => (
      <Col key={i}>
        <TouchableOpacity onPress={() => navigate(k.navigate)}>
          <View style={styles.col}>
            <Text style={styles.count}>{k.count}</Text>
            <Text note>{k.name}</Text>
          </View>
        </TouchableOpacity>
      </Col>
    ));
  };

  renderProgress = () => (
    <Card>
      <CardItem button onPress={() => this.props.navigation.navigate("Login")}>
        <Body>
          <Text style={{ marginBottom: 5 }}>
            <Text style={{ fontSize: 25 }}>6</Text> Step (s) left to complete
            your profile
          </Text>
        </Body>
      </CardItem>
      <CardItem button onPress={() => this.props.navigation.navigate("Login")}>
        <Body>
          <Text note>
            Suppliers are more likely to reply if you profile is complete.
          </Text>
        </Body>
      </CardItem>
      <CardItem button onPress={() => this.props.navigation.navigate("Login")}>
        <Body>
          <Text>------ ------ ------ ------ ------ ------</Text>
        </Body>
      </CardItem>
    </Card>
  );

  render() {
    return (
      <View style={styles.container}>
        <ScrollView
          contentContainerStyle={styles.content}
          bounces={false}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.head}>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate("DrawerOpen")}
            >
              <Icon name="menu" style={{ color: "#fff" }} />
            </Button>
            <Text
              style={{ fontSize: 30, color: "#fff", marginLeft: 30 }}
              onPress={() => this.props.navigation.navigate("Personal")}
            >
              Tiglath Pileser
            </Text>
          </View>

          <View style={styles.info}>
            {this.renderProgress()}
            <Card>
              <CardItem>
                <Grid>{this.renderPerson()}</Grid>
              </CardItem>
            </Card>
            <Card
              style={{ flexDirection: "column" }}
              dataArray={this.getCardItems("manage")}
              renderRow={o => (
                <CardItem button onPress={() => this.handleItem(o.navigate)}>
                  <Icon name={o.icon} style={styles.item} />
                  <Text style={styles.item}>{o.name}</Text>
                  <Right />
                </CardItem>
              )}
            />
            <Card
              style={{ flexDirection: "column" }}
              dataArray={this.getCardItems("pay")}
              renderRow={o => (
                <CardItem button onPress={() => this.handleItem(o.navigate)}>
                  <Icon name={o.icon} style={styles.item} />
                  <Text style={styles.item}>{o.name}</Text>
                  <Right />
                </CardItem>
              )}
            />
            <Card
              style={{ flexDirection: "column" }}
              dataArray={this.getCardItems("set")}
              renderRow={o => (
                <CardItem button onPress={() => this.handleItem(o.navigate)}>
                  <Icon name={o.icon} style={styles.item} />
                  <Text style={styles.item}>{o.name}</Text>
                  <Right />
                </CardItem>
              )}
            />
          </View>
        </ScrollView>

        <BottomFooter {...this.props} />
      </View>
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
