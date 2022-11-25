import React, { useState, useContext } from "react";
import AppContext from "../contexts/AppContext";
import data from "../data";


const Modal=(props)=> {
  const [selectedSize, setSelectedSize] = useState(null);
//   const { cart, setCart } = useContext(AppContext);
//   const addProductToCart = () => {
//     const newProduct = {
//       product: props.product,
//       size: selectedSize,
//     };
//     setCart([...cart, newProduct]);
//   };
  return props.show ? (
    <div
      id="product-modal"
      style={{
        position: "fixed",
        zIndex: 1000,
        top: "20%",
        left: "30%",
        background: "white",
        padding: 10,
      }}
      key={data.length++}
     
    >
      <div
        id="modal-header"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h1>Product Details</h1>
        <div
         className="Cross-button"
        
          onClick={() => {
            props.onClose();
          }}
        >
        <i class="fa-solid fa-xmark"></i>
        </div>
      </div>

      {props.product.otherImages.map((productImage) => {
        return (
          <img
            src={productImage}
            alt="product-img"
            width={100}
            style={{ marginRight: 20 }}
          />
        );
      })}
      <div  >
        <h1>Size Char</h1>
        <div style={{ display: "flex" }}>
          {props.product.productSize.split(",").map((size) => {
            return (
              <div className="size-option">
                <button
                className="size-option"
                //   onClick={() => {
                //     setSelectedSize(size.trim());
                //   }}
                >
                  {size}
                </button>
              </div>
            );
          })}
        </div>
      </div>
      <div>{props.product.name}</div>
      <div>
        <i>{props.product.description}</i>
      </div>
      <div>Rs. {props.product.finalPrice}</div>
      <div style={{ textDecoration: "line-through" }}>
        {props.product.strickPrice}
      </div>
      <div style={{ color: "red" }}>{props.product.discount}% OFF</div>
      {/* <button onClick={addProductToCart}>Add To Cart</button> */}
    </div>
  ) : null;
}

export default Modal;