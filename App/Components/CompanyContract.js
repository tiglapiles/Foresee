import React, { Component } from "react";
// import PropTypes from 'prop-types';
import { View, Body, Card, CardItem, Text, Left, Thumbnail } from "native-base";
import styles from "./Styles/CompanyContractStyle";

export default class CompanyContract extends Component {
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
    const { contract = {} } = this.props;

    return (
      // <View style={styles.container}>
      // </View>
      <Card>
        <CardItem>
          <Left>
            <Thumbnail
              source={{
                uri:
                  "http://ok.yjzw.net/uploads/images/1/Banner/IMG-2019062310298575.png"
              }}
            />
            <Body>
              <Text>{contract.username || "username"}</Text>
            </Body>
          </Left>
        </CardItem>
        <CardItem>
          <Left>
            <Text>Telehpone:</Text>
          </Left>
          <Body>
            <Text>{contract.telephone || "e.g. 86-750-322xxxx"}</Text>
          </Body>
        </CardItem>
        <CardItem>
          <Left>
            <Text>Mobiel Phone:</Text>
          </Left>
          <Body>
            <Text>{contract.phone || "e.g. 13822xxxxxx"}</Text>
          </Body>
        </CardItem>
        <CardItem>
          <Left>
            <Text>Address:</Text>
          </Left>
          <Body>
            <Text>{contract.addressor || "e.g. No.3888 XihuanRoad"}</Text>
          </Body>
        </CardItem>
        <CardItem>
          <Left>
            <Text>Zip:</Text>
          </Left>
          <Body>
            <Text>{contract.zip || "e.g. 529000"}</Text>
          </Body>
        </CardItem>
        <CardItem>
          <Left>
            <Text>Country/Region:</Text>
          </Left>
          <Body>
            <Text>{contract.country || "e.g. China(Mainland)"}</Text>
          </Body>
        </CardItem>
        <CardItem>
          <Left>
            <Text>Province/State:</Text>
          </Left>
          <Body>
            <Text>{contract.province || "e.g. Guangdong"}</Text>
          </Body>
        </CardItem>
        <CardItem>
          <Left>
            <Text>City:</Text>
          </Left>
          <Body>
            <Text>{contract.city || "e.g. Jiangmen"}</Text>
          </Body>
        </CardItem>
      </Card>
    );
  }
}
