import React from "react";
import { Context } from "../Context";
import { useContext } from "react";

const FilterOptions = () => {
  const {
    categoryNames,
    brandNames,
    category,
    brand,
    setCategory,
    setBrand,
    setSortData,
  } = useContext(Context);

  return (
    <div className="filterOptions--container">
      <select
        onChange={(e) => {
          setBrand(e.target.value);
          setCategory("");
        }}
        value={brand}
      >
        <option value="">Select Brand</option>
        {brandNames.map((val, i) => (
          <option key={i} value={val}>
            {val}
          </option>
        ))}
      </select>
      <select
        onChange={(e) => {
          setCategory(e.target.value);
          setBrand("");
        }}
        value={category}
      >
        <option value="">Select Category</option>
        {categoryNames.map((val, i) => (
          <option key={i} value={val}>
            {val}
          </option>
        ))}
      </select>
      <select onChange={(e) => setSortData(e.target.value)} value="">
        <option value="">Ratings</option>
        <option value="rating-asc">Low to High</option>
        <option value="rating-desc">High to Low</option>
      </select>
      <select onChange={(e) => setSortData(e.target.value)} value="">
        <option value="">Discount</option>
        <option value="discount-asc">Low to High</option>
        <option value="discount-desc">High to Low</option>
      </select>
      <select onChange={(e) => setSortData(e.target.value)} value="">
        <option value="">Price</option>
        <option value="price-asc">Low to High</option>
        <option value="price-desc">High to Low</option>
      </select>
    </div>
  );
};

export default FilterOptions;
