import React from "react";
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
import ImageGrid from "../Components/ImageGrid.js";

export default function FeedsFollowing(props) {
  const k = props.cardInfo;

  return (
    <Card>
      <CardItem
        header
        bordered
        button
        onPress={() => props.navigation.navigate("ShopDetail")}
      >
        <Left>
          <Thumbnail square source={{ uri: k.thumb }} />
          <Body>
            <Text>{k.title}</Text>
            <Text note>April 15, 2016</Text>
          </Body>
        </Left>
        <Right>
          {k.follow ? null : (
            <Button success round>
              <Text>Follow</Text>
            </Button>
          )}
        </Right>
      </CardItem>
      <CardItem button onPress={() => props.navigation.navigate("ShopDetail")}>
        <Body>
          <Text>{k.content}</Text>
          <ImageGrid {...props} />
        </Body>
      </CardItem>
      <CardItem
        footer
        bordered
        button
        onPress={() => props.navigation.navigate("Shopdetail")}
      >
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
