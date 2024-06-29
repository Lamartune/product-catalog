import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faHeart,
  faSearch
} from "@fortawesome/free-solid-svg-icons";

interface LayoutProps {
  children: React.ReactNode;
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
}

const Layout: React.FC<LayoutProps> = ({
  children,
  searchTerm,
  setSearchTerm
}) => {
  return (
    <div className="flex flex-col min-h-screen">
      <nav className="bg-white shadow-md py-4 fixed top-0 w-full z-50">
        <div className="container mx-auto flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            onClick={() => setSearchTerm("")}
            className="text-2xl font-bold"
          >
            <h1>ICONIC</h1>
          </Link>

          {/* Page Links */}
          <div className="flex space-x-4 ">
            <Link to="/" className="text-gray-500 hover:text-black">
              Home
            </Link>
            <Link to="/products" className="text-gray-500 hover:text-black">
              Products
            </Link>
            <Link to="/about" className="text-gray-500 hover:text-black">
              About
            </Link>
            <Link to="/contact" className="text-gray-500 hover:text-black">
              Contact
            </Link>
          </div>

          {/* Search Bar */}
          <div className="relative">
            <input
              type="text"
              className="border rounded-full py-2 px-4 w-64"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className="absolute right-2 top-2 text-gray-600">
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </div>

          {/* Icons */}
          <div className="flex space-x-4">
            <Link to="/cart" className="text-gray-700 hover:text-gray-900">
              <FontAwesomeIcon icon={faShoppingCart} className="text-2xl" />
            </Link>
            <Link to="/favorites" className="text-gray-700 hover:text-gray-900">
              <FontAwesomeIcon icon={faHeart} className="text-2xl" />
            </Link>
          </div>
        </div>
      </nav>

      <section className="flex-grow container mx-auto p-4 mt-20">
        {children}
      </section>

      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto text-center">
          {/* <div className="flex justify-center space-x-4 mb-4">
            <Link to="/" className="hover:underline">
              Home
            </Link>
            <Link to="/products" className="hover:underline">
              Products
            </Link>
            <Link to="/about" className="hover:underline">
              About
            </Link>
            <Link to="/contact" className="hover:underline">
              Contact
            </Link>
          </div> */}
          <h2>ICONIC</h2>
          <p>
            &copy; {new Date().getFullYear()} Your Company. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
