import React from "react";
import { Content } from "native-base";
import styles from "./Styles/FeedsFollowingStyle";
import FeedsCard from "../Components/FeedsCard";

export default function FeedsFollowing(props) {
  const follows = require("../Fixtures/following.json");
  const renderCards = c =>
    c.map((k, i) => <FeedsCard cardInfo={k} key={i} {...props} />);
  return <Content style={styles.container}>{renderCards(follows)}</Content>;
}
