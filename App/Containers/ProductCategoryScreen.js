import React, { Component, PropTypes } from "react";
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
  ListItem,
  Separator,
  Thumbnail
} from "native-base";
import { connect } from "react-redux";
import ProductActions from "../Redux/ProductRedux.js";

// Styles
import styles from "./Styles/ProductCategoryScreenStyle";

class ProductCategoryScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  static propTypes = {
    getCate: PropTypes.func,
    cate: PropTypes.array
  };

  componentDidMount() {
    BackHandler.addEventListener("hardwareBackPress", () => {
      this.props.navigation.goBack();
      return true;
    });
    this.props.getSubCate();
  }

  componentWillReceiveProps(newProps) {
    console.log("ProductCate:", newProps);
  }

  goSubCate = ({ cateName, subCate }) => {
    if (subCate && subCate.length !== 0) {
      this.props.navigation.navigate("ProductCategory", {
        cateName: cateName,
        subCate: subCate
      });
    } else {
      this.props.navigation.navigate("ProductList");
    }
  };

  getCategories = (data = []) =>
    data.map((k, i) => (
      <ListItem
        avatar
        style={{ marginTop: 10 }}
        onPress={() => this.goSubCate({ cateName: k.name, subCate: k._child })}
        key={i}
      >
        <Thumbnail source={{ uri: k.url }} />
        <Body>
          <Text>{k.name}</Text>
        </Body>
      </ListItem>
    ));

  render() {
    const {
      cate,
      navigation: {
        state: { params }
      }
    } = this.props;
    const cateName = params ? params.cateName : "All Categories";
    const subCate = params ? params.subCate : cate;

    return (
      <Container>
        <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="md-arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Categories</Title>
          </Body>
          <Right />
        </Header>

        <Content>
          <Separator bordered>
            <Text>{cateName}</Text>
          </Separator>
          {this.getCategories(subCate)}
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    cate: state.product.cate
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getSubCate: () => dispatch(ProductActions.cateListRequest())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductCategoryScreen);
