import React from "react";
import { Content } from "native-base";
import styles from "./Styles/FeedsFollowingStyle";
import FeedsCard from "../Components/FeedsCard";

export default function FeedsFollowing(props) {
  const follows = [
    {
      thumb:
        "https://sc01.alicdn.com/kf/HTB1bgyOXTjxK1Rjy0Fnq6yBaFXag.jpg_100x100.jpg",
      title: "Foresee TLD.",
      img:
        "https://sc01.alicdn.com/kf/HTB1bgyOXTjxK1Rjy0Fnq6yBaFXag.jpg_100x100.jpg",
      content: "content could be anything",
      follow: true
    },
    {
      thumb:
        "https://sc01.alicdn.com/kf/HTB1bgyOXTjxK1Rjy0Fnq6yBaFXag.jpg_100x100.jpg",
      title: "Foresee TLD.",
      img:
        "https://sc01.alicdn.com/kf/HTB1bgyOXTjxK1Rjy0Fnq6yBaFXag.jpg_100x100.jpg",
      content: "content could be anything",
      follow: true
    },
    {
      thumb:
        "https://sc01.alicdn.com/kf/HTB1bgyOXTjxK1Rjy0Fnq6yBaFXag.jpg_100x100.jpg",
      title: "Foresee TLD.",
      img:
        "https://sc01.alicdn.com/kf/HTB1bgyOXTjxK1Rjy0Fnq6yBaFXag.jpg_100x100.jpg",
      content: "content could be anything",
      follow: true
    },
    {
      thumb:
        "https://sc01.alicdn.com/kf/HTB1bgyOXTjxK1Rjy0Fnq6yBaFXag.jpg_100x100.jpg",
      title: "Foresee TLD.",
      img:
        "https://sc01.alicdn.com/kf/HTB1bgyOXTjxK1Rjy0Fnq6yBaFXag.jpg_100x100.jpg",
      content: "content could be anything",
      follow: true
    }
  ];
  const renderCards = c => c.map((k, i) => <FeedsCard cardInfo={k} key={i} />);
  return <Content style={styles.container}>{renderCards(follows)}</Content>;
}
