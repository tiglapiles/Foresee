import React from "react";
import { ScrollView, Text, Image, View, Dimensions } from "react-native";
import { Button, Text as NBText } from "native-base";
import { Images } from "../Themes";

// Styles
import styles from "./Styles/LaunchScreenStyles";
const { height, width } = Dimensions.get("window");

export default class LaunchScreen extends React.Component {
  render() {
    return (
      <View style={styles.mainContainer}>
        <Image
          source={Images.background}
          style={[styles.backgroundImage, { width: width, height: height }]}
          resizeMode="stretch"
        />
        <ScrollView style={styles.container}>
          <View style={[styles.centered, { height: height - 100 }]} />

          <Button
            style={{ alignSelf: "center" }}
            onPress={() => this.props.navigation.navigate("NavigationDrawer")}
          >
            <NBText>Explore!</NBText>
          </Button>
        </ScrollView>
      </View>
    );
  }
}
