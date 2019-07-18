import React from "react";
import { View, Text, Content } from "native-base";
import styles from "./Styles/FeedsDiscoverStyle";
import FeedsTopic from "../Components/FeedsTopic";
import FeedsCard from "../Components/FeedsCard.js";

export default function FeedsDiscover(props) {
  const renderCards = c =>
    c.map((k, i) => <FeedsCard cardInfo={k} key={i} {...props} />);
  return (
    <Content style={styles.container}>
      <FeedsTopic {...props} />
      {renderCards(require("../Fixtures/discover.json"))}
    </Content>
  );
}
