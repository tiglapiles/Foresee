import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    // flex: 1,
    height: 200,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 8,
    paddingRight: 8
  },
  item: {
    width: "49.5%",
    height: 200,
    backgroundColor: "#fff",
    borderRadius: 5,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  image: {
    width: 100,
    height: 100,
    marginTop: 10,
    backgroundColor: "lightgray"
  },
  title: {
    fontSize: 13,
    width: "80%",
    textAlign: "left"
  }
});
