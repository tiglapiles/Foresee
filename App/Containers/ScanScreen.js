import React, { Component } from "react";
import {
  BackHandler,
  AppRegistry,
  StyleSheet,
  TouchableOpacity,
  Linking
} from "react-native";
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
// import QRCodeScanner from "react-native-qrcode-scanner";
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from "./Styles/ScanScreenStyle";

class ScanScreen extends Component {
  componentDidMount() {
    BackHandler.addEventListener("hardwareBackPress", () => {
      this.props.navigation.goBack();
      return true;
    });
  }
  onSuccess = e => {
    Linking.openURL(e.data).catch(err =>
      console.error("An error occured", err)
    );
  };
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="md-arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Scan QR Code</Title>
          </Body>
          <Right />
        </Header>

        <Content>
          {/*<QRCodeScanner
            onRead={this.onSuccess}
            topContent={
              <Text style={styles.centerText}>
                Go to{" "}
                <Text style={styles.textBold}>wikipedia.org/wiki/QR_code</Text>{" "}
                on your computer and scan the QR code.
              </Text>
            }
            bottomContent={
              <TouchableOpacity style={styles.buttonTouchable}>
                <Text style={styles.buttonText}>Scan QR Code!</Text>
              </TouchableOpacity>
            }
          />*/}
        </Content>
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
)(ScanScreen);

// AppRegistry.registerComponent("default", () => ScanScreen);
