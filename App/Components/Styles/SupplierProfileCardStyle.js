import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10
  },
  tip: {
    color: "#95a5a6"
  },
  profile: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  company: {
    fontWeight: "bold",
    marginBottom: 10
  },
  follow: {
    backgroundColor: "#f6e58d",
    width: 80,
    height: 30,
    borderRadius: 20,
    alignItems: "center"
  },
  followText: {
    lineHeight: 30,
    color: "#d35400",
    fontSize: 14
  },
  rate: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20
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
  },
  footer: {
    backgroundColor: "#f5f6fa"
  }
});
