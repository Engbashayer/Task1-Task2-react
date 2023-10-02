// import React from "react";

// const ProductItem = (props) => {
//   const book = props.book;
//   return (
//     <div>
//       <div className="productL">
//         <div className="card">
//           <h2>{book.name}</h2>
//           <h3>{book.price}</h3>
//           <img src={book.image} />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductItem;

import React from "react";

const ProductItem = (props) => {
  return (
    <div>
      <h1>{props.product.name}</h1>
      <img src={props.product.image} />
      <h1>Price: {props.product.price}</h1>
    </div>
  );
};

export default ProductItem;
