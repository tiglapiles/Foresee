import React from "react";
import { View, Text, Content } from "native-base";
import styles from "./Styles/FeedsDiscoverStyle";
import FeedsTopic from "../Components/FeedsTopic";
import FeedsCard from "../Components/FeedsCard.js";

export default function FeedsDiscover() {
  const follows = [
    {
      thumb:
        "https://sc01.alicdn.com/kf/HTB1bgyOXTjxK1Rjy0Fnq6yBaFXag.jpg_100x100.jpg",
      title: "Foresee TLD.",
      img:
        "https://sc01.alicdn.com/kf/HTB1bgyOXTjxK1Rjy0Fnq6yBaFXag.jpg_100x100.jpg",
      content: "content could be anything"
    },
    {
      thumb:
        "https://sc01.alicdn.com/kf/HTB1bgyOXTjxK1Rjy0Fnq6yBaFXag.jpg_100x100.jpg",
      title: "Foresee TLD.",
      img:
        "https://sc01.alicdn.com/kf/HTB1bgyOXTjxK1Rjy0Fnq6yBaFXag.jpg_100x100.jpg",
      content: "content could be anything"
    },
    {
      thumb:
        "https://sc01.alicdn.com/kf/HTB1bgyOXTjxK1Rjy0Fnq6yBaFXag.jpg_100x100.jpg",
      title: "Foresee TLD.",
      img:
        "https://sc01.alicdn.com/kf/HTB1bgyOXTjxK1Rjy0Fnq6yBaFXag.jpg_100x100.jpg",
      content: "content could be anything"
    },
    {
      thumb:
        "https://sc01.alicdn.com/kf/HTB1bgyOXTjxK1Rjy0Fnq6yBaFXag.jpg_100x100.jpg",
      title: "Foresee TLD.",
      img:
        "https://sc01.alicdn.com/kf/HTB1bgyOXTjxK1Rjy0Fnq6yBaFXag.jpg_100x100.jpg",
      content: "content could be anything"
    }
  ];
  const renderCards = c => c.map((k, i) => <FeedsCard cardInfo={k} key={i} />);
  return (
    <Content style={styles.container}>
      <FeedsTopic />
      {renderCards(follows)}
    </Content>
  );
}
