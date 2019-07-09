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
  Form,
  Item,
  Label,
  Input
} from "native-base";
import { connect } from "react-redux";
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from "./Styles/CurrencyScreenStyle";

class CurrencyScreen extends Component {
  componentDidMount() {
    BackHandler.addEventListener("hardwareBackPress", () => {
      this.props.navigation.goBack();
      return true;
    });
  }
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="md-arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Currency Converter</Title>
          </Body>
          <Right />
        </Header>

        <Content padder>
          <Form>
            <Item fixedLabel>
              <Label>USD</Label>
              <Input />
            </Item>
            <Item fixedLabel last>
              <Label>USD</Label>
              <Input />
            </Item>
          </Form>
        </Content>

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
)(CurrencyScreen);
