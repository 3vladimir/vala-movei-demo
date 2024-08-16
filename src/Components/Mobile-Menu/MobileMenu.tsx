"use client";
import * as React from "react";
import { MdClose } from "react-icons/md";
import Slide from "@mui/material/Slide";

type Props = {
  mobileMenu: boolean;
  handleCloseMobileMenu: () => void;
  listItem: string[];
};

function App({ mobileMenu, handleCloseMobileMenu, listItem }: Props) {
  return (
    <>
      <Slide direction="down" in={mobileMenu}>
        <div
          className="lg:hidden fixed size-full bg-gradient-to-b from-[#1a324c] to-[#1e3906] 
          z-10 opacity-90 p-4"
        >
          <h5 className="fontIRANSansWebMedium text-white text-center">
            منوی سایت
          </h5>
          <button
            className="absolute top-5 left-8"
            onClick={handleCloseMobileMenu}
          >
            <MdClose className="text-white text-lg" />
          </button>

          <ul
            className="flex flex-col h-96 justify-between fontIRANSansWebLight 
          text-xs mt-6 text-white"
          >
            {[
              ...listItem.map((item, index) => (
                <li
                  key={index}
                  className="w-1/2 mx-auto basis-1 rounded-3xl p-3 text-center cursor-pointer 
                  border-b border-gray-500 bg-[rgb(255,255,255,0.21)]  hover:bg-black"
                >
                  {item}
                </li>
              )),
            ]}
            <li
              className="w-1/2 mx-auto basis-1 rounded-3xl p-3 text-center cursor-pointer 
              bg-violet-600"
            >
              پنل کاربری
            </li>
          </ul>
        </div>
      </Slide>
    </>
  );
}

export default App;
