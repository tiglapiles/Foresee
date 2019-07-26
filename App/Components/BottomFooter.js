import React from "react";
import { Image } from "react-native";
import { Footer, FooterTab, Button, Icon, Text } from "native-base";
import styles from "./Styles/BottomFooterStyle";

export default function BottomFooter(props) {
  const buttonsActive = (active, name) => {
    return active === name;
  };
  const navigation = props.navigation;
  const active = props.navigation.state.routeName || "Home";
  return (
    <Footer style={[styles.footer, { ...props.style }]}>
      <FooterTab>
        <Button
          onPress={() => navigation.navigate("Home")}
          vertical
          active={buttonsActive(active, "Home")}
        >
          <Image source={{ uri: "home.png" }} style={styles.image} />
          <Text style={styles.title}>Home</Text>
        </Button>
        <Button
          onPress={() => navigation.navigate("Feeds")}
          vertical
          active={buttonsActive(active, "Feeds")}
        >
          <Image source={{ uri: "feeds.png" }} style={styles.image} />
          <Text style={styles.title}>Feeds</Text>
        </Button>
        <Button
          onPress={() => navigation.navigate("Messenger")}
          vertical
          active={buttonsActive(active, "Messenger")}
        >
          <Image source={{ uri: "message.png" }} style={styles.image} />
          <Text style={styles.title}>Messenger</Text>
        </Button>
        <Button
          onPress={() => navigation.navigate("My Foresee")}
          vertical
          active={buttonsActive(active, "My Foresee")}
        >
          <Image source={{ uri: "mine.png" }} style={styles.image} />
          <Text style={styles.title}>My Foresee</Text>
        </Button>
      </FooterTab>
    </Footer>
  );
}
