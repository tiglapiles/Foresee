import React, { Component } from "react";
// import PropTypes from 'prop-types';
import { View, Text, Drawer } from "native-base";
import ProductListScreen from "../Containers/ProductListScreen.js";
import ProductListSide from "../Containers/ProductListSide";
import styles from "./Styles/ProductListDrawerStyle";

export default class ProductListDrawer extends Component {
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

  closeControlPanel = () => {
    this._drawer._root.close();
  };

  openControlPanel = () => {
    this._drawer._root.open();
  };

  render() {
    return (
      <Drawer
        type="overlay"
        ref={ref => (this._drawer = ref)}
        side="right"
        onClose={() => this.closeControlPanel()}
        content={<ProductListSide {...this.props} />}
        style={styles.container}
      >
        <ProductListScreen
          {...this.props}
          openControlPanel={this.openControlPanel}
        />
      </Drawer>
    );
  }
}
