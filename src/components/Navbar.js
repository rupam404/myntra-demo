import React from "react";
import myntraLogo from "../icon.jpeg";
import shoppingCart from "../shopping-cart-solid.svg";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"


  const Navbar =({term,searchKeyWord})=>{
    const getSearchterm=(e)=>{
         searchKeyWord(e.target.value);
    }
     return(
    <nav className="Navbar container g-0"
    >
      <div className="row g-0">
      <div className="col-2 ">  
      <div className=" icon-holder g-1">
        <img src={myntraLogo} alt="logo" width={60} height={60} />
      </div>
      </div>
      <div className="col-8 g-0  d-flex align-items-center justify-content-center"> 
      <form>

        
        <input placeholder="Search For a Product"  className="form-control" value={term} onChange={getSearchterm}></input>
       
   
      </form>
      </div> 
      <div className="col-2 d-flex align-items-center justify-content-end "> 
      <div className="cart-holder me-1" >
        <img src={shoppingCart} alt="shopping-cart" height={30} width={30} />
        <div className="cart-list-length"></div>
      </div>
      </div > 
      </div>
    </nav>
     )
    }


export default Navbar;
