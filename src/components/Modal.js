import React from "react";
import { FaRegTimesCircle} from "react-icons/fa";



const Modal=(props)=> {
  

  return props.show ? (
  
    <div
      id="product-modal"
      style={{
       
      }}
      
     
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
       <FaRegTimesCircle/>
        </div>
      </div>

      {props.product.otherImages.map((productImage) => {
        return (
          <img
            src={productImage}
            alt="product-img"
            width={100}
            className="m-2"
          />
        );
      })}
      <div  >
        <h1>Size Chart</h1>
        <div style={{ display: "flex" }}>
          {props.product.productSize.split(",").map((size) => {
            return (
              <div className="size-option m-1">
                <button
                className="size-option"           
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
      
    </div>
    
  ) : null;
}

export default Modal;
