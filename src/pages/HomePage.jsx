import React from "react";
import { useContext } from "react";
import { Context } from "../Context";
import Product from "../components/Product";
import FilterOptions from "../components/FilterOptions";

const HomePage = () => {
  const { filteredData } = useContext(Context);
  console.log(filteredData);
  const displayData = filteredData.map((val) => (
    <Product key={val.id} val={val} />
  ));

  return (
    <div className="home--container">
      <FilterOptions />
      <div className="display--container">{displayData}</div>
    </div>
  );
};

export default HomePage;
