import React, { Component } from "react";
import { BackHandler, Image } from "react-native";
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
  List,
  ListItem
} from "native-base";
import { connect } from "react-redux";
// Add Actions - replace 'Your' with whatever your reducer is called :)
import ProductActions from "../Redux/ProductRedux.js";

// Styles
import styles from "./Styles/ProductListScreenStyle";

class ProductListScreen extends Component {
  componentDidMount() {
    const {
      navigation: { state: params }
    } = this.props;
    const id = params ? params.id : 1;
    BackHandler.addEventListener("hardwareBackPress", () => {
      this.props.navigation.goBack();
      return true;
    });
    this.props.getList(id, 1);
  }

  handleTouch = (id = 1) =>
    this.props.navigation.navigate("ProductDetail", { id });

  scrollToBottomLoad = page => {
    const {
      getList,
      navigation: {
        state: { params }
      }
    } = this.props;
    getList(params.id, parseInt(page, 10) + 1);
  };

  render() {
    const {
      list = [],
      navigation: {
        state: { params }
      }
    } = this.props;
    const cateName = params ? params.cateName : "ProductList";

    return (
      <Container>
        <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="md-arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>{cateName}</Title>
          </Body>
          <Right />
        </Header>

        <Content>
          <List
            dataArray={list}
            onEndReachedThreshold={200}
            /* scroll end refresh mathod add later, now i do not know how to config that... */
            /* onEndReached={() => this.scrollToBottomLoad(1)} */
            renderRow={i => (
              <ListItem button onPress={() => this.handleTouch(i.id)}>
                <Left>
                  <Image
                    source={{ uri: i.master_img }}
                    style={{ width: 150, height: 150 }}
                  />
                </Left>
                <Body>
                  <Text>{i.name}</Text>
                  <Text note numberOfLines={1}>
                    {i.url_name}
                  </Text>
                </Body>
                <Right>
                  <Button transparent>
                    <Text>{i.tag}</Text>
                  </Button>
                </Right>
              </ListItem>
            )}
          />
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    list: state.product.list
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getList: (cid, page) =>
      dispatch(ProductActions.requestProductList(cid, page))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductListScreen);
