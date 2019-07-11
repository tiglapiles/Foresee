import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1
  },
  tip: {
    color: "#95a5a6"
  },
  company: {
    fontWeight: "bold",
    marginBottom: 10
  },
  rate: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around"
  },
  rateTitle: {
    color: "#95a5a6",
    fontSize: 12,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center"
  },
  rateItem: {
    width: "100%",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
    // textAlign: "center"
    alignSelf: "center"
  }
});
