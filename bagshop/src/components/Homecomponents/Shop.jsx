import React from "react";

function Shop() {
  return (
    <div className="flex flex-col md:flex-row bg-pink-950 rounded-lg overflow-hidden m-auto my-10 max-w-5xl shadow-lg ">
      <img
        className="w-full md:w-1/2 object-cover h-64 md:h-auto"
        src="https://images.unsplash.com/photo-1588122698107-836d3c39704c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fGJhZ3N8ZW58MHx8MHx8fDA%3D"
        alt="Shop bags"
      />
      <div className="flex flex-col justify-center items-start p-6 gap-4 md:w-1/2">
        <h1 className="text-2xl md:text-4xl text-white font-semibold">
          Shop Our Collection
        </h1>
        <button className="bg-pink-200 rounded px-4 py-2 cursor-pointer hover:bg-pink-900 hover:text-white transition duration-300">
          <a href="/product">Shop Now</a>
        </button>
      </div>
    </div>
  );
}

export default Shop;
