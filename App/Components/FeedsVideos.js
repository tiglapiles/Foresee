import React from "react";
import { FlatList, Image } from "react-native";
import { connect } from "react-redux";
import { View, Text, Content } from "native-base";
import styles from "./Styles/FeedsDiscoverStyle";
import FeedsTopic from "../Components/FeedsTopic";
import FeedsVideoList from "../Components/FeedsVideoList.js";

function FeedsVideos(props) {
  const navigation = props.navigation;
  const handleUp = id => {
    navigation.navigate("VideoFlip", { id });
  };

  return (
    <Content style={styles.container}>
      <FeedsTopic {...props} />
      <View>
        <FlatList
          columnWrapperStyle={{ justifyContent: "space-between", padding: 10 }}
          /* ItemSeparatorComponent={highlighted => ( */
          /*   <View style={[{ height: 2 }, highlighted && { marginLeft: 0 }]} /> */
          /* )} */
          renderItem={({ item, index, section }) => (
            <FeedsVideoList item={item} handleUp={handleUp} />
          )}
          data={require("../Fixtures/videos.json")}
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
