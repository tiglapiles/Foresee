import { StyleSheet } from "react-native";
import { ApplicationStyles } from "../../Themes/";

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    flex: 1,
    backgroundColor: "#e67e22"
  },
  content: {
    backgroundColor: "#ecf0f1"
  },
  head: {
    backgroundColor: "#e67e22",
    height: 200,
    width: "100%"
  },
  info: {
    paddingLeft: 5,
    paddingRight: 5,
    // position: "absolute",
    // top: 150,
    width: "100%",
    marginTop: -60
  },
  col: {
    justifyContent: "center",
    alignItems: "center"
  },
  count: {
    fontSize: 25,
    color: "#bdc3c7"
  },
  item: {
    color: "#795548",
    marginLeft: 10
  }
});
