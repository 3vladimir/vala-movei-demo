"use client";
import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { homePageAddress } from "../../routes/Routes";
import logoWithBrand from "/public/Images/header-images/logo-with-brand.png";
import { FaBars, FaSearch } from "react-icons/fa";
import { MobileMenu, Navbar } from "../";

function App() {
  const [mobileMenu, setMobileMenu] = React.useState(false);
  function handleOpenMobileMenu() {
    setMobileMenu(true);
  }
  function handleCloseMobileMenu() {
    setMobileMenu(false);
  }

  return (
    <>
      <MobileMenu
        mobileMenu={mobileMenu}
        handleCloseMobileMenu={handleCloseMobileMenu}
        listItem={[
          "خانه",
          "سریال",
          "250 فیلم برتر",
          "250 سریال برتر",
          "جدول باکس آفیس",
          "هنرمندان",
          "پشتیبانی",
        ]}
      />

      <header>
        <div className="bg-slate-950 py-4 lg:py-5">
          <nav
            className="w-3/4 sm:w-[450px] md:w-[650px] lg:w-[1050px] mx-auto 
          flex justify-between items-center"
          >
            <div className="basis-3/6 md:basis-2/6 lg:basis-1/6">
              <Link href={homePageAddress}>
                <Image
                  src={logoWithBrand}
                  alt="logoWithBrand"
                  className="w-32 hover:scale-110 hover:brightness-110 transition-all duration-300"
                />
              </Link>
            </div>

            <button
              aria-label="for-mobile"
              className="lg:hidden"
              onClick={handleOpenMobileMenu}
            >
              <FaBars className="text-white text-xl" />
            </button>

            <div
              aria-label="for-desktop"
              className="lg:basis-11/12 lg:flex lg:justify-between
              hidden lg:block"
            >
              <Navbar />
            </div>
          </nav>

          <div
            aria-label="for-mobile"
            className="lg:hidden relative w-3/4 md:w-[650px] sm:w-[450px] mx-auto text-xs mt-6"
          >
            <input
              type="text"
              placeholder="جستجوی فیلم یا سریال..."
              className="focus:outline-none w-full rounded-3xl fontIRANSansWebLight 
              py-2 px-10 bg-slate-100"
            />
            <FaSearch className="absolute text-slate-400 top-3 right-2" />
          </div>
        </div>
      </header>
    </>
  );
}

export default App;
