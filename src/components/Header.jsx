/* eslint-disable @next/next/no-img-element */

import React from "react";
import { FaSearch } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { IoIosHeartEmpty } from "react-icons/io";
import Link from "next/link";

const Header = () => {
  return (
    <header className="w-full border-b">
      <div className="bg-[#FBEBB5] w-full flex flex-col md:flex-row items-center justify-between p-5">

        {/* Navigation Links */}
        <nav className="flex items-center justify-center gap-6 text-[#737373] font-bold text-sm">
          <Link href="/">
            <p className="hover:text-gray-900 transition">Home</p>
          </Link>
          <Link href="/shop">
            <p className="hover:text-gray-900 transition">Shop</p>
          </Link>
          <Link href="/about">
            <p className="hover:text-gray-900 transition">About</p>
          </Link>
          <Link href="/blog">
            <p className="hover:text-gray-900 transition">Blog</p>
          </Link>
          <Link href="/contact">
            <p className="hover:text-gray-900 transition">Contact</p>
          </Link>
        </nav>

        {/* Action Icons */}
        <div className="flex items-center space-x-4 text-gray-700 text-lg cursor-pointer">
          <FaSearch className="hover:text-blue-900 transition" />
          <IoCartOutline className="hover:text-blue-900 transition" />
          <IoIosHeartEmpty className="hover:text-blue-900 transition" />
        </div>
      </div>
    </header>
  );
};

export default Header;
