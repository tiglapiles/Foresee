import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.8)"
    // width: "100%",
    // height: "100%"
  },
  text: {
    color: "#fff",
    fontSize: 20,
    position: "absolute",
    bottom: 20
  },
  image: {
    // flex: 1,
    width: "100%",
    height: "100%"
  },
  outline: {
    position: "absolute",
    top: 20,
    left: 20,
    width: 36,
    height: 36,
    borderRadius: 22,
    padding: 2,
    backgroundColor: "rgba(236, 240, 241,0.5)",
    alignItems: "center"
  },
  back: {
    color: "#fff"
  },
  box: {
    position: "absolute",
    bottom: 30,
    backgroundColor: "transparent",
    paddingLeft: 10,
    paddingRight: 10
  },
  title: {
    color: "#fff",
    marginBottom: 10
  },
  link: {
    backgroundColor: "rgba(236, 240, 241,0.2)",
    borderRadius: 5,
    width: 280,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 5,
    alignItems: "center"
  },
  linkLeft: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center"
  },
  linkText: {
    flexDirection: "column",
    marginLeft: 8
  },
  thumb: {
    position: "absolute",
    bottom: 100,
    right: 40,
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    height: 200
  }
});
