import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    marginTop: -15,
    overflow: "hidden"
  },
  name: {
    color: "#95a5a6",
    marginBottom: 10
  },
  price: {
    fontWeight: "bold",
    marginBottom: 10,
    fontSize: 30
  },
  footer: {
    backgroundColor: "#f5f6fa"
  }
});
