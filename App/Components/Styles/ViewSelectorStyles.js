import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    height: 50,
    marginBottom: 3,
    backgroundColor: "#ecf0f1",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    shadowColor: "#000000",
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 0
    }
  },
  changeble: {
    width: 50,
    height: 50,
    alignItems: "center",
    justifyContent: "center"
  },
  refine: {
    height: 30,
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: "#d6d7da",
    alignSelf: "center"
  }
});
