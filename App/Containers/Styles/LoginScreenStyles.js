import { StyleSheet } from "react-native";
import { Colors, Metrics } from "../../Themes";

export default StyleSheet.create({
  container: {
    paddingTop: 40,
    backgroundColor: Colors.background
  },
  form: {
    backgroundColor: "transparent",
    margin: Metrics.baseMargin,
    borderRadius: 4
  },
  row: {
    paddingVertical: Metrics.doubleBaseMargin,
    paddingHorizontal: Metrics.doubleBaseMargin,
    flexDirection: "row",
    flex: 1
  },
  rowLabel: {
    color: Colors.charcoal
  },
  textInput: {
    height: 40,
    color: Colors.coal
  },
  textInputReadonly: {
    height: 40,
    color: Colors.steel
  },
  loginRow: {
    paddingBottom: Metrics.doubleBaseMargin,
    paddingHorizontal: Metrics.doubleBaseMargin,
    flexDirection: "row",
    marginTop: 30
  },
  loginButtonWrapper: {
    flex: 1
  },
  loginButton: {
    flex: 1,
    borderWidth: 1,
    borderColor: Colors.charcoal,
    backgroundColor: Colors.panther,
    padding: 6,
    zIndex: 999
  },
  loginText: {
    textAlign: "center",
    color: Colors.silver
  },
  topLogo: {
    alignSelf: "center",
    resizeMode: "contain"
  },
  forgot: {
    alignSelf: "center",
    textDecorationLine: "underline",
    marginTop: 30,
    color: "#bdc3c7",
    fontSize: 14
  },
  register: {
    marginTop: 30,
    alignSelf: "center",
    color: "#bdc3c7",
    fontSize: 14
  },
  loginOther: {
    flex: 1,
    position: "absolute",
    bottom: 0,
    flexDirection: "column",
    justifyContent: "center",
    width: "100%",
    marginBottom: 10
  },
  signInWith: {
    alignSelf: "center",
    color: "#bdc3c7",
    fontSize: 14,
    marginBottom: 10
  }
});
