import React, { useContext } from "react";
import { useState } from "react";
import data from "../data";
import AppContext from "../contexts/AppContext";
import Modal from "./Modal";

const Products = ({ Male, Female, Folded, filteredProducts }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct,setSelectedProduct]=useState(null);
  return (
    <div 
      style={{
        display: "flex",
        flexWrap: "wrap",
        marginTop: 20,
        marginLeft: 20,
      }}
    >
       <Modal show={showModal} product={selectedProduct} onClose={()=>{setShowModal(false);}}></Modal>
      {filteredProducts.length === 0 ? (
        <h1>NO ITEM FOUND</h1>
      ) : (
        filteredProducts.map((product) => {
          if (
            (product.gender === Male || product.gender === Female) &&
            (product.folded === Folded || product.folded === "Y")
          ) {
            return (
              
              <div
       
                style={{ marginRight: 17, marginBottom: 10 }}
                key={data.length++}
                onClick={() => {
                  setShowModal(true);
                  setSelectedProduct(product)
                }}
              >
                
                <img src={product.otherImages[0]} width="200px" />
                <div>{product.name}</div>
                <div>{product.description}</div>
                <div>{product.finalPrice}</div>
                <div style={{ textDecoration: "line-through", color: "red" }}>
                  {product.strickPrice}
                </div>
                <div>{product.discount}% OFF</div>
              </div>
            );
          }
        })
      )}
    </div>
  );
};

export default Products;
