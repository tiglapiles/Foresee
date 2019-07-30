import React, { Component } from "react";
import { TouchableOpacity, FlatList, ImageBackground } from "react-native";
import { View, Text } from "native-base";
import styles from "./Styles/FeedsTopicStyle";
const IMG = `https://sc01.alicdn.com/kf/HTB1bgyOXTjxK1Rjy0Fnq6yBaFXag.jpg_100x100.jpg`;
class TopicItem extends Component {
  shouldComponentUpdate(nextProps) {
    return this.props.item.id !== nextProps.item.id;
  }

  render() {
    const { item = {} } = this.props;
    const img = item.img ? item.img : IMG;

    return (
      <TouchableOpacity
        style={styles.item}
        onPress={() =>
          this.props.navigation.navigate("PayLater", { id: item.id })
        }
      >
        <ImageBackground source={{ uri: img }} style={styles.img}>
          <View style={styles.textView}>
            <Text style={styles.hash} numberOfLines={2}>
              #{item.name}
            </Text>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    );
  }
}

export default class FeedsTopic extends Component {
  shouldComponentUpdate(nextProps) {
    return (
      !this.props.info[0] || this.props.info[0].id !== nextProps.info[0].id
    );
  }

  render() {
    const { info = [] } = this.props;

    return (
      info.length !== 0 && (
        <View style={styles.container}>
          <Text style={styles.title}>Topic</Text>
          <FlatList
            ItemSeparatorComponent={({ highlighted }) => (
              <View style={[highlighted && { marginLeft: 0 }]} />
            )}
            data={info}
            horizontal={true}
            keyExtractor={(item, index) => index}
            renderItem={({ item, index, separator }) => (
              <TopicItem item={item} {...this.props} />
            )}
          />
        </View>
      )
    );
  }
}
