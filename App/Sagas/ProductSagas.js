import { put, call } from "redux-saga/effects";
import ProductActions from "../Redux/ProductRedux.js";

export function* queryHome(api, action) {
  const response = yield call(api.getHome);

  if (response.ok) {
    yield put(ProductActions.receiveHome(response.data.data));
  }
}

export function* queryHeadFoot() {
  const response = yield call(api.getHeadFoot);

  if (response.ok) {
    yield put(ProductActions.receiveHeadFoot(response.data.data));
  }
}

export function* queryProductContent() {
  const response = yield call(api.getProductContent);
  if (response.ok) {
    yield put(ProductActions.receiveProductContent(response.data.data));
  }
}

export function* queryProductList(api, { cid = 1, page = 1 }) {
  const response = yield call(api.getProductList, { cid, page });
  const data = response ? response.data.data.data : [];
  if (response.ok) {
    yield put(ProductActions.receiveProductList(data));
  }
}

export function* queryCateList(api, action) {
  const response = yield call(api.getCateList);
  const defaultCate = require("../Fixtures/cate.json");

  if (response.ok) {
    yield put(ProductActions.receiveCateList(response.data.data));
  } else {
    yield put(ProductActions.receiveCateList(defaultCate));
  }
}

export function* queryShopHome() {
  const response = yield call(api.getShopHome);
  if (response.ok) {
    yield put(ProductActions.receiveShopHome(response.data.data));
  }
}

export function* queryShopCateProduct() {
  const response = yield call(api.getShopCateProduct);
  if (response.ok) {
    yield put(ProductActions.receiveShopCateProduct(response.data.data));
  }
}
