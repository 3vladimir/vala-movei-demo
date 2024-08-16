import { Header, Footer, SeriesBoxes, SideBar } from "../src/Components";
import { seriesInformations } from "../src/lib/mainSeriesInformations";

function Main() {
  return (
    <>
      <div
        aria-label="whole-container"
        className="bg-gray-300 transition-all duration-300"
        id="wholeContainer"
      >
        <div className="py-1">
          <div
            aria-label="container-of-blue-part-below-header"
            className="lg:max-w-6xl md:max-w-[720px] sm:max-w-[540px] max-w-xl mx-auto 
            bg-[#4d79f6] md:flex p-6"
          >
            <div className="basis-3/12 text-center"></div>
            <div className="basis-6/12 text-center">
              <h3 className="text-2xl text-[#f3c74d] mb-4">
                دانلود بدون محدودیت با خرید اشتراک ویژه
              </h3>
              <p className="text-white text-[13px]">
                دانلود با بالاترین سرعت را تجربه کنید!
              </p>
            </div>
            <div className="basis-3/12 ">
              <div
                className="w-fit mx-auto py-3 px-5 bg-[#283c73] text-white md:mt-3 mt-7 
                text-sm rounded cursor-pointer hover:scale-[1.02] opacity-80 hover:opacity-100"
              >
                خرید اشتراک
              </div>
            </div>
          </div>
        </div>
        <div
          aria-label="container-of-contents"
          className="lg:max-w-6xl md:max-w-[720px] sm:max-w-[540px] max-w-xl mx-auto bg-gray-50 
          transition-all duration-500"
        >
          <div
            aria-label="layout-contents-by-flex-box"
            className="lg:flex pt-5 pb-20"
          >
            <main className="lg:basis-8/12 lg:border-l-2">
              <SeriesBoxes seriesInformations={seriesInformations} />
            </main>
            <aside className="lg:basis-4/12">
              <SideBar />
            </aside>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}

function App() {
  return (
    <>
      <Header />
      <Main />
    </>
  );
}

export default App;
