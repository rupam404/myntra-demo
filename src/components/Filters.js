import React, { useState } from "react";
import "../styles/App.css";

const Filters=({setMale,setFemale,setFolded,Folded})=> {
  const [flag,setFlag]=useState(true);
  const setGenderMale = () => {
    setFemale("M");
    setMale("M");
   
  };
  const setGenderFemale = () => {
    setMale("F");
    setFemale("F");
  
  };
  const isFolded=()=>{  
     if(flag){
     setFolded("Y");
     setFlag(!flag);
     }
     else{
     setFolded("");  
     setFlag(!flag)
     } 
        
  }
  return (
    <div className="filter-holder" >
      <section>
        <h5>Gender</h5>
        <div>
          <input
            type="radio"
            value="male"
            name="gender"
            id="male"
            onClick={setGenderMale}
          ></input>
          <label>Male</label>
        </div>
        <div>
          <input
            type="radio"
            value="female"
            name="gender"
            id="female"
            onClick={setGenderFemale}
          ></input>
          <label >Female</label>
        </div>
      </section>
      <section>
        <h5>Color</h5>
        <input type="checkbox" id="color" name="color" value="white" />
        <label > White</label>
      </section>
      <section style={{ width: "100%", whiteSpace: "nowrap" }}>
        <h5>Categories</h5>
        <input type="checkbox" id="folded" name="folded" value="white" onClick={isFolded} />
        <label style={{ width: "100%" }}>
          Folded Sleeve Shirts
        </label>
       
      </section>
    </div>
  );
}

export default Filters;
