import React, { useState } from "react";
import "../styles/App.css";
import Navbar from "./Navbar";
import Filters from "./Filters";

import Products from "./Products";
import data from "../data";
import AppContext from "../contexts/AppContext";

const App = () => {
  const [allProducts, setAllProducts] = useState(data);
  const [filteredProducts, setFilteredProducts] = useState(data);
  const [Male, setMale] = useState("M");
  const [Female, setFemale] = useState("F");
  const [Folded, setFolded] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResult, setSearchResult] = useState(data);

  const searchHandler = (searchTerm) => {
    setSearchTerm(searchTerm);
    if (searchTerm !== null) {
      const newList = filteredProducts.filter((product) => {
        return product.name.toLowerCase().includes(searchTerm.toLowerCase());
      });
      setSearchResult(newList);
    }
    else{
      setSearchResult(filteredProducts);
    }
  };

  return (
    <AppContext.Provider
      value={{
        allProducts: allProducts,
        filteredProducts: filteredProducts,
        setFilteredProducts: setFilteredProducts,
        setSearchResult: setSearchResult,
        searchResult: searchResult,
      }}
    >
      <div id="main">
        <Navbar term={searchTerm} searchKeyWord={searchHandler} />
        <div className="section-1">
          <Filters
            setMale={setMale}
            setFemale={setFemale}
            setFolded={setFolded}
            Folded={Folded}
          />
          <div style={{ display: "flex", flexDirection: "column" }}>
            
            <Products Male={Male} Female={Female} Folded={Folded} filteredProducts={searchTerm.length < 1 ? filteredProducts:searchResult } />
          </div>
        </div>
      </div>
    </AppContext.Provider>
  );
};

export default App;
