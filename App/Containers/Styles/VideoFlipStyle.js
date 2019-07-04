import { StyleSheet, Dimensions } from "react-native";
import { Colors, Metrics } from "../../Themes/";
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
export default StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Metrics.navBarHeight,
    backgroundColor: Colors.background
  },
  scroll: {
    // flex: 1
  },
  box: {},
  title: {
    position: "relative",
    bottom: 100,
    backgroundColor: "transparent",
    paddingLeft: 10,
    paddingRight: 10
  },
  image: {
    width: "100%",
    height: "100%"
  },
  item: {
    width: width,
    height: height,
    backgroundColor: "rgba(0,0,0,0.5)"
  },
  outline: {
    position: "relative",
    top: 20,
    left: 20,
    color: "rgba(0, 0, 0, 0.8)"
  }
});
