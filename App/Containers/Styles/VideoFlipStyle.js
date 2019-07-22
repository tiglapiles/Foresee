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
  item: {
    width: width,
    height: height,
    backgroundColor: "rgba(236, 240, 241,0.6)"
  }
});
