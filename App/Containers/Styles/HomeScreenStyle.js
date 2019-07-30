import { StyleSheet } from "react-native";
import { ApplicationStyles } from "../../Themes/";

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  up: {
    position: "absolute",
    bottom: 100,
    right: 20,
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0,0.5)"
  },
  bar: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    width: "100%",
    backgroundColor: "transparent",
    height: 90,
    zIndex: 999,
    paddingTop: 32
  }
});
