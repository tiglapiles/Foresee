import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    // flex: 1
    height: 140,
    backgroundColor: "#fff",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center"
  },
  scroll: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%",
    paddingLeft: 10
  },
  title: {
    marginLeft: 10,
    marginBottom: 10,
    marginRight: "auto",
    fontWeight: "bold",
    fontSize: 20
  },
  item: {
    width: 80,
    height: 100,
    borderRadius: 5,
    overflow: "hidden",
    marginRight: 8,
    backgroundColor: "#f39c12"
  }
});
