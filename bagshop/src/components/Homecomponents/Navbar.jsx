import { IoIosSearch } from "react-icons/io";
import { Link } from "react-router-dom";
import { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full shadow-md bg-white px-4 py-5 md:px-10 flex flex-col md:flex-row md:items-center md:justify-between">
      {/* Logo & Hamburger */}
      <div className="flex justify-between items-center w-full md:w-auto">
        <h1 className="text-orange-950 font-bold italic text-2xl">Baghunt</h1>

        <button
          className="text-3xl md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <IoClose /> : <HiMenuAlt3 />}
        </button>
      </div>

      {/* Search Box */}
      <div className="flex items-center gap-2 border border-black p-2 rounded-xl mt-4 md:mt-0 w-full md:w-1/4">
        <input
          className="w-full outline-none"
          type="text"
          placeholder="Search"
        />
        <IoIosSearch className="text-xl text-gray-600 cursor-pointer" />
      </div>

      {/* Nav Links */}
      <ul
        className={`flex flex-col md:flex-row gap-4 md:gap-7 mt-4 md:mt-0 text-lg font-semibold ${
          isOpen ? "block" : "hidden"
        } md:flex`}
      >
        <Link to="/" className="hover:underline underline-offset-4">Home</Link>
        <Link to="/product" className="hover:underline underline-offset-4">Products</Link>
        <Link to="/cart" className="hover:underline underline-offset-4">Cart</Link>
        <Link to="/order" className="hover:underline underline-offset-4">Order</Link>
        <Link to="/login" className="hover:underline underline-offset-4">Login</Link>
      </ul>
    </div>
  );
}

export default Navbar;
