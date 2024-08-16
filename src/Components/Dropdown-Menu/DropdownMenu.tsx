import * as React from "react";
import Image, { StaticImageData } from "next/image";
import { IoTrophySharp, IoFilmOutline } from "react-icons/io5";

type Props = {
  firstListTitle: string;
  firstListItems: string[];
  secondListTitle: string;
  secondListItems: string[];
  imageSrc: StaticImageData;
  imageAlt: string;
};

function App({
  firstListTitle,
  firstListItems,
  secondListTitle,
  secondListItems,
  imageSrc,
  imageAlt,
}: Props) {
  return (
    <div
      className="absolute top-full w-max bg-slate-800 shadow-lg 
      p-6 rounded-lg cursor-auto z-10"
    >
      <div className="flex justify-between">
        <div className="basis-3/12">
          <h3 className="flex items-center text-orange-500 text-sm">
            <IoFilmOutline className="ml-1 text-lg" />
            {firstListTitle}
          </h3>
          <ul>
            {[...firstListItems].map((item, index) => (
              <li
                className="mt-6 mr-5 cursor-pointer text-slate-300 hover:text-slate-100"
                key={index}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="basis-3/12">
          <h3 className="flex items-center text-orange-500 text-sm">
            <IoTrophySharp className="ml-1 text-lg" />
            {secondListTitle}
          </h3>
          <ul>
            {[...secondListItems].map((item, index) => (
              <li
                className="mt-7 mr-5 cursor-pointer text-slate-300 hover:text-slate-100"
                key={index}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="basis-4/12">
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={400}
            className="hover:contrast-150 transition-all duration-300"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
