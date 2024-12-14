import React, { useContext } from "react";
import { useState } from "react";
import data from "../data";
import AppContext from "../contexts/AppContext";
import Modal from "./Modal";

const Products = ({ Folded, filteredProducts }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const { Male, Female } = useContext(AppContext);
  return (
    
      <div className="row">
      <Modal
        show={showModal}
        product={selectedProduct}
        onClose={() => {
          setShowModal(false);
        }}
      ></Modal>
      {filteredProducts.length === 0 ? (
        <h1 className="text-center">NO ITEM FOUND</h1>
      ) : (
        filteredProducts.map((product) => {
          if (
            (product.gender === Male || product.gender === Female) &&
            (product.folded === Folded || product.folded === "Y")
          )
          
           {
            return (
             
              <div
                className="col-lg-3 col-sm-6 col-12 py-3"
                key={data.length++}
                onClick={() => {
                  setShowModal(true);
                  setSelectedProduct(product);
                }}
              >
                <img src={product.otherImages[0]} width="100%" alt="img" />
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
