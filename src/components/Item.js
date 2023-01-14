// import React from "react";

// function Item({ name, category }) {
//   return (
//     <li className="in-cart">
//       {/* the item is in the cart */}
//       <li className="">
//         {/* the item is NOT in the cart */}
//       </li>
//       <span>{name}</span>
//       <span className="category">{category}</span>
//       <button className="add">Add to Cart</button>
//     </li>
//   );
// }

// export default Item;

import React, { useState } from "react";

function Item({ name, category }) {
  const [addCart, setClassList] = useState(false);

  function addToCart() {
    setClassList(!addCart);

  }
      

  return (
    <li className={addCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={addToCart}>Add to Cart</button>
    </li>
  );
}

export default Item;