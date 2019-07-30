import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 10,
    paddingRight: 10,
    width: "100%"
  },
  box: {
    height: 46,
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 2,
    margin: "auto",
    shadowOpacity: 1,
    shadowRadius: 2,
    shadowColor: "gray",
    shadowOffset: { height: 0.5, width: 0.5 }
  },
  icon: {
    flex: 1,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center"
  },
  camera: {
    flex: 1,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center"
  }
});
