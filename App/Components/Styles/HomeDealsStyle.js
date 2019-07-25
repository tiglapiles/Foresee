import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    // flex: 1
    backgroundColor: "#fff",
    height: 200,
    flexDirection: "row",
    justifyContent: "space-around",
    borderRadius: 5
  },
  item: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  img: {
    width: 80,
    height: 80,
    marginBottom: 15,
    backgroundColor: "lightgray"
  },
  price: {
    fontWeight: "bold",
    marginBottom: 10
  },
  off: {
    color: "#e67e22"
  }
});
