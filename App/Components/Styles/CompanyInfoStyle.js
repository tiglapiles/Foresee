import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    // flex: 1,
    width: "100%",
    height: 200
  },
  background: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "flex-end"
  },
  inner: {
    // height: 120,
    width: "90%",
    margin: "auto",
    backgroundColor: "#fff",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10
  },
  nameC: {
    fontWeight: "bold",
    alignSelf: "center",
    alignItems: "center",
    textAlign: "center",
    fontSize: 14
  },
  nameE: {
    alignSelf: "center",
    color: "#95a5a6",
    alignItems: "center"
  },
  card: {
    borderRadius: 10
  },
  icon: {
    alignSelf: "center"
  }
});
