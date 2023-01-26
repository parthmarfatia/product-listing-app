import React, { useState, useEffect } from "react";

const Context = React.createContext();

function ContextProvider({ children }) {

  const [data,setData] = useState([])

  useEffect(()=>{
    async function apiCall(){
      let store = await fetch("https://dummyjson.com/products?limit=100")
      let res = await store.json()
      setData(res.products)
    }
    apiCall()
  },[])

  return (
    <Context.Provider
      value={{
        data,
        setData
      }}
    >
      {children}
    </Context.Provider>
  );
}

export { ContextProvider, Context };
