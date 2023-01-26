import React from "react";
import { useContext } from "react";
import { Context } from "../Context";
import Product from "../components/Product";

const HomePage = () => {
  const { data } = useContext(Context);
  console.log(data);
  const displayData = data.map((val) => <Product key={val.id} val={val} />);

  return <div className="home--container">{displayData}</div>;
};

export default HomePage;
