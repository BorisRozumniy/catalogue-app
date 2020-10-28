import React from "react";
import { Jumbotron } from "reactstrap";

const Product = () => {
    const discount = false;
    const numberDaysUntilEndDiscount = 4;
    return (
      <Jumbotron>
        <img src="/static/product1.png" alt="product1" className="product__image" />
        <h2>Product Name</h2>
        <p>Product description</p>
        <span>price</span>
        {discount && <span>discount</span>}
        {numberDaysUntilEndDiscount && <span>{numberDaysUntilEndDiscount}</span>}
        <button
          type="button"
          className="product__remove"
          onClick={() => alert("remove")}
          >
          remove
        </button>
        <button
          type="button"
          className="product__edit"
          onClick={() => alert("edit")}
        >
          edit
        </button>
      </Jumbotron>
    );
  }
  
  export default Product;
  