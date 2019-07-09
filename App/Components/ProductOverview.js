import React, { Component } from "react";
// import PropTypes from 'prop-types';
import { Button } from "react-native";
import { View, Text } from "native-base";
import styles from "./Styles/ProductOverviewStyle";
import SlidingUpPanel from "rn-sliding-up-panel";

export default class ProductOverview extends Component {
  // // Prop type warnings
  // static propTypes = {
  //   someProperty: PropTypes.object,
  //   someSetting: PropTypes.bool.isRequired,
  // }
  //
  // // Defaults for props
  // static defaultProps = {
  //   someSetting: false
  // }

  render() {
    return (
      <View style={styles.container}>
        <Button title="Show panel" onPress={() => this._panel.show()} />
        <SlidingUpPanel ref={c => (this._panel = c)}>
          <View style={styles.container}>
            <Text>Here is the content inside panel</Text>
            <Button title="Hide" onPress={() => this._panel.hide()} />
          </View>
        </SlidingUpPanel>
      </View>
    );
  }
}
