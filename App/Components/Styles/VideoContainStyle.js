import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1
    // width: "100%",
    // height: "100%",
  },
  text: {
    color: "#fff",
    fontSize: 20,
    position: "relative",
    bottom: 20
  },
  image: {
    // flex: 1,
    width: "100%",
    height: "100%"
  },
  outline: {
    position: "relative",
    top: 20,
    left: 20,
    color: "rgba(0, 0, 0, 0.8)"
  },
  title: {
    position: "relative",
    bottom: 100,
    backgroundColor: "transparent",
    paddingLeft: 10,
    paddingRight: 10
  }
});
