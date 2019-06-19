import React from "react";
import { View, Text, Content } from "native-base";
import styles from "./Styles/FeedsDiscoverStyle";
import FeedsTopic from "../Components/FeedsTopic";

export default function FeedsDiscover() {
  return (
    <Content style={styles.container}>
      <FeedsTopic />
    </Content>
  );
}
