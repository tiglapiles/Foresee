import { createReducer, createActions } from "reduxsauce";
import Immutable from "seamless-immutable";

const { Types, Creators } = createActions({
  // homeRequest: null
  // headFootRequest: null,
  // productContentRequest: ["id"],
  // productListRequest: ["cid", "page"],
  cateListRequest: ["list"]
  // shopHomeRequest: ["url_name"],
  // shopCateProduct: ["pid", "page"]
});

export const ProductTypes = Types;
export default Creators;

export const INITIAL_STATE = Immutable({
  cate: require("../Fixtures/cate.json")
});

// export const request = (state, action) => {
//   console.log(action);
//   return state.merge([]);
// };
// export const headFootRequest = state => state.merge({ cate: [] });
// export const productContentRequest = state => state.merge({ cate: [] });
// export const productListRequest = state => state.merge({ cate: [] });
export const cateList = (state, { list }) => {
  console.log(list);
  return state.merge({ cate: list });
};
// export const shopHomeRequest = state => state.merge({ cate: [] });
// export const shopCateProduct = state => state.merge({ cate: [] });

export const reducer = createReducer(INITIAL_STATE, {
  // [Types.HOME_REQUEST]: request
  // [Types.HEAD_FOOT_REQUEST]: headFootRequest,
  // [Types.PRODUCT_CONTENT_REQUEST]: productContentRequest,
  // [Types.PRODUCT_LIST_REQUEST]: productListRequest,
  [Types.CATE_LIST_REQUEST]: cateList
  // [Types.SHOP_HOME_REQUEST]: shopHomeRequest,
  // [Types.SHOP_CATE_PRODUCT]: shopCateProduct,
});
