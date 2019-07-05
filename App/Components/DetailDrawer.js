import React, { Component } from "react";
// import PropTypes from 'prop-types';
import {
  View,
  Text,
  Left,
  Right,
  Icon,
  Card,
  CardItem,
  Body
} from "native-base";
import styles from "./Styles/DetailDrawerStyle";

export default class DetailDrawer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }
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
        <Card>
          <CardItem header button onPress={() => alert("This is Card Header")}>
            <Left>
              <Text>Quick Details</Text>
            </Left>
            <Right>
              <Icon name="ios-more" />
            </Right>
          </CardItem>
          <CardItem>
            <Body>
              <Text>Click on any carditem</Text>
              <Text>Click on any carditem</Text>
              <Text>Click on any carditem</Text>
              <Text>Click on any carditem</Text>
              <Text>Click on any carditem</Text>
            </Body>
          </CardItem>
          {/* <CardItem footer button onPress={() => alert("This is Card Footer")}> */}
          {/*   <Left> */}
          {/*     <Text>4YRS</Text> */}
          {/*   </Left> */}
          {/*   <Right> */}
          {/*     <Text>Learn More</Text> */}
          {/*   </Right> */}
          {/* </CardItem> */}
        </Card>
      </View>
    );
  }
}
