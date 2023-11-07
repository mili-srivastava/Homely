"use client";

import Image from "next/image";
// next imports
import Link from "next/link";

// react imports
import { useState } from "react";

// imports icons
import { HiMenuAlt4 } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";
import { FiMoon, FiSun } from "react-icons/fi";

import { useTheme } from "next-themes";

const Navbar = () => {
  // menu state
  const [menu, setMenu] = useState(false);
  const openMenu = () => {
    setMenu(true);
  };
  const closeMenu = () => {
    setMenu(false);
  };

  // themes state
  const { theme, setTheme } = useTheme();

  return (
    <nav className="bg-white sticky top-0 dark:bg-black dark:border-b-2 dark:border-white z-50">
      {/* smaller screen */}
      <div className="p-3 flex justify-between items-center shadow lg:hidden sticky top-0">
        <Link href="/">
          <Image
            src="/images/logo.png"
            alt="logo"
            height={500}
            width={500}
            className="w-28 h-fit"
          />
        </Link>
        <div className="flex gap-5 items-center">
          <FiSun
            className="hidden text-3xl cursor-pointer text-primary dark:flex"
            onClick={() => setTheme("light")}
          />
          <FiMoon
            className="text-3xl cursor-pointer text-primary dark:hidden"
            onClick={() => setTheme("dark")}
          />
          <HiMenuAlt4
            onClick={openMenu}
            className="text-4xl cursor-pointer text-primary"
          />
        </div>

        {/* mobile menu */}
        <div
          className={
            menu ? `absolute h-screen top-0 left-0 flex w-full z-50` : `hidden`
          }
        >
          <div className="w-1/3 bg-blur" onClick={closeMenu} />
          <div className="w-2/3 bg-primary text-white font-bold">
            <RxCross2
              onClick={closeMenu}
              className="float-right m-3 text-4xl cursor-pointer"
            />
            <ul className="flex flex-col my-28 space-y-8 text-center text-xl">
              <li>
                <Link href="/services" onClick={closeMenu}>
                  Services
                </Link>
              </li>
              <li>
                <Link href="/about" onClick={closeMenu}>
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" onClick={closeMenu}>
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/login" onClick={closeMenu}>
                  <button className="bg-white rounded-xl text-primary px-7 py-2 mt-7">
                    Login
                  </button>
                </Link>
              </li>
              <li>
                <Link href="/signup" onClick={closeMenu}>
                  <button className="rounded-xl border-2 px-7 py-2">
                    Signup
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* larger screen */}
      <div className="hidden lg:flex p-3 justify-between items-center shadow sticky top-0">
        <Link href="/">
          <Image
            src="/images/logo.png"
            alt="logo"
            height={500}
            width={500}
            className="w-36 h-fit"
          />
        </Link>

        <div className="">
          <ul className="flex gap-10 text-xl">
            <li>
              <Link href="/services">Services</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
            <li>
              <Link href="/categories">Categories</Link>
            </li>
            <div className="flex gap-2 justify-center items-center">

            <li>
              <Link href="/login" onClick={closeMenu}>
                <button className="bg-primary text-white px-5 py-1 rounded-xl hover:bg-secondary ">
                  Login
                </button>
              </Link>
            </li>
            <li>
              <Link href="/signup" onClick={closeMenu}>
                <button className="rounded-xl bg-secondary px-5 py-1 text-white hover:bg-primary ">
                  Signup
                </button>
              </Link>
            </li>
            </div>
          </ul>
        </div>
        <div className="flex gap-5 items-center">
          <FiSun
            className="hidden text-3xl cursor-pointer text-primary dark:flex"
            onClick={() => setTheme("light")}
          />
          <FiMoon
            className="text-3xl cursor-pointer text-primary dark:hidden"
            onClick={() => setTheme("dark")}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
