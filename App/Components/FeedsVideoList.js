import React from "react";
import { Image, TouchableOpacity } from "react-native";
import {
  Text,
  Left,
  Thumbnail,
  Body,
  Right,
  Button,
  Icon,
  Card,
  CardItem
} from "native-base";
import styles from "./Styles/FeedsVideoListStyle";

export default function FeedsVideoList(props) {
  const info = props.item;
  const action = props.handleUp;

  return (
    <Card style={styles.container}>
      <TouchableOpacity onPress={() => action(info.videoIndex)}>
        <CardItem cardBody>
          <Image source={{ uri: info.url }} style={styles.img} />
        </CardItem>
        <CardItem>
          <Left>
            <Text>{info.title}</Text>
          </Left>
        </CardItem>
        <CardItem>
          <Left>
            <Thumbnail small source={{ uri: info.thumb }} />
            <Body>
              <Text>{info.name}</Text>
            </Body>
          </Left>
          <Right>
            <Button transparent>
              <Icon name="ios-eye" />
              <Text>{info.view}</Text>
            </Button>
          </Right>
        </CardItem>
      </TouchableOpacity>
    </Card>
  );
}
