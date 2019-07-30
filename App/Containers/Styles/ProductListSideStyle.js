import { StyleSheet } from "react-native";
import { Colors, Metrics } from "../../Themes/";

export default StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Metrics.navBarHeight,
    backgroundColor: "#ecf0f1"
  },
  sideItem: {
    backgroundColor: "#fff",
    width: "100%",
    marginBottom: 10,
    paddingRight: 14,
    paddingLeft: 14
  },
  price: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    alignItems: "center",
    paddingBottom: 14
  },
  priceTitle: {
    paddingTop: 30,
    // paddingLeft: 14,
    // paddingRight: 14,
    color: "#bdc3c7"
  },
  priceItem: {
    width: "40%"
  },
  priceText: {
    alignSelf: "center",
    alignItems: "center",
    textAlign: "center"
  },
  buttomGroup: {
    flexDirection: "row",
    justifyContent: "space-between"
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
