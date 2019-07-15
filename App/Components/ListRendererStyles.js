import { StyleSheet } from "react-native";

export default StyleSheet.create({
  textButtom: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  container: {
    flex: 1,
    margin: 3,
    backgroundColor: "#fff",
    padding: 5
    // flexDirection: "row"
  },
  text: {
    flex: 0.5,
    flexDirection: "column",
    justifyContent: "space-between",
    padding: 5
  },
  name: {
    fontSize: 15,
    color: "#7f8c8d"
  },
  buttomContainer: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  buttomIcon: {
    fontSize: 10,
    marginRight: 3
  },
  buttomText: {
    color: "#7f8c8d",
    fontSize: 10
  }
});
