import { StyleSheet } from "react-native";

export default StyleSheet.create({
  outbox: {
    paddingLeft: 8,
    paddingRight: 8
  },
  container: {
    height: 200,
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#fff",
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
