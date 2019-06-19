import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    // flex: 1
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
    alignItems: "flex-start"
  },
  item: {
    height: 350,
    paddingLeft: 10,
    width: "48.5%",
    backgroundColor: "#fff",
    marginBottom: 10,
    flexDirection: "column",
    justifyContent: "space-around"
  },
  img: {
    height: 200,
    width: 100,
    overflow: "hidden"
  },
  title: {
    fontSize: 12,
    color: "#7f8c8d"
  },
  priceS: {
    fontSize: 15
  },
  bottom: {
    flexDirection: "row",
    justifyContent: "flex-start"
  },
  badge: {
    width: 20,
    height: 20
  }
});
