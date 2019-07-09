import { StackNavigator } from "react-navigation";

import ProductCategory from "../Containers/ProductCategoryScreen.js";
import ProductList from "../Containers/ProductListScreen.js";
// import ProductDetail from "../Containers/ProductDetail.js";

const NavigationProduct = new StackNavigator(
  {
    ProductCategory: { screen: ProductCategory },
    // ProductDetail: { screen: ProductDetail },
    ProductList: { screen: ProductList }
  },
  {
    headerMode: "none"
    // initialRouteName: "ProductDetail"
  }
);

export default NavigationProduct;
