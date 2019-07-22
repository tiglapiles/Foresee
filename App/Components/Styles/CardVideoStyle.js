import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: 350,
    flexDirection: "column",
    justifyContent: "space-between"
  },
  textLink: {
    height: 80,
    backgroundColor: "rgba(236, 240, 241,1.0)",
    borderRadius: 5,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center"
  },
  text: {
    fontSize: 18
  },
  img: {
    width: "25%",
    backgroundColor: "lightgray",
    height: "100%",
    marginRight: 10
  }
});
