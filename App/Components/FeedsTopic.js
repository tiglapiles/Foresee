import React from "react";
import { TouchableOpacity, FlatList, ImageBackground } from "react-native";
import { View, Text } from "native-base";
import styles from "./Styles/FeedsTopicStyle";

export default function FeedsTopic(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Topic</Text>
      <FlatList
        ItemSeparatorComponent={({ highlighted }) => (
          <View style={[highlighted && { marginLeft: 0 }]} />
        )}
        data={require("../Fixtures/topic.json")}
        horizontal={true}
        keyExtractor={(item, index) => index}
        renderItem={({ item, index, separator }) => (
          <TouchableOpacity
            style={styles.item}
            onPress={() => props.navigation.navigate("PayLater")}
          >
            <ImageBackground source={{ uri: item.img }} style={styles.img}>
              <View style={styles.textView}>
                <Text style={styles.hash} numberOfLines={2}>
                  #FashionTrend
                </Text>
              </View>
            </ImageBackground>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
