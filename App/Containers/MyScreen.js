import React, { Component } from "react";
import { BackHandler } from "react-native";
import {
  Content,
  Container,
  Header,
  Left,
  Right,
  Body,
  Button,
  Text,
  Title,
  Icon,
  Footer,
  FooterTab,
  Tab,
  Tabs
} from "native-base";
import { connect } from "react-redux";
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from "./Styles/MyScreenStyle";

class MyScreen extends Component {
  componentDidMount() {
    BackHandler.addEventListener("hardwareBackPress", () => {
      this.props.navigation.goBack();
      return true;
    });
  }
  render() {
    return (
      <Container>
        <Header hasTabs>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="md-arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>MyScreen</Title>
          </Body>
          <Right>
            <Text>SELECT</Text>
          </Right>
        </Header>

        <Tabs>
          <Tab heading="PRODUCT(0)">
            <Text>No favorite added</Text>
          </Tab>
          <Tab heading="SUPPLIERS(0)">
            <Text>No favorite added</Text>
          </Tab>
        </Tabs>

        {/* <Content padder> */}
        {/*   <Text>MyScreen Content</Text> */}
        {/* </Content> */}

        {/* <Footer> */}
        {/*   <FooterTab> */}
        {/*     <Button active full> */}
        {/*       <Text>Footer</Text> */}
        {/*     </Button> */}
        {/*   </FooterTab> */}
        {/* </Footer> */}
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyScreen);
