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
  Thumbnail,
  View
} from "native-base";
import ImageGrid from "../Components/ImageGrid.js";
import VideoComponent from "../Components/Video.js";

export default function FeedsFollowing(props) {
  const info = props.cardInfo;

  const renderImages = (info = {}) => (
    <View style={{ flex: 1, width: "100%", height: "100%" }}>
      <Text numberOfLines={2}>{info.content}</Text>
      <ImageGrid images={info.images} {...props} />
    </View>
  );

  const renderVideo = (info = {}) => (
    <View
      style={{
        flex: 1,
        width: "100%",
        height: 300,
        flexDirection: "column",
        justifyContent: "space-between"
      }}
    >
      <Text numberOfLines={2}>{info.content}</Text>
      <View style={{ width: "100%", height: "70%" }}>
        <VideoComponent
          url={"http://techslides.com/demos/sample-videos/small.mp4"}
        />
      </View>
      <View
        style={{
          height: 50,
          backgroundColor: "lightgray",
          borderRadius: 10,
          overflow: "hidden"
          /* lineHeight: 50 */
        }}
      >
        <Text style={{ lineHeight: 50 }}>US $1.18 Pieces</Text>
      </View>
    </View>
  );

  const renderCardContent = (info = {}) => {
    const type = info.type;
    switch (type) {
      case "images":
        return renderImages(info);
      case "video":
        return renderVideo(info);
      default:
        return <Text>There nothing contain in the Card!</Text>;
    }
  };

  return (
    <Card>
      <CardItem
        header
        bordered
        button
        onPress={() => props.navigation.navigate("ShopDetail")}
      >
        <Left>
          <Thumbnail square source={{ uri: info.thumb }} />
          <Body>
            <Text numberOfLines={1}>{info.title}</Text>
            <Text note numberOfLines={1}>
              April 15, 2016
            </Text>
          </Body>
        </Left>
        <Right>
          {info.follow ? null : (
            <Button
              success
              round
              style={{ backgroundColor: "#e67e22", borderRadius: 25 }}
            >
              <Text>Follow</Text>
            </Button>
          )}
        </Right>
      </CardItem>
      <CardItem button onPress={() => props.navigation.navigate("ShopDetail")}>
        <Body>{renderCardContent(info)}</Body>
      </CardItem>
      <CardItem
        footer
        bordered
        button
        onPress={() => props.navigation.navigate("Shopdetail")}
      >
        <Right>
          <Button transparent onPress={() => console.log("thumb")}>
            <Icon active name="thumbs-up" />
            <Text>12</Text>
          </Button>
        </Right>
      </CardItem>
    </Card>
  );
}
