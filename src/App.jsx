import React from "react";
import Navigation from "./components/Navigation";
import {Route, Routes} from "react-router-dom"
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";

function App() {

  return (
    <>
      <Navigation />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/cart' element={<CartPage />} />
      </Routes>
    </>
  )
}

export default App;
