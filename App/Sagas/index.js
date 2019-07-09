import { takeLatest, all } from "redux-saga/effects";
import API from "../Services/Api";
import FixtureAPI from "../Services/FixtureApi";
import DebugConfig from "../Config/DebugConfig";
import ProductApi from "../Services/ProductApi";

/* ------------- Types ------------- */

import { StartupTypes } from "../Redux/StartupRedux";
import { GithubTypes } from "../Redux/GithubRedux";
import { LoginTypes } from "../Redux/LoginRedux";
import { ProductTypes } from "../Redux/ProductRedux";

/* ------------- Sagas ------------- */

import { startup } from "./StartupSagas";
import { login } from "./LoginSagas";
import { getUserAvatar } from "./GithubSagas";
import {
  // homeRequest
  // headFootRequest,
  // productContentRequest,
  // productListRequest,
  queryCateList
  // shopHomeRequest,
  // shopCateProduct
} from "./ProductSagas";

/* ------------- API ------------- */

// The API we use is only used from Sagas, so we create it here and pass along
// to the sagas which need it.
const api = DebugConfig.useFixtures ? FixtureAPI : API.create();
const productApi = ProductApi.create();

/* ------------- Connect Types To Sagas ------------- */

export default function* root() {
  yield all([
    // some sagas only receive an action
    takeLatest(StartupTypes.STARTUP, startup),
    takeLatest(LoginTypes.LOGIN_REQUEST, login),

    // some sagas receive extra parameters in addition to an action
    takeLatest(GithubTypes.USER_REQUEST, getUserAvatar, api)
    // takeLatest(ProductTypes.CATE_LIST_REQUEST, queryCateList, productApi)
  ]);
}
