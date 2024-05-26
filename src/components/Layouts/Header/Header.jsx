import React from "react";
import { Link } from "react-router-dom";
import cartIcon from '../../../assets/shopping-cart.png';

export const Header = ({ cart }) => {
  return (
    <header className="bg-gray-800 text-white py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <h1 className="text-2xl font-semibold">My Shop</h1>
        <nav className="flex items-center">
          <Link to="/" className="mr-4">Home</Link>
          <Link to="/cart" className="relative flex items-center">
            <img src={cartIcon} alt="Cart" className="w-6 h-6"/>
            <span className="ml-2">{cart.length}</span>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
