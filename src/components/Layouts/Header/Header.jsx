import React from "react";
import { Link } from "react-router-dom";

export const Header = ({ cart }) => {
  return (
    <header className="bg-gray-800 text-white py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <h1 className="text-2xl font-semibold">Mi Tienda</h1>
        <nav>
          <Link to="/" className="mr-4">Home</Link>
          <Link to="/cart">Cart ({cart.length})</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
