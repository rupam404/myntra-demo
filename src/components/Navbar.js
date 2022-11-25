import React, { useState } from "react";
import myntraLogo from "../icon.jpeg";
import shoppingCart from "../shopping-cart-solid.svg";



  const Navbar =({term,searchKeyWord})=>{
   

    const getSearchterm=(e)=>{
         searchKeyWord(e.target.value);
    }
     return(
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div className=" icon-holder">
        <img src={myntraLogo} alt="logo" width={70} height={70} />
      </div>
      <form>
        
        <input placeholder="Search For a Product" value={term} onChange={getSearchterm}></input>
       
   
      </form>
      <div className="cart-holder" style={{ position: "relative",marginRight:25}}>
        <img src={shoppingCart} alt="shopping-cart" height={30} width={30} />
        <div className="cart-list-length"></div>
      </div>
    </nav>
     )
    }


export default Navbar;
