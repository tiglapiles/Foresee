import apisauce from "apisauce";

const create = (baseURL = "http://ok.yjzw.net/api/") => {
  const api = apisauce.create({
    baseURL,
    headers: {
      "Cache-Control": "no-cache"
    },
    timeout: 10000
  });

  const getHome = () => api.get("Home/index.html");
  const getHeadFoot = () => api.get("Home/headfoot.html");
  const getProductContent = id =>
    api.get("Product/ProductContent.html", { id });
  const getProductList = ({ cid, page }) =>
    api.get("Product/ProductList.html", { cid, page });
  const getCateList = () => api.get("Product/CateList.html");
  const getShopHome = url_name => api.get("Entshop/Home.html", { url_name });
  const getShopCateProduct = ({ pid, page }) =>
    api.get("Entshop/CatProduct.html", { pid, page });

  return {
    getHome,
    getHeadFoot,
    getProductContent,
    getProductList,
    getCateList,
    getShopHome,
    getShopCateProduct
  };
};

export default {
  create
};
