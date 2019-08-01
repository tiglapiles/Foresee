import React from "react";
import { Image, ScrollView, TouchableOpacity } from "react-native";
import { View, Text } from "native-base";
import styles from "./Styles/HomeMarketsStyle";

export default function HomeMarkets(props) {
  const handleTouch = e => {
    props.navigation.navigate("ProductDetail");
  };
  const { info = [] } = props;

  const markets = goods => {
    return goods.map((i, k) => (
      <View key={k} style={styles.boxs}>
        {/* <Text style={styles.title}>{i.title}</Text> */}
        {/* <View style={styles.imgs}> */}
        {/*   {i.imgs.map((o, j) => ( */}
        {/*     <TouchableOpacity onPress={handleTouch} key={j}> */}
        {/*       <Image style={styles.img} source={{ uri: o }} /> */}
        {/*     </TouchableOpacity> */}
        {/*   ))} */}
        {/* </View> */}
        <TouchableOpacity
          onPress={handleTouch}
          style={{ width: "100%", height: "100%" }}
        >
          <Image style={styles.img} source={{ uri: i.img }} />
        </TouchableOpacity>
      </View>
    ));
  };
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.container}
    >
      {markets(info)}
    </ScrollView>
  );
}
