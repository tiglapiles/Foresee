import React from "react";
import { FlatList, Image } from "react-native";
import { connect } from "react-redux";
import { View, Text, Content } from "native-base";
import styles from "./Styles/FeedsDiscoverStyle";
import FeedsTopic from "../Components/FeedsTopic";
import FeedsVideoList from "../Components/FeedsVideoList.js";

function FeedsVideos(props) {
  const navigation = props.navigation;
  const list = [
    {
      videoIndex: "1",
      url:
        "https://sc02.alicdn.com/kf/HLB1FuxWQHvpK1RjSZPiq6zmwXXah/AS-399B-Personality-Kids-Boy-Clothes-Set.jpg_300x300.jpg",
      title: "view more",
      thumb:
        "https://sc01.alicdn.com/kf/HLB1AVBSTmzqK1RjSZPcq6zTepXaT/Summer-Boy-Suit-Hoodie-Kid-Custom-Set.jpg_50x50.jpg",
      name: "shen zhen",
      view: 12
    },
    {
      videoIndex: "2",
      url:
        "https://sc02.alicdn.com/kf/HLB1FuxWQHvpK1RjSZPiq6zmwXXah/AS-399B-Personality-Kids-Boy-Clothes-Set.jpg_300x300.jpg",
      title: "that is enogh",
      thumb:
        "https://sc01.alicdn.com/kf/HLB1AVBSTmzqK1RjSZPcq6zTepXaT/Summer-Boy-Suit-Hoodie-Kid-Custom-Set.jpg_50x50.jpg",
      name: "guang dong",
      view: 20
    },
    {
      videoIndex: "3",
      url:
        "https://sc02.alicdn.com/kf/HLB1FuxWQHvpK1RjSZPiq6zmwXXah/AS-399B-Personality-Kids-Boy-Clothes-Set.jpg_300x300.jpg",
      title: "ionicons icons is awsons",
      thumb:
        "https://sc01.alicdn.com/kf/HLB1AVBSTmzqK1RjSZPcq6zTepXaT/Summer-Boy-Suit-Hoodie-Kid-Custom-Set.jpg_50x50.jpg",
      name: "i",
      view: 33333
    },
    {
      videoIndex: "4",
      url:
        "https://sc02.alicdn.com/kf/HLB1FuxWQHvpK1RjSZPiq6zmwXXah/AS-399B-Personality-Kids-Boy-Clothes-Set.jpg_300x300.jpg",
      title: "ionicons icons is awsons",
      thumb:
        "https://sc01.alicdn.com/kf/HLB1AVBSTmzqK1RjSZPcq6zTepXaT/Summer-Boy-Suit-Hoodie-Kid-Custom-Set.jpg_50x50.jpg",
      name: "react-native-vector-icon",
      view: 33333
    },
    {
      videoIndex: "5",
      url:
        "https://sc02.alicdn.com/kf/HLB1FuxWQHvpK1RjSZPiq6zmwXXah/AS-399B-Personality-Kids-Boy-Clothes-Set.jpg_300x300.jpg",
      title: "products for sale",
      thumb:
        "https://sc01.alicdn.com/kf/HLB1AVBSTmzqK1RjSZPcq6zTepXaT/Summer-Boy-Suit-Hoodie-Kid-Custom-Set.jpg_50x50.jpg",
      name: "unit state",
      view: 55555
    },
    {
      videoIndex: "6",
      url:
        "https://sc02.alicdn.com/kf/HLB1FuxWQHvpK1RjSZPiq6zmwXXah/AS-399B-Personality-Kids-Boy-Clothes-Set.jpg_300x300.jpg",
      title: "on sale last day for sale",
      thumb:
        "https://sc01.alicdn.com/kf/HLB1AVBSTmzqK1RjSZPcq6zTepXaT/Summer-Boy-Suit-Hoodie-Kid-Custom-Set.jpg_50x50.jpg",
      name: "company",
      view: 6
    }
  ];
  const handleUp = id => {
    // console.log(id);
    navigation.navigate("VideoFlip");
  };

  return (
    <Content style={styles.container}>
      <FeedsTopic {...props} />
      <View>
        <FlatList
          renderItem={({ item, index, section }) => (
            <FeedsVideoList item={item} handleUp={handleUp} />
          )}
          data={list}
          keyExtractor={(item, index) => index}
          style={styles.list}
          contentContainerStyle={styles.list}
          numColumns={2}
          horizontal={false}
        />
      </View>
    </Content>
  );
}

const mapStateToProps = state => ({ nav: state.nav });
export default connect(mapStateToProps)(FeedsVideos);
