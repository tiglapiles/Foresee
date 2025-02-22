import React, { PropTypes } from "react";
import { Text, TouchableHighlight, View, StyleSheet } from "react-native";
import { Button, Icon } from "native-base";
import styles from "./Styles/ViewSelectorStyles.js";

export class ViewSelector extends React.Component {
  constructor(props) {
    super(props);
    this.currentView = 2;
  }

  static propTypes = {
    openControlPanel: PropTypes.func.isRequired
  };

  shouldComponentUpdate(newProps) {
    if (this.props.total !== newProps.total) return true;
    if (this.props.viewType !== newProps.viewType) return true;

    return false;
  }

  onPressHandler = () => {
    this.currentView = this.currentView === 1 ? 2 : 1;
    this.props.viewChange(this.currentView);
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={{ paddingLeft: 20 }}>
          <Text style={{ color: "#7f8c8d" }}>
            <Text style={{ color: "#2d3436" }}>{this.props.total}</Text> results
          </Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <TouchableHighlight
            onPress={this.onPressHandler}
            style={styles.changeble}
          >
            <Icon name={this.props.viewType === 1 ? "ios-list" : "md-apps"} />
          </TouchableHighlight>
          <View style={styles.refine} />
          <Button transparent onPress={this.props.openControlPanel}>
            <Icon name="ios-funnel" style={{ color: "#e67e22" }} />
            <Text style={{ color: "#e67e22" }}>Refine</Text>
          </Button>
        </View>
      </View>
    );
  }
}
