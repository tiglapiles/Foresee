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
  queryHome,
  queryHeadFoot,
  queryProductContent,
  queryProductList,
  queryCateList,
  queryShopHome,
  queryShopCateProduct
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
    takeLatest(GithubTypes.USER_REQUEST, getUserAvatar, api),
    // ok.yjzw api
    takeLatest(ProductTypes.REQUEST_HOME, queryHome, productApi),
    takeLatest(ProductTypes.REQUEST_HEAD_FOOT, queryHeadFoot, productApi),
    takeLatest(
      ProductTypes.REQUEST_PRODUCT_CONTENT,
      queryProductContent,
      productApi
    ),
    takeLatest(ProductTypes.REQUEST_PRODUCT_LIST, queryProductList, productApi),
    takeLatest(ProductTypes.REQUEST_CATE_LIST, queryCateList, productApi),
    takeLatest(ProductTypes.REQUEST_SHOP_HOME, queryShopHome, productApi),
    takeLatest(
      ProductTypes.REQUEST_SHOP_CATE_PRODUCT,
      queryShopCateProduct,
      productApi
    )
  ]);
}
