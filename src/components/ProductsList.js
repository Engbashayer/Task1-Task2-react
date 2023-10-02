import products from "../products";
import ProductsItem from "./ProductItem";
// const ProductsList = products.map((book) => {
//   return <ProductItem book={book} />;
// }); هذا غلط ما ينكتب جذي :(
//  هذا المفروض يكون كمبوننت داخله كومبوننتات من خلال ماب

import React from "react";

const ProductsList = () => {
  const productList = products.map((product) => {
    return <ProductsItem product={product} />;
  });
  return <div>{productList}</div>;
};

export { ProductsList };
