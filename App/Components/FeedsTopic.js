import React from "react";
import { ScrollView, Image } from "react-native";
import { View, Text } from "native-base";
import styles from "./Styles/FeedsTopicStyle";

export default function FeedsTopic() {
  const topics = [
    {
      img:
        "https://sc01.alicdn.com/kf/HTB1bgyOXTjxK1Rjy0Fnq6yBaFXag.jpg_100x100.jpg"
    },
    {
      img:
        "https://sc01.alicdn.com/kf/HTB1bgyOXTjxK1Rjy0Fnq6yBaFXag.jpg_100x100.jpg"
    },
    {
      img:
        "https://sc01.alicdn.com/kf/HTB1bgyOXTjxK1Rjy0Fnq6yBaFXag.jpg_100x100.jpg"
    },
    {
      img:
        "https://sc01.alicdn.com/kf/HTB1bgyOXTjxK1Rjy0Fnq6yBaFXag.jpg_100x100.jpg"
    },
    {
      img:
        "https://sc01.alicdn.com/kf/HTB1bgyOXTjxK1Rjy0Fnq6yBaFXag.jpg_100x100.jpg"
    },
    {
      img:
        "https://sc01.alicdn.com/kf/HTB1bgyOXTjxK1Rjy0Fnq6yBaFXag.jpg_100x100.jpg"
    }
  ];
  const renderTopics = d =>
    d.map((i, k) => (
      <View key={k} style={styles.item}>
        <Image source={{ uri: i.img }} style={{ width: 80, height: 100 }} />
      </View>
    ));
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Topic</Text>
      <ScrollView contentContainerStyle={styles.scroll} horizontal>
        {renderTopics(topics)}
      </ScrollView>
    </View>
  );
}
