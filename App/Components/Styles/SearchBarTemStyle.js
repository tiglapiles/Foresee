import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    // flex: 1
    paddingLeft: 10,
    paddingRight: 10,
    zIndex: 999,
    width: "100%",
    position: "absolute",
    top: 20
  },
  box: {
    /* flex: 1, */
    /* width: "95%", */
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
    margin: "auto",
    shadowOpacity: 0.75,
    shadowRadius: 5,
    shadowColor: "#bdc3c7",
    shadowOffset: { height: 0, width: 0 }
  },
  icon: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  camera: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
