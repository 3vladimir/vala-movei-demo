import Image from "next/image";
import { FaSearch } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { IoMdSend } from "react-icons/io";
import images22 from "/public/Images/side-bar-images/series-images22.jpg";
import images23 from "/public/Images/side-bar-images/series-images23.jpg";
import images24 from "/public/Images/side-bar-images/series-images24.jpg";
import { seriesInformations } from "../../lib/sideBarSeriesInformations";

function App() {
  return (
    <>
      <div aria-label="whole-container-of-side-bar" className="px-4">
        <div aria-label="search" className="relative text-xs my-5">
          <input
            type="text"
            placeholder="عنوان فیلم یا سریال / شناسه IMDb"
            className="focus:outline-none w-full fontIRANSansWebLight 
            sm:py-2 p-2 bg-[#e4e4e4] rounded"
          />
          <FaSearch className="absolute text-slate-400 top-3 left-2" />
        </div>
        <div
          aria-label="social-netweorks"
          className="md:flex md:justify-between"
        >
          <div
            aria-label="telegram"
            className="lg:basis-40 md:basis-[305px] flex justify-around bg-cyan-200 
          py-2 px-3 items-center text-cyan-400 text-sm rounded cursor-pointer
          hover:bg-cyan-500 hover:text-white"
          >
            تلگرام ما
            <IoMdSend className="text-2xl" />
          </div>
          <div
            aria-label="instagram"
            className="lg:basis-40 md:basis-[305px] flex justify-around bg-pink-200
          py-2 px-3 items-center text-pink-400 text-sm rounded cursor-pointer
          hover:bg-pink-500 hover:text-white"
          >
            اینستاگرام ما
            <FaInstagram className="text-2xl" />
          </div>
        </div>

        <h5 className="text-sm text-[#2f4686] my-6">دوبله های فارسی</h5>
        <div aria-label="dubbed-series-images" className="flex justify-between">
          <div className="basis-[100px]">
            <Image
              src={images22}
              alt="dubbed-series"
              className="cursor-pointer"
            />
          </div>
          <div className="basis-[100px]">
            <Image
              src={images23}
              alt="dubbed-series"
              className="cursor-pointer"
            />
          </div>
          <div className="basis-[100px]">
            <Image
              src={images24}
              alt="dubbed-series"
              className="cursor-pointer"
            />
          </div>
        </div>

        <div className="bg-[#e1e1e1] text-[#2f4686] text-[13px] text-center p-2 my-5 cursor-pointer">
          ورود به آرشیو سریال های دوبله
        </div>
        <hr />
        <h5 className="text-[#2f4686] text-sm my-5">
          آخرین سریال های بروز شده
        </h5>
        <div aria-label="updated-series">
          {[
            ...seriesInformations.map((item, index) => (
              <>
                <Image
                  src={item.src}
                  alt="series-images"
                  className="w-full cursor-pointer hover:contrast-[1.3]"
                />
                <div className="bg-[rgb(5,9,12,0.75)] text-white text-xs p-1 flex justify-between">
                  <span>{item.lastUpdate}</span>
                  <span className="text-left">{item.name}</span>
                </div>
              </>
            )),
          ]}
        </div>
      </div>
    </>
  );
}

export default App;
