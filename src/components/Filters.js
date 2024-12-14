import React, { useContext, useState } from "react";
import AppContext from "../contexts/AppContext";
import "../styles/App.css";

const Filters=({setFolded,Folded})=> {
  const [flag,setFlag]=useState(true);
  const {setFemale,setMale} = useContext(AppContext);
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
      <section className="py-3">
        <h5>Gender</h5>
        <div>
          <input
            type="radio"
            value="male"
            name="gender"
            id="male"
            className="me-1"
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
            className="me-1"
            onClick={setGenderFemale}
          ></input>
          <label >Female</label>
        </div>
      </section>
     
      <section style={{ width: "100%", whiteSpace: "nowrap" }}>
        <h5>Categories</h5>
        <input type="checkbox" className="me-1" id="folded" name="folded" value="white" onClick={isFolded} />
        <label style={{ width: "100%" }}>
          Folded Sleeve Shirts
        </label>
       
      </section>
    </div>
  );
}

export default Filters;
