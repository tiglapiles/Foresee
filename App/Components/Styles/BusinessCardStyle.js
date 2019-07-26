import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 8,
    paddingRight: 8
  },
  box: {
    backgroundColor: "#fff",
    flexDirection: "row",
    height: 80,
    alignItems: "center"
  },
  date: {
    flex: 0.6,
    flexDirection: "row",
    padding: 20,
    alignItems: "center"
  },
  imgBox: {
    flex: 0.4,
    backgroundColor: "lightgray",
    height: "100%"
  },
  img: {
    height: "100%",
    width: "100%"
  },
  text: {
    fontSize: 12,
    marginLeft: 10
  }
});
