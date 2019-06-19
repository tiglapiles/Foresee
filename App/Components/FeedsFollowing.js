import React from "react";
import { Image } from "react-native";
import {
  View,
  Text,
  Card,
  CardItem,
  Content,
  Icon,
  Right,
  Button,
  Body,
  Left,
  Thumbnail
} from "native-base";
import styles from "./Styles/FeedsFollowingStyle";

export default function FeedsFollowing(props) {
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
  const renderCards = c =>
    c.map((k, i) => (
      <Card key={i}>
        <CardItem header bordered>
          <Left>
            <Thumbnail source={{ uri: k.thumb }} />
            <Body>
              <Text>{k.title}</Text>
              <Text note>April 15, 2016</Text>
            </Body>
          </Left>
        </CardItem>
        <CardItem>
          <Body>
            <Image
              source={{ uri: k.img }}
              style={{ height: 200, width: 200, flex: 1 }}
            />
            <Text>{k.content}</Text>
          </Body>
        </CardItem>
        <CardItem footer bordered>
          <Right>
            <Button transparent>
              <Icon active name="thumbs-up" />
              <Text>12</Text>
            </Button>
          </Right>
        </CardItem>
      </Card>
    ));
  return <Content style={styles.container}>{renderCards(follows)}</Content>;
}
