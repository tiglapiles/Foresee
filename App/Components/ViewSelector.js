import React from "react";
import { Text, TouchableHighlight, View } from "react-native";
import { Button, Icon } from "native-base";

export class ViewSelector extends React.Component {
  constructor(props) {
    super(props);
    this.currentView = 2;
  }
  shouldComponentUpdate(newProps) {
    // return this.props.viewType !== newProps.viewType;
    return true;
  }
  onPressHandler = () => {
    this.currentView = this.currentView === 1 ? 2 : 1;
    this.props.viewChange(this.currentView);
  };
  render() {
    return (
      <View
        style={{
          height: 50,
          marginBottom: 2,
          backgroundColor: "#ecf0f1",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          shadowColor: "#000000",
          shadowOpacity: 0.8,
          shadowRadius: 2,
          shadowOffset: {
            height: 1,
            width: 0
          }
        }}
      >
        <View style={{ paddingLeft: 20 }}>
          <Text style={{ color: "#7f8c8d" }}>
            <Text style={{ color: "#2d3436" }}>{this.props.total}</Text> results
          </Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <TouchableHighlight
            onPress={this.onPressHandler}
            style={{
              width: 50,
              height: 50,
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <Icon name={this.props.viewType === 1 ? "ios-list" : "md-apps"} />
          </TouchableHighlight>
          <Button
            transparent
            onPress={() => console.log("productlist: refine")}
          >
            <Icon name="ios-funnel" style={{ color: "#e67e22" }} />
            <Text style={{ color: "#e67e22" }}>Refine</Text>
          </Button>
        </View>
      </View>
    );
  }
}
