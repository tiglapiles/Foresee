import { StyleSheet } from "react-native";
import { Colors, Metrics } from "../../Themes/";

export default StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: Metrics.navBarHeight,
    backgroundColor: Colors.background
  },
  tabTitle: {
    fontSize: 12
  },
  swiper: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    height: 235
  },
  overview: { backgroundColor: "transparent", paddingTop: 200 },
  separator: {
    height: 24,
    backgroundColor: "transparent"
  },
  footer: {
    backgroundColor: "#fff",
    position: "relative",
    bottom: 0,
    height: 60
  },
  footV: {
    justifyContent: "space-around",
    flexDirection: "row",
    alignItems: "center",
    alignContent: "center",
    width: "100%",
    height: "100%",
    padding: 10
  },
  footerButton: {
    height: 25,
    width: "25%",
    backgroundColor: "#f39c12"
    // paddingBottom: 5,
    // paddingTop: 5
    // marginTop: 10
  },
  buttonText: {
    fontSize: 12
  },
  a: {
    fontWeight: "300",
    color: "#FF3366" // make links coloured pink
  },
  recommend: {
    color: "#7f8c8d",
    textAlign: "center",
    padding: 10
  }
});
