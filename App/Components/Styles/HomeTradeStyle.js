import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    // flex: 1
    flexDirection: "row",
    justifyContent: "flex-start",
    height: 150
  },
  more: {
    width: 150,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
    borderRadius: 10,
    overflow: "hidden"
  },
  council: {
    width: 300,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    overflow: "hidden"
  },
  img: {
    width: "100%",
    height: 100
  },
  view: {
    width: "100%",
    height: 50,
    textAlign: "center",
    backgroundColor: "#fff",
    alignItems: "center"
  },
  date: {
    width: "100%",
    height: 50,
    textAlign: "left",
    backgroundColor: "#ddd",
    position: "relative",
    bottom: 0
  }
});
