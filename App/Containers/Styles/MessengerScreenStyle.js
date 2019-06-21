import { StyleSheet } from "react-native";
import { ApplicationStyles } from "../../Themes/";

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  contactM: {
    flex: 1.5,
    backgroundColor: "#fff",
    marginBottom: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  new: {
    flex: 1,
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginBottom: 5
  },
  contact: {
    flex: 3,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center"
  },
  mItem: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
