import React from "react";
import { Image } from "react-native";
import {
  Text,
  Card,
  CardItem,
  Icon,
  Right,
  Button,
  Body,
  Left,
  Thumbnail
} from "native-base";

export default function FeedsFollowing(props) {
  const k = props.cardInfo;
  return (
    <Card>
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
  );
}
