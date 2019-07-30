import React, { Component } from "react";
import { BackHandler } from "react-native";
import {
  Icon,
  Container,
  Content,
  Text,
  Form,
  Item,
  Button,
  Label,
  Input,
  View,
  Footer,
  ListItem,
  CheckBox,
  Left,
  Right,
  Picker
} from "native-base";
import { connect } from "react-redux";
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from "./Styles/ProductListSideStyle";

class ProductListSide extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: "key3"
    };
  }

  componentDidMount() {
    BackHandler.addEventListener("hardwareBackPress", () => {
      this.props.navigation.goBack();
      return true;
    });
  }

  onValueChange(value: string) {
    this.setState({
      selected: value
    });
  }

  render() {
    return (
      <Container style={styles.container}>
        <Form>
          <View style={styles.sideItem}>
            <Item floatingLabel>
              <Label>Min.Order &lt;=</Label>
              <Input />
            </Item>
            <Text style={styles.priceTitle}>Price USD</Text>
            <View style={styles.price}>
              <Item floatingLabel style={styles.priceItem}>
                <Label>min</Label>
                <Input />
              </Item>
              <Text style={styles.priceText}>--</Text>
              <Item floatingLabel style={styles.priceItem}>
                <Label>max</Label>
                <Input />
              </Item>
            </View>
          </View>
          <View style={styles.sideItem}>
            {/* <Button transparent onPress={() => console.log("sidebar location")}> */}
            {/*   <Text>Location</Text> */}
            {/* </Button> */}
            <Picker
              mode="dropdown"
              iosIcon={<Icon name="arrow-down" />}
              /* headerBackButtonText="Location" */
              selectedValue={this.state.selected}
              onValueChange={this.onValueChange.bind(this)}
            >
              <Picker.Item label="Wallet" value="key0" />
              <Picker.Item label="ATM Card" value="key1" />
              <Picker.Item label="Debit Card" value="key2" />
              <Picker.Item label="Credit Card" value="key3" />
              <Picker.Item label="Net Banking" value="key4" />
            </Picker>
          </View>
          <View style={styles.sideItem}>
            <Text>Instock products with fast dispatch</Text>
            <Button bordered warning>
              <Text>Warning</Text>
            </Button>
          </View>
          <View style={styles.sideItem}>
            <ListItem noBorder>
              <Left>
                <Text>Daily Stand Up</Text>
              </Left>
              <Right>
                <CheckBox checked={true} />
              </Right>
            </ListItem>
            <ListItem noBorder>
              <Left>
                <Text>Discussion with Client</Text>
              </Left>
              <Right>
                <CheckBox checked={true} />
              </Right>
            </ListItem>
            <View style={{ marginBottom: 30 }}>
              <Text>Response Rate</Text>
              <View style={styles.buttomGroup}>
                <Button bordered warning>
                  <Text>70%</Text>
                </Button>
                <Button bordered warning>
                  <Text>80%</Text>
                </Button>
                <Button bordered warning>
                  <Text>90%</Text>
                </Button>
              </View>
            </View>
          </View>
        </Form>
        <Footer style={styles.footer}>
          <View style={styles.footV}>
            <Button
              small
              style={styles.footButton}
              onPress={() => console.log("sidebar:productListside")}
            >
              <Text style={styles.buttonText}>CLEAR ALL</Text>
            </Button>
            <Button
              small
              style={styles.footButton}
              onPress={() => console.log("sidebar:productListside doneq")}
            >
              <Text style={styles.buttonText}>DONE</Text>
            </Button>
          </View>
        </Footer>
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
)(ProductListSide);
