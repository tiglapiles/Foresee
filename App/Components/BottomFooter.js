import React from "react";
import { Footer, FooterTab, Button, Icon, Text } from "native-base";
import styles from "./Styles/BottomFooterStyle";

export default function BottomFooter(props) {
  const buttonsActive = (active, name) => {
    return active === name;
  };
  const navigation = props.navigation;
  const active = props.navigation.state.routeName || "Home";
  return (
    <Footer style={styles.footer}>
      <FooterTab>
        <Button
          onPress={() => navigation.navigate("Home")}
          vertical
          active={buttonsActive(active, "Home")}
        >
          <Icon name="ios-home" />
          <Text style={styles.title}>Home</Text>
        </Button>
        <Button
          onPress={() => navigation.navigate("Feeds")}
          vertical
          active={buttonsActive(active, "Feeds")}
        >
          <Icon name="ios-heart" />
          <Text style={styles.title}>Feeds</Text>
        </Button>
        <Button
          onPress={() => navigation.navigate("Messenger")}
          vertical
          active={buttonsActive(active, "Messenger")}
        >
          <Icon active name="ios-chatboxes" />
          <Text style={styles.title}>Messenger</Text>
        </Button>
        <Button
          onPress={() => navigation.navigate("My Foresee")}
          vertical
          active={buttonsActive(active, "My Foresee")}
        >
          <Icon name="ios-person" />
          <Text style={styles.title}>My Foresee</Text>
        </Button>
      </FooterTab>
    </Footer>
  );
}
