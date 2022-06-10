import React, { useState } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

function Navbar() {
  const [nav, setNav] = useState(false);

  const handleNav = () => setNav(!nav);

  return (
    <div className="w-screen h-[80px] z-10 bg-zinc-200 fixed drop-shadow-lg">
      <div className="px-2 flex justify-between items-center w-full h-full">
        <div className="flex items-center">
          <h1 className="text-3xl font-bold mr-4 sm:text-4xl">Brand.</h1>
          <ul className="hidden md:flex">
            <li>Home</li>
            <li>About</li>
            <li>Support</li>
            <li>Platforms</li>
            <li>Pricing</li>
          </ul>
        </div>
        <div className="hidden md:flex pr-4">
          <button className="bg-transparent text-black border-none mr-4">
            Sing In
          </button>
          <button className="px-8 py-3">Sing Up</button>
        </div>
        <div className="md:hidden cursor-pointer" onClick={handleNav}>
          {!nav ? <MenuIcon className="w-5" /> : <XIcon className="w-5" />}
        </div>
      </div>
      {nav && (
        <ul className="md:hidden bg-zinc-200 aboslute px-8 pb-2 w-full">
          <li className="border-b-2 border-zinc-300 w-full">Home</li>
          <li className="border-b-2 border-zinc-300 w-full">About</li>
          <li className="border-b-2 border-zinc-300 w-full">Support</li>
          <li className="border-b-2 border-zinc-300 w-full">Platforms</li>
          <li className="border-b-2 border-zinc-300 w-full">Pricing</li>
          <div className="flex flex-col my-4">
            <button className="bg-transparent text-indigo-600 px-8 py-3 mb-4">
              Sing In
            </button>
            <button className="px-8 py-3">Sing Up</button>
          </div>
        </ul>
      )}
    </div>
  );
}

export default Navbar;
