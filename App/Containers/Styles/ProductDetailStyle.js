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
  footer: {
    backgroundColor: "#fff"
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
    height: 15,
    width: "25%",
    backgroundColor: "#f39c12"
    // paddingBottom: 5,
    // paddingTop: 5
    // marginTop: 10
  },
  buttonText: {
    fontSize: 12
  }
});
