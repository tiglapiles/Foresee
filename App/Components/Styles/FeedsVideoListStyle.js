import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    // flex: 1,
    width: "48.8%",
    flexDirection: "column",
    backgroundColor: "#fff",
    borderRadius: 10,
    height: 250,
    overflow: "hidden"
  },
  imgContainer: {
    flex: 0.6,
    backgroundColor: "lightgray",
    overflow: "hidden"
  },
  img: {
    width: "100%",
    height: "100%",
    overflow: "hidden"
  },
  textContainer: {
    flexDirection: "column",
    justifyContent: "space-between",
    padding: 10,
    flex: 0.4
  },
  info: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    justifyContent: "space-between"
  },
  thumb: {
    flexDirection: "row",
    alignItems: "center",
    overflow: "hidden",
    width: "60%"
  },
  view: {
    width: "40%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end"
  }
});
