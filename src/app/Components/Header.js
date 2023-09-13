"use client"
import React, { useState } from 'react'; 
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {

  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  }

  return (
    <>
      <nav className="bg-white fixed w-full z-40 top-0 left-0 border-b backdrop-blur bg-white/70 border-gray-200">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
          <a href="/" className="flex items-center">
            <Image src="/images/Mega-sale-hub-logo.png" width={200} height={150} className="h-16 w-auto mr-3" alt="Mega sale hub logo" />
          </a>
          <button data-collapse-toggle="navbar-default" type="button" onClick={() => setIsOpen(!isOpen)} className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-default" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
          <div className={`${isOpen ? "block" : "hidden"} w-full md:block ease-in-out duration-300 md:w-auto`} id="navbar-default">
            <ul className="font-medium text-xl flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0">
              <li>
                <Link href="/" onClick={closeMenu} className="block py-2 pl-3 pr-4 text-[#232735] rounded md:hover:bg-transparent md:border-0 md:hover:text-[#e4a22f] md:p-0" aria-current="page">Home</Link>
              </li>
              <li>
                <Link href="/shop" onClick={closeMenu} className="block py-2 pl-3 pr-4 text-[#232735] rounded md:hover:bg-transparent md:border-0 md:hover:text-[#e4a22f] md:p-0">Shop</Link>
              </li>
              <li>
                <Link href="/electronics" onClick={closeMenu} className="block py-2 pl-3 pr-4 text-[#232735] rounded md:hover:bg-transparent md:border-0 md:hover:text-[#e4a22f] md:p-0">Electronics</Link>
              </li>
              <li>
                <Link href="/men" onClick={closeMenu} className="block py-2 pl-3 pr-4 text-[#232735] rounded md:hover:bg-transparent md:border-0 md:hover:text-[#e4a22f] md:p-0">Men</Link>
              </li>
              <li>
                <Link href="/women" onClick={closeMenu} className="block py-2 pl-3 pr-4 text-[#232735] rounded md:hover:bg-transparent md:border-0 md:hover:text-[#e4a22f] md:p-0">Women</Link>
              </li>
              <li>
                <Link href="/others" onClick={closeMenu} className="block py-2 pl-3 pr-4 text-[#232735] rounded md:hover:bg-transparent md:border-0 md:hover:text-[#e4a22f] md:p-0">Others</Link>
              </li>
              {/* <li>
                <Link href="#" className="block py-2 pl-3 pr-4 text-[#232735] rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">Blog</Link>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>


    </>
  )
}

export default Header
