import React from "react";

function Sorting() {
  return (
    <div
      className="sort-holder"
      style={{
        display: "flex",
        justifyContent: "flex-end",
        height: "100%",
        width: "100%",
      }}
    >
      <select placeholder="Sort By">
        <option>What's New</option>
        <option value="finalPrice">Prices (Low to High)</option>
        <option value="discounts">Discounts (Better Discounts)</option>
      </select>
    </div>
  );
}

export default Sorting;