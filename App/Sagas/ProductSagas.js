import { put, call } from "redux-saga/effects";
import ProductActions from "../Redux/ProductRedux.js";

// export function* homeRequest(api, action) {
//   const response = yield call(api.getHome);

//   if (response.ok) {
//     console.log(ProductActions);
//     yield put(ProductActions.homeRequest());
//   }
// }

// export function* headFootRequest() {
//   yield put(ProductActions.headFootRequest());
// }

// export function* productContentRequest() {
//   yield put(ProductActions.productContentRequest());
// }

// export function* productListRequest() {
//   yield put(ProductActions.productListRequest());
// }

export function* queryCateList(api, action) {
  const response = yield call(api.getCateList);
  const defaultCate = require("../Fixtures/cate.json");

  if (response.ok) {
    yield put(ProductActions.cateListRequest(response.data.data));
  } else {
    yield put(ProductActions.cateListRequest(defaultCate));
  }
}

// export function* shopHomeRequest() {
//   yield put(ProductActions.shopHomeRequest());
// }

// export function* shopCateProduct() {
//   yield put(ProductActions.shopCateProduct());
// }
