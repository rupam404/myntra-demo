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
