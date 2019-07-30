import { createReducer, createActions } from "reduxsauce";
import Immutable from "seamless-immutable";

const { Types, Creators } = createActions({
  //home
  requestHome: null,
  receiveHome: ["home"],
  // headfoot
  requestHeadFoot: null,
  receiveHeadFoot: ["headfoot"],
  // product content
  requestProductContent: ["id"],
  receiveProductContent: ["detail"],
  // product list
  requestProductList: ["cid", "page"],
  receiveProductList: ["list"],
  // categories list
  requestCateList: ["type"],
  receiveCateList: ["cate"],
  // shop home
  requestShopHome: ["url_name"],
  receiveShopHome: ["shop"],
  // shop product list
  requestShopCateProduct: ["pid", "page"],
  receiveShopCateProduct: ["shopList"],
  // home product
  requestHomeProduct: ["lang"],
  receiveHomeProduct: ["homeProduct"]
});

export const ProductTypes = Types;
export default Creators;

export const INITIAL_STATE = Immutable({
  cate: [],
  list: [],
  home: {},
  detail: {},
  homeProduct: []
});

//home
export const homeRequest = state => state.merge();
export const receiveHome = (state, { home }) => state.merge({ home });
// headfoot
export const headFootRequest = state => state.merge({ cate: [] });
export const receiveHeadFoot = (state, { headfoot }) =>
  state.merge({ headfoot });
// product content
export const productContentRequest = (state, { id }) => state.merge({ id });
export const receiveProductContent = (state, { detail }) =>
  state.merge({ detail });
// product list
export const productListRequest = (state, { cid = 1, page = 1 }) =>
  state.merge({ cid, page });
export const receiveProductList = (state, { list }) => state.merge({ list });
// categories list
export const requestCateList = (state, { type }) => state.merge({ type });
export const receiveCateList = (state, { cate }) => state.replace({ cate });
// shop home
export const shopHomeRequest = (state, { url_name }) =>
  state.merge({ url_name });
export const receiveShopHome = (state, { shop }) => state.merge({ shop });
// shop home product list
export const shopCateProductRequest = (state, { pid, page }) =>
  state.merge({ pid, page });
export const receiveShopCateProduct = (state, { shopList }) =>
  state.merge({ shopList });
// home product
export const requestHomeProduct = (state, { lang }) => state.merge({ lang });
export const receiveHomeProduct = (state, { homeProduct }) =>
  state.merge({ homeProduct });

// reducer
export const reducer = createReducer(INITIAL_STATE, {
  // home
  [Types.REQUEST_HOME]: homeRequest,
  [Types.RECEIVE_HOME]: receiveHome,
  //head_foot
  [Types.REQUEST_HEAD_FOOT]: headFootRequest,
  [Types.RECEIVE_HEAD_FOOT]: receiveHeadFoot,
  //product_content
  [Types.REQUEST_PRODUCT_CONTENT]: productContentRequest,
  [Types.RECEIVE_PRODUCT_CONTENT]: receiveProductContent,
  // product_list
  [Types.REQUEST_PRODUCT_LIST]: productListRequest,
  [Types.RECEIVE_PRODUCT_LIST]: receiveProductList,
  // categories_list
  [Types.REQUEST_CATE_LIST]: requestCateList,
  [Types.RECEIVE_CATE_LIST]: receiveCateList,
  // shop_home
  [Types.REQUEST_SHOP_HOME]: shopHomeRequest,
  [Types.RECEIVE_SHOP_HOME]: receiveShopHome,
  // shop_home_product_list
  [Types.REQUEST_SHOP_CATE_PRODUCT]: shopCateProductRequest,
  [Types.RECEIVE_SHOP_CATE_PRODUCT]: receiveShopCateProduct,
  // home product
  [Types.REQUEST_HOME_PRODUCT]: requestHomeProduct,
  [Types.RECEIVE_HOME_PRODUCT]: receiveHomeProduct
});
