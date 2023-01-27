import React, { useState, useEffect } from "react";

const Context = React.createContext();

function ContextProvider({ children }) {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  const [brandNames, setBrandNames] = useState([]);
  const [categoryNames, setCategoryNames] = useState([]);

  const [category, setCategory] = useState("");
  const [brand, setBrand] = useState("");
  const [sortData, setSortData] = useState("");

  useEffect(() => {
    async function apiCall() {
      let store = await fetch("https://dummyjson.com/products?limit=100");
      let res = await store.json();
      setData(res.products);
      setFilteredData(res.products);
      getBrandNames(res.products);
      getCategoryNames(res.products);
    }
    apiCall();
  }, []);

  useEffect(() => {
    const categoryFilter = data.filter(
      (val) => val.category.toLowerCase() === category || category === ""
    );
    const brandFilter = categoryFilter.filter(
      (val) => val.brand.toLowerCase() === brand || brand === ""
    );
    setFilteredData(brandFilter);
  }, [category, brand]);

  useEffect(() => {
    setFilteredData(
      [...filteredData].sort((a, b) => {
        switch (sortData) {
          case "rating-asc":
            return a.rating - b.rating;
          case "rating-desc":
            return b.rating - a.rating;
          case "discount-asc":
            return a.discountPercentage - b.discountPercentage;
          case "discount-desc":
            return b.discountPercentage - a.discountPercentage;
          case "price-asc":
            return a.price - b.price;
          case "price-desc":
            return b.price - a.price;
        }
      })
    );
  }, [sortData]);

  const getBrandNames = (data) => {
    let obj = {};
    let arr = [];
    data.map((val) => {
      obj[val.brand.toLowerCase()] = obj[val.brand.toLowerCase()] + 1 || 1;
      if (obj[val.brand.toLowerCase()] === 1) arr.push(val.brand.toLowerCase());
    });
    setBrandNames(arr);
  };

  const getCategoryNames = (data) => {
    let obj = {};
    let arr = [];
    data.map((val) => {
      obj[val.category.toLowerCase()] =
        obj[val.category.toLowerCase()] + 1 || 1;
      if (obj[val.category.toLowerCase()] === 1)
        arr.push(val.category.toLowerCase());
    });
    setCategoryNames(arr);
  };

  return (
    <Context.Provider
      value={{
        filteredData,
        brandNames,
        categoryNames,
        category,
        brand,
        sortData,
        setSortData,
        setCategory,
        setBrand,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export { ContextProvider, Context };
