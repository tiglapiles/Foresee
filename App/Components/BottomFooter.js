import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  Container,
  Header,
  Content,
  Footer,
  FooterTab,
  Button,
  Icon,
  Text,
  View
} from "native-base";
import styles from "./Styles/BottomFooterStyle";

export default class BottomFooter extends Component {
  // Prop type warnings
  static propTypes = {
    active: PropTypes.string,
    footerSwitch: PropTypes.func
  };

  // Defaults for props
  static defaultProps = {
    active: "home"
  };

  buttonTouch = (type, e) => {
    e.preventDefault();
    this.props.footerSwitch(type);
  };

  buttonsActive = (active, name) => {
    return active === name;
  };

  render() {
    return (
      <Footer style={styles.footer}>
        <FooterTab>
          <Button
            onPress={e => this.buttonTouch("home", e)}
            vertical
            active={this.buttonsActive(this.props.active, "home")}
          >
            <Icon name="ios-home" />
            <Text style={styles.title}>Home</Text>
          </Button>
          <Button
            onPress={e => this.buttonTouch("feeds", e)}
            vertical
            active={this.buttonsActive(this.props.active, "feeds")}
          >
            <Icon name="ios-heart" />
            <Text style={styles.title}>Feeds</Text>
          </Button>
          <Button
            onPress={e => this.buttonTouch("messenger", e)}
            vertical
            active={this.buttonsActive(this.props.active, "messenger")}
          >
            <Icon active name="ios-chatboxes" />
            <Text style={styles.title}>Messenger</Text>
          </Button>
          <Button
            onPress={e => this.buttonTouch("myforesee", e)}
            vertical
            active={this.buttonsActive(this.props.active, "myforesee")}
          >
            <Icon name="ios-person" />
            <Text style={styles.title}>My Foresee</Text>
          </Button>
        </FooterTab>
      </Footer>
    );
  }
}
