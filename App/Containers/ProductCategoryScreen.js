import React, { Component, PropTypes } from "react";
import { BackHandler, TouchableOpacity } from "react-native";
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
  List,
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
  }

  componentWillReceiveProps(newProps) {
    console.log(newProps);
  }

  goSubCate = e => {
    this.props.getCate();
    this.props.navigation.navigate("ProductCategory", { cateName: e });
  };

  getCategories = data =>
    data.map((k, i) => (
      <ListItem
        avatar
        style={{ marginTop: 10 }}
        onPress={() => this.goSubCate(k.title)}
        key={i}
      >
        <Thumbnail source={{ uri: k.url }} />
        <Body>
          <Text>{k.title}</Text>
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
          {this.getCategories(cate)}
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
    getCate: () => {
      dispatch(ProductActions.homeRequest());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductCategoryScreen);
