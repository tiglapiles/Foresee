import { StyleSheet } from "react-native";
import { ApplicationStyles } from "../../Themes/";

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    flex: 1,
    alignItems: "stretch",
    justifyContent: "space-between"
  }
});
