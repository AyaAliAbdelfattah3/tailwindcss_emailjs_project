import React, { useState } from "react";
import { logo } from "../assets";
import { CiSearch, CiWallet } from "react-icons/ci";
import { FaBarsStaggered } from "react-icons/fa6";
import { FaRegWindowClose } from "react-icons/fa";

const NavBar = () => {
  const Links = [
    { id: 1, page: "Home", path: "/home" },
    { id: 2, page: "Explore", path: "/explore" },
    { id: 3, page: "Activity", path: "/activity" },
    { id: 4, page: "Community", path: "/community" },
    { id: 5, page: "Pages", path: "/pages" },
    { id: 6, page: "Contact", path: "/contact" },
  ];

  const [isOpenMenu, setIsOpenMenu] = useState(false);
  return (
    <div className="bg-[#090E34] text-white">
      <div className="container mx-auto flex justify-between py-4 px-4">
        <div className="flex items-center gap-2">
          <img
            src={logo}
            alt=""
            className="w-10  rounded-full cursor-pointer"
          />
          <h1 className="font-bold">Aya</h1>
        </div>

        {/* second div */}
        <ul className="hidden lg:flex items-center gap-5 cursor-pointer">
          {Links.map((link) => (
            <li key={link.id} className="relative">
              <div className="flex items-center gap-2 cursor-pointer">
                <a href={link.path} className="hover:text-indigo-500">
                  {link.page}
                </a>
              </div>
            </li>
          ))}
        </ul>
        {/* third div */}
        <div className="hidden lg:flex items-center gap-3">
          <CiSearch className="cursor-pointer " />
          <button className="flex items-center gap-1 bg-transparent text-sm border border-indigo-800 text-white px-4 py-1 rounded-2xl">
            wallet connect
            <CiWallet className="text-[#00FFFF]" />
          </button>
        </div>

        {/* convert icons */}
        <div className="lg:hidden">
          {!isOpenMenu ? (
            <FaBarsStaggered
              className="text-2xl cursor-pointer"
              onClick={() => setIsOpenMenu(true)}
            />
          ) : (
            <FaRegWindowClose
              className="text-2xl cursor-pointer"
              onClick={() => setIsOpenMenu(false)}
            />
          )}
        </div>
      </div>
      {isOpenMenu && (
        <div className="lg:hidden flex flex-col items-center bg-gray-800 py-4">
          <ul className="flex flex-col py-4">
            {Links.map((link) => (
              <li key={link.id} className="text-sm text-center">
                <a href={link.path} className="hover:text-indigo-500">
                  {link.page}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex flex-col gap-4 mt-4">
            <CiSearch className="cursor-pointer" />
            <button className="flex items-center gap-1 bg-transparent text-sm border border-indigo-600 text-white px-4 py-1 rounded-2xl">
              Wallet Connect
              <CiWallet className="text-[#00FFFF]" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;
