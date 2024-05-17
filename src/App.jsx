import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Pages/Home/Home";
import Header from "./components/Layouts/Header/Header";
import Footer from "./components/Layouts/Footer/Footer";
import Cart from "./components/Cart/Cart";
import "./App.css";

function App() {
  const [cart, setCart] = useState([]);
  const [filter, setFilter] = useState("");

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (product) => {
    setCart(cart.filter((item) => item.id !== product.id));
  };

  return (
    <Router>
      <div className="App">
        <Header cart={cart} />
        <Routes>
          <Route exact path="/">
            <Home addToCart={addToCart} filter={filter} setFilter={setFilter} />
          </Route>
          <Route path="/cart">
            <Cart cart={cart} removeFromCart={removeFromCart} />
          </Route>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
