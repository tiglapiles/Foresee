import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    // flex: 1,
    height: 120,
    backgroundColor: "#fff",
    flexDirection: "row"
  },
  item: {
    width: "25%",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    alignContent: "stretch"
  },
  title: {
    fontSize: 12
  }
});
