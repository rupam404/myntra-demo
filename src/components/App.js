import React, { useState } from "react";
import "../styles/App.css";
import Navbar from "./Navbar";
import Filters from "./Filters";

import Products from "./Products";
import data from "../data";
import AppContext from "../contexts/AppContext";

const App = () => {
  const [filteredProducts] = useState(data);
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
    } else {
      setSearchResult(filteredProducts);
    }
  };

  return (
    <AppContext.Provider
      value={{
       
        setFemale: setFemale,
        setMale: setMale,
        Male: Male,
        Female: Female,
      }}
    >
      <div id="main">
        <Navbar term={searchTerm} searchKeyWord={searchHandler} />
        <div className="section-1">
          <Filters setFolded={setFolded} Folded={Folded} />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <Products
              Folded={Folded}
              filteredProducts={
                searchTerm.length < 1 ? filteredProducts : searchResult
              }
            />
          </div>
        </div>
      </div>
    </AppContext.Provider>
  );
};

export default App;
