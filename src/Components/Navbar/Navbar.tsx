"use client";
import * as React from "react";
import Image from "next/image";
import tombRaiderImage from "/public/Images/header-images/tomb-raider-image.png";
import lastWitchHunterImage from "/public/Images/header-images/last-witch-hunter-image.png";
import jonnyDeppImage from "/public/Images/header-images/jonny-depp-image.png";
import avatar from "/public/Images/header-images/avatar.jpg";
import { DropdownMenu } from "../";
import { RiMovie2Line, RiMovieLine } from "react-icons/ri";
import { GoChevronDown } from "react-icons/go";
import { BiMoviePlay } from "react-icons/bi";
import { FaMasksTheater } from "react-icons/fa6";
import { MdOutlineSupportAgent } from "react-icons/md";
import { HiOutlineLightBulb } from "react-icons/hi";
import { IoIosNotifications } from "react-icons/io";

function App() {
  const [filmDropDownMenu, setFilmDropDownMenu] = React.useState(false);
  function handleOpenFilmDropDownMenu() {
    setFilmDropDownMenu(true);
    document.getElementById("wholeContainer")?.classList.add("blur-sm");
  }
  function handleCloseFilmDropDownMenu() {
    setFilmDropDownMenu(false);
    document.getElementById("wholeContainer")?.classList.remove("blur-sm");
  }

  const [serialDropDownMenu, setSerialDropDownMenu] = React.useState(false);
  function handleOpenSerialDropDownMenu() {
    setSerialDropDownMenu(true);
    document.getElementById("wholeContainer")?.classList.add("blur-sm");
  }
  function handleCloseSerialDropDownMenu() {
    setSerialDropDownMenu(false);
    document.getElementById("wholeContainer")?.classList.remove("blur-sm");
  }

  const [artistsDropDownMenu, setArtistsDropDownMenu] = React.useState(false);
  function handleOpenArtistsDropDownMenu() {
    setArtistsDropDownMenu(true);
    document.getElementById("wholeContainer")?.classList.add("blur-sm");
  }
  function handleCloseArtistsDropDownMenu() {
    setArtistsDropDownMenu(false);
    document.getElementById("wholeContainer")?.classList.remove("blur-sm");
  }

  return (
    <>
      <ul className="basis-7/12 flex justify-between text-white text-sm">
        <li
          className="relative flex items-center cursor-pointer"
          onMouseEnter={handleOpenFilmDropDownMenu}
          onMouseLeave={handleCloseFilmDropDownMenu}
        >
          <RiMovie2Line className="text-2xl" />
          <span className="mx-1">فیلم</span>
          <GoChevronDown className="text-slate-300" />
          {filmDropDownMenu && (
            <DropdownMenu
              firstListTitle="همه فیلم ها"
              firstListItems={[
                "عناوین برتر آینده",
                "250 فیلم برتر تاریخ",
                "جدول باکس آفیس",
                "فیلم های دوبله فارسی",
              ]}
              secondListTitle="جوایز"
              secondListItems={[
                "لیست کاندید ها",
                "لیست جوایز اسکار",
                "آرشیو گلدن گلوب",
              ]}
              imageSrc={tombRaiderImage}
              imageAlt="tombRaiderImage"
            />
          )}
        </li>
        <li
          className="relative flex items-center cursor-pointer"
          onMouseEnter={handleOpenSerialDropDownMenu}
          onMouseLeave={handleCloseSerialDropDownMenu}
        >
          <RiMovieLine className="text-2xl" />
          <span className="mx-1">سریال</span>
          <GoChevronDown className="text-slate-300" />
          {serialDropDownMenu && (
            <DropdownMenu
              firstListTitle="همه سریال ها"
              firstListItems={[
                "آرشیو کلی",
                "250 سریال برتر IMDB",
                "سریال های دوبله فارسی",
              ]}
              secondListTitle="منتخب های جدید"
              secondListItems={["سریال های منتخب کاربران", "برترین سریال ها"]}
              imageSrc={lastWitchHunterImage}
              imageAlt="lastWitchHunterImage"
            />
          )}
        </li>
        <li
          className="relative flex items-center cursor-pointer"
          onMouseEnter={handleOpenArtistsDropDownMenu}
          onMouseLeave={handleCloseArtistsDropDownMenu}
        >
          <FaMasksTheater className="text-2xl" />
          <span className="mx-1">هنرمندان</span>
          <GoChevronDown className="text-slate-300" />
          {artistsDropDownMenu && (
            <DropdownMenu
              firstListTitle="بازیگران مرد"
              firstListItems={["بازیگران", "کارگردان ها"]}
              secondListTitle="بازیگران زن"
              secondListItems={["بازیگران", "کارگردان ها"]}
              imageSrc={jonnyDeppImage}
              imageAlt="jonnyDeppImage"
            />
          )}
        </li>
        <li className="flex items-center cursor-pointer">
          <BiMoviePlay className="text-2xl" />
          <span className="mx-1">تریلر ها</span>
        </li>
        <li className="flex items-center cursor-pointer">
          <MdOutlineSupportAgent className="text-2xl" />
          <span className="mx-1">پشتیبانی</span>
        </li>
      </ul>
      <ul className="basis-[120px] flex justify-between items-center text-white">
        <HiOutlineLightBulb className="text-4xl cursor-pointer" />
        <IoIosNotifications className="text-4xl cursor-pointer" />
        <Image
          src={avatar}
          alt="avatar"
          className="w-9 rounded-3xl cursor-pointer"
        />
      </ul>
    </>
  );
}

export default App;
