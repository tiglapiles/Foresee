import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    // flex: 1
    padding: 10,
    height: 180,
    backgroundColor: "#fff",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center"
  },
  img: {
    width: "100%",
    height: "100%"
  },
  title: {
    marginLeft: 10,
    marginBottom: 10,
    marginRight: "auto",
    fontWeight: "bold",
    fontSize: 20
  },
  item: {
    width: 100,
    height: 120,
    borderRadius: 5,
    overflow: "hidden",
    marginRight: 8,
    backgroundColor: "#f39c12",
    zIndex: 5
  },
  hash: {
    color: "#fff",
    fontSize: 12,
    backgroundColor: "transparent"
  },
  textView: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "flex-end",
    // alignItems: "center",
    padding: 8
  }
});
