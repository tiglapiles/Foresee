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
            <Text numberOfLines={2}>{info.title}</Text>
          </Left>
        </CardItem>
        <CardItem>
          <Left>
            <Thumbnail
              square
              source={{ uri: info.thumb }}
              style={{ width: 30, height: 30 }}
            />
            <Body>
              <Text numberOfLines={1} style={{ color: "#95a5a6" }}>
                {info.name}
              </Text>
            </Body>
          </Left>
          <Right>
            <Button transparent>
              <Icon name="ios-eye" style={{ color: "#bdc3c7" }} />
              <Text style={{ color: "#bdc3c7" }}>{info.view}</Text>
            </Button>
          </Right>
        </CardItem>
      </TouchableOpacity>
    </Card>
  );
}
