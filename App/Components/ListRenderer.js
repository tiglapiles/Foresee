import React from "react";
import { View, TouchableWithoutFeedback, Text } from "react-native";
import { Icon } from "native-base";
import { ImageRenderer } from "../Components/ImageRenderer.js";
import Styles from "./ListRendererStyles.js";

export class ListRenderer extends React.Component {
  shouldComponentUpdate(newProps) {
    if (this.props.listObj.master_img !== newProps.listObj.master_img)
      return true;
    if (this.props.viewType !== newProps.viewType) return true;
    return false;
  }

  render() {
    const { listObj = {}, viewType = 2 } = this.props;

    return (
      <TouchableWithoutFeedback
        onPress={() =>
          this.props.navigation.navigate("ProductDetail", { id: listObj.id })
        }
      >
        <View
          ref={ref => (this.cardRef = ref)}
          style={[
            Styles.container,
            {
              flexDirection: viewType === 2 ? "row" : "column"
            }
          ]}
        >
          <View style={{ backgroundColor: "lightgray", flex: 0.5 }}>
            <ImageRenderer imageUrl={listObj.master_img} />
          </View>

          <View style={Styles.text}>
            <Text numberOfLines={2} style={Styles.name}>
              {listObj.name}
            </Text>
            <Text style={{ fontWeight: "bold" }}>$100.00 - $110.00</Text>
            <Text style={{ fontWeight: "bold" }}>500 Metric Ton (MOQ)</Text>
            <Text style={{ fontSize: 10, color: "#7f8c8d" }}>2YRS</Text>
            <View style={Styles.buttomContainer}>
              <View style={Styles.textButtom}>
                <Icon name="ios-add-circle-outline" style={Styles.buttomIcon} />
                <Text
                  style={Styles.buttomText}
                  onPress={() => this.props.navigation.navigate("Notification")}
                >
                  COMPARE
                </Text>
              </View>
              <View style={Styles.textButtom}>
                <Icon
                  name="ios-notifications-outline"
                  style={Styles.buttomIcon}
                />
                <Text
                  style={Styles.buttomText}
                  onPress={() => this.props.navigation.navigate("Notification")}
                >
                  CONTACT
                </Text>
              </View>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}
