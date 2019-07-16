import React, { PropTypes } from "react";
import {
  View,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Keyboard,
  LayoutAnimation
} from "react-native";
import { connect } from "react-redux";
import { GoogleSignin, GoogleSigninButton } from "react-native-google-signin";
import Styles from "./Styles/LoginScreenStyles";
import { Images, Metrics } from "../Themes";
import LoginActions from "../Redux/LoginRedux";
import {
  Button,
  Text as NBText,
  Contant,
  Form,
  Item,
  Input,
  Label,
  Icon,
  Header,
  Left,
  Body,
  Title,
  Right
} from "native-base";

class LoginScreen extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func,
    fetching: PropTypes.bool,
    attemptLogin: PropTypes.func
  };

  isAttempting = false;
  keyboardDidShowListener = {};
  keyboardDidHideListener = {};

  constructor(props) {
    super(props);
    this.state = {
      username: "reactnative@infinite.red",
      password: "password",
      visibleHeight: Metrics.screenHeight,
      topLogo: { width: Metrics.screenWidth - 40 }
    };
    this.isAttempting = false;
  }

  componentWillReceiveProps(newProps) {
    this.forceUpdate();
    // Did the login attempt complete?
    if (this.isAttempting && !newProps.fetching) {
      this.props.navigation.goBack();
    }
  }

  componentWillMount() {
    // Using keyboardWillShow/Hide looks 1,000 times better, but doesn't work on Android
    // TODO: Revisit this if Android begins to support - https://github.com/facebook/react-native/issues/3468
    this.keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      this.keyboardDidShow
    );
    this.keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      this.keyboardDidHide
    );
  }

  componentWillUnmount() {
    this.keyboardDidShowListener.remove();
    this.keyboardDidHideListener.remove();
  }

  keyboardDidShow = e => {
    // Animation types easeInEaseOut/linear/spring
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    let newSize = Metrics.screenHeight - e.endCoordinates.height;
    this.setState({
      visibleHeight: newSize,
      topLogo: { width: 100, height: 70 }
    });
  };

  keyboardDidHide = e => {
    // Animation types easeInEaseOut/linear/spring
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    this.setState({
      visibleHeight: Metrics.screenHeight,
      topLogo: { width: Metrics.screenWidth - 40 }
    });
  };

  handlePressLogin = () => {
    // const { username, password } = this.state
    // this.isAttempting = true
    // attempt a login - a saga is listening to pick it up from here.
    // this.props.attemptLogin(username, password);
    this.props.navigation.navigate("Home");
  };

  handleChangeUsername = text => {
    this.setState({ username: text });
  };

  handleChangePassword = text => {
    this.setState({ password: text });
  };

  render() {
    const { username, password } = this.state;
    const { fetching } = this.props;
    const editable = !fetching;
    const textInputStyle = editable
      ? Styles.textInput
      : Styles.textInputReadonly;
    return (
      <View style={{ flex: 1 }}>
        <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="ios-close" />
            </Button>
          </Left>
          <Body>
            <Title>Sign In</Title>
          </Body>
          <Right>
            <Icon name="ios-help-circle" />
          </Right>
        </Header>

        <ScrollView
          contentContainerStyle={{ justifyContent: "center" }}
          style={[Styles.container, { height: this.state.visibleHeight }]}
          keyboardShouldPersistTaps="always"
        >
          <Image
            source={Images.logo}
            style={[Styles.topLogo, this.state.topLogo]}
          />
          <View style={Styles.form}>
            <Form>
              <Item stackedLabel>
                <Label>Username</Label>
                <Input
                  ref="username"
                  value={username}
                  editable={editable}
                  keyboardType="default"
                  returnKeyType="next"
                  autoCapitalize="none"
                  autoCorrect={false}
                  onChangeText={this.handleChangeUsername}
                  underlineColorAndroid="transparent"
                  onSubmitEditing={() => this.password._root.focus()}
                />
              </Item>
              <Item stackedLabel>
                <Label>Password</Label>
                <Input
                  ref={ref => (this.password = ref)}
                  value={password}
                  editable={editable}
                  keyboardType="default"
                  returnKeyType="go"
                  autoCapitalize="none"
                  autoCorrect={false}
                  secureTextEntry
                  onChangeText={this.handleChangePassword}
                  underlineColorAndroid="transparent"
                  onSubmitEditing={this.handlePressLogin}
                />
              </Item>
            </Form>
            <View style={[Styles.loginRow]}>
              <Button
                style={{ flex: 1, justifyContent: "center" }}
                full
                onPress={this.handlePressLogin}
              >
                <NBText>Sign In</NBText>
              </Button>
            </View>
            <Text
              style={Styles.forgot}
              onPress={() => this.props.navigation.navigate("Login")}
            >
              Forgot password?
            </Text>
            <Text
              style={Styles.register}
              onPress={() => this.props.navigation.navigate("Login")}
            >
              Don't hava an account?
              <Text style={{ color: "#e67e22" }}>Register</Text>
            </Text>
          </View>
        </ScrollView>

        <View style={Styles.loginOther}>
          <Text style={Styles.signInWith}>Or sign in with</Text>
          <View
            style={{ justifyContent: "space-around", flexDirection: "row" }}
          >
            <GoogleSigninButton
              style={{ width: 48, height: 48 }}
              size={GoogleSigninButton.Size.Icon}
              color={GoogleSigninButton.Color.Dark}
              onPress={this._signIn}
              disabled={this.state.isSigninInProgress}
            />
            <Icon name="logo-facebook" style={{ fontSize: 38 }} />
            <Icon name="logo-linkedin" style={{ fontSize: 38 }} />
            <Icon name="logo-twitter" style={{ fontSize: 38 }} />
          </View>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    fetching: state.login.fetching
  };
};

const mapDispatchToProps = dispatch => {
  return {
    attemptLogin: (username, password) =>
      dispatch(LoginActions.loginRequest(username, password))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginScreen);
