import { createReducer, createActions } from "reduxsauce";
import Immutable from "seamless-immutable";

const { Types, Creators } = createActions({
  receiveHome: ["payload"],
  receiveHeadFoot: ["payload"],
  receiveProductContent: ["payload"],
  requestProductList: ["cid", "page"],
  receiveProductList: ["list"],
  requestCateList: ["type"],
  receiveCateList: ["cate"],
  receiveShopHome: ["payload"],
  receiveShopCateProduct: ["payload"]
});

export const ProductTypes = Types;
export default Creators;

export const INITIAL_STATE = Immutable({
  cate: [],
  list: []
});

export const homeRequest = (state, action) => {
  return state.merge([]);
};
export const headFootRequest = state => state.merge({ cate: [] });
export const productContentRequest = state => state.merge({ cate: [] });
export const productListRequest = (state, { cid = 1, page = 1 }) =>
  state.merge({ cid, page });
export const receiveProductList = (state, { list }) => state.merge({ list });
export const requestCateList = (state, { type }) => state.merge({ type: type });
export const receiveCateList = (state, { cate }) => state.replace({ cate });
export const shopHomeRequest = state => state.merge({ cate: [] });
export const shopCateProduct = state => state.merge({ cate: [] });

export const reducer = createReducer(INITIAL_STATE, {
  [Types.HOME_REQUEST]: homeRequest,
  [Types.HEAD_FOOT_REQUEST]: headFootRequest,
  [Types.PRODUCT_CONTENT_REQUEST]: productContentRequest,
  [Types.REQUEST_PRODUCT_LIST]: productListRequest,
  [Types.RECEIVE_PRODUCT_LIST]: receiveProductList,
  [Types.REQUEST_CATE_LIST]: requestCateList,
  [Types.RECEIVE_CATE_LIST]: receiveCateList,
  [Types.SHOP_HOME_REQUEST]: shopHomeRequest,
  [Types.SHOP_CATE_PRODUCT]: shopCateProduct
});
