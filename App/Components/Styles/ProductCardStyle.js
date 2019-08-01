import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {},
  item: {
    height: 350,
    width: "49%",
    backgroundColor: "#fff",
    flexDirection: "column",
    justifyContent: "space-around",
    shadowOffset: { width: 2, height: 2 },
    shadowRadius: 2,
    shadowColor: "gray",
    shadowOpacity: 1.0,
    borderRadius: 5,
    zIndex: 5
  },
  imgContainer: {
    flex: 0.6,
    backgroundColor: "lightgray",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    overflow: "hidden"
  },
  img: {
    height: "100%",
    width: "100%",
    overflow: "hidden"
  },
  textContainer: {
    padding: 10,
    flex: 0.4,
    flexDirection: "column",
    justifyContent: "space-between"
  },
  title: {
    fontSize: 14,
    color: "#7f8c8d"
  },
  priceS: {
    fontSize: 15
  },
  moq: {
    color: "#7f8c8d"
  },
  bottom: {
    flexDirection: "row",
    justifyContent: "flex-start"
  },
  bottomItem: {
    fontSize: 12,
    color: "#d35400",
    marginRight: 8
  }
});
