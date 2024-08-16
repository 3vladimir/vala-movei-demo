"use client";
import * as React from "react";
import Image, { StaticImageData } from "next/image";
import { PiListPlusBold } from "react-icons/pi";
import { FaStar } from "react-icons/fa";

type SeriesInfo = {
  imageSrc: StaticImageData;
  channel: string;
  serieName: string;
  quality: string;
  genre: string[];
  imdb: number;
  caption: string;
};
type Props = {
  seriesInformations: SeriesInfo[];
};

function App({ seriesInformations }: Props) {
  return (
    <>
      <div
        aria-label="container-of-movies-boxes"
        className="flex flex-wrap justify-evenly"
      >
        {[
          ...seriesInformations.map((item, index) => (
            <div
              aria-label="container-of-1-box"
              key={index}
              className="basis-11/12 md:basis-[330px] lg:basis-[360px] mb-6 shadow-lg"
            >
              <div
                aria-label="container-of-image"
                className="relative group cursor-pointer"
              >
                <Image
                  src={item.imageSrc}
                  alt="seriesImage"
                  className="w-full"
                />
                <div
                  aria-label="caption"
                  className="absolute bottom-0 left-0 right-0 flex justify-between items-center
                   p-2.5 bg-[rgba(31,35,43,.82)]"
                >
                  <div
                    aria-label="caption-right-part"
                    className="text-white text-xs"
                  >
                    {item.caption}
                  </div>
                  <div
                    dir="ltr"
                    aria-label="caption-left-part"
                    className="flex items-end"
                  >
                    <FaStar className="text-yellow-500 mr-1" />
                    <span className="fontTahomaBold text-white text-sm ">
                      {item.imdb}{" "}
                      <span className="text-gray-400 text-xs">/10</span>
                    </span>
                  </div>
                </div>
                <div
                  aria-label="summary-division"
                  className="absolute top-0 bottom-0 left-0 right-0 
                  bg-gradient-to-b from-[rgba(7,10,46,.48)] to-[#070726] 
                  opacity-0 group-hover:opacity-95 transition-all duration-200 
                  text-white text-xs p-2 leading-7"
                >
                  این مینی سریال درباره پرونده قتل وحشتناکی است که دفتر دادستانی
                  شیکاگو رازمانی که یکی از آن ها مظنون به این جنایت میشود، به هم
                  میزند.
                </div>
              </div>
              <div
                aria-label="descriptions"
                className="bg-gray-200 py-5 px-3 text-xs"
              >
                <div
                  aria-label="first-description-part"
                  className="flex justify-between"
                >
                  <div>
                    <span className="fontIRANSansWebBold">شبکه: </span>
                    {item.channel}
                  </div>
                  <div className="fontTahomaBold cursor-pointer">
                    {item.serieName}
                  </div>
                </div>
                <div
                  aria-label="second-description-part"
                  className="flex justify-between items-center mt-5"
                >
                  <div>کیفیت: {item.quality}</div>
                  <div className="flex items-center">
                    <span className="fontIRANSansWebBold">ژانر: </span>

                    <div className="truncate max-w-[150px]">
                      {[
                        ...item.genre.map((genreItem, index) => (
                          <span
                            key={index}
                            className="cursor-pointer hover:text-blue-600 "
                          >
                            {genreItem}
                            {index !== item.genre.length - 1 ? ", " : null}
                          </span>
                        )),
                      ]}
                    </div>
                    <PiListPlusBold className="text-xl cursor-pointer mr-1" />
                  </div>
                </div>
              </div>
            </div>
          )),
        ]}
      </div>
    </>
  );
}

export default App;
