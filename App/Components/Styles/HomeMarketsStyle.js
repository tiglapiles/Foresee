import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    // flex: 1
    flexDirection: "row",
    justifyContent: "flex-start",
    height: 180
  },
  boxs: {
    width: 320,
    backgroundColor: "#95a5a6",
    borderRadius: 5,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
    overflow: "hidden"
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "left",
    marginBottom: 10
  },
  imgs: {
    width: "80%",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  img: {
    // width: 80,
    // height: 90
    width: "100%",
    height: "100%"
  }
});
