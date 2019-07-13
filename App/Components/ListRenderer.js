import React from "react";
import {
  Image,
  Platform,
  View,
  TouchableWithoutFeedback,
  Text
} from "react-native";

const isIOS = Platform.OS === "ios";

export class ListRenderer extends React.Component {
  shouldComponentUpdate(newProps) {
    // return this.props.imageUrl !== newProps.imageUrl;
    return true;
  }
  componentWillUpdate() {
    //On iOS while recycling till the new image is loaded the old one remains visible. This forcefully hides the old image.
    //It is then made visible onLoad
    if (isIOS && this.imageRef) {
      this.imageRef.setNativeProps({
        style: { opacity: 0 }
      });
    }
    // this.listView.setNativeProps({
    //   style: { flexDirection: this.props.viewType === 2 ? "row" : "column" }
    // });
  }
  handleOnLoad = () => {
    if (isIOS && this.imageRef) {
      this.imageRef.setNativeProps({
        style: { opacity: 1 }
      });
    }
  };
  render() {
    const { imageUrl = {} } = this.props;
    return (
      <TouchableWithoutFeedback
        onPress={() => this.props.navigation.navigate("ProductDetail")}
      >
        <View
          ref={ref => (this.listView = ref)}
          style={{
            flex: 1,
            margin: 3,
            backgroundColor: "#fff",
            flexDirection: this.props.viewType === 2 ? "row" : "column",
            padding: 5
          }}
        >
          <View style={{ backgroundColor: "lightgray", flex: 0.5 }}>
            <Image
              ref={ref => {
                this.imageRef = ref;
              }}
              style={{ flex: 1 }}
              onLoad={this.handleOnLoad}
              source={{ uri: imageUrl.master_img }}
            />
          </View>

          <View
            style={{
              flex: 0.5,
              flexDirection: "column",
              justifyContent: "space-between",
              padding: 5
            }}
          >
            <Text numberOfLines={2} style={{ fontSize: 14, color: "#7f8c8d" }}>
              {imageUrl.name}
            </Text>
            <View
              style={{
                flexDirection: "column",
                justifyContent: "space-between"
              }}
            >
              <Text style={{ fontWeight: "bold" }}>$100.00 - $110.00</Text>
              <Text style={{ fontWeight: "bold" }}>500 Metric Ton (MOQ)</Text>
              <Text style={{ fontSize: 10, color: "#7f8c8d" }}>2YRS</Text>
            </View>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text style={{ color: "#7f8c8d", fontSize: 10 }}>COMPARE</Text>
              <Text style={{ color: "#7f8c8d", fontSize: 10 }}>CONTACT</Text>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}
