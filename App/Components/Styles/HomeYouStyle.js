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
    // width: 300
  },
  img: {
    height: 200,
    width: 100,
    overflow: "hidden"
  }
});
