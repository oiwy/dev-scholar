import { Header, Footer } from "@/widgets";
import { Route, Routes } from "react-router-dom";
import { Home, NoMatch } from "@/pages";

const App = () => {
  return (
    <div className="flex h-screen flex-col justify-between font-mono">
      <Header />
      <div className="container flex gap-5 pb-6 pt-3">
        <div className="flex w-full flex-col gap-5">
          <header className="bg-black">
            <div className="flex justify-between p-4">
              <h2 className="text-xl font-medium text-white">Моя лента</h2>
              <svg
                width="32"
                height="28"
                viewBox="0 0 32 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.1873 25.4406C11.8755 25.4406 7.61625 23.2305 4.84203 20.0145C2.86987 17.7283 1.19752 12.7446 2.4109 9.82437C3.29604 7.69416 5.55967 6.11265 7.50313 5.03859C8.94074 4.24408 10.46 3.62553 11.9164 2.86817C12.79 2.41389 13.6123 2 14.6103 2C16.3452 2 17.9859 2.01963 19.6916 2.39068C21.4988 2.78379 23.3086 2.90793 25.0576 3.46503C27.6489 4.29042 29.0127 8.03967 29.7009 10.2802C30.702 13.5399 29.0156 16.6756 27.2259 19.3851C25.5434 21.9324 22.6423 24.426 19.5493 25.039C18.4285 25.2611 17.2943 25.6242 16.1873 25.9289C15.0707 26.2363 14.2678 25.5206 13.4276 24.8545"
                  stroke="white"
                  stroke-width="3"
                  stroke-linecap="round"
                />
                <path
                  d="M9.87946 10.5948H11.6535"
                  stroke="white"
                  stroke-width="3"
                  stroke-linecap="round"
                />
                <path
                  d="M19.7354 10.9855C20.7343 10.9855 21.7478 11.1809 22.6922 11.1809"
                  stroke="white"
                  stroke-width="3"
                  stroke-linecap="round"
                />
                <path
                  d="M13.6247 17.2364C14.5378 17.2364 15.1794 18.213 16.2639 18.213C16.9294 18.213 17.6519 17.4175 18.1584 17.041"
                  stroke="white"
                  stroke-width="3"
                  stroke-linecap="round"
                />
              </svg>
            </div>
          </header>
          <main>
            <Routes>
              <Route index element={<Home />} />
              <Route path="*" element={<NoMatch />} />
            </Routes>
          </main>
        </div>
        <aside className="h-[700px] basis-1/2 bg-black">
          <div className="flex h-full w-full items-center justify-center">
            <h2 className="text-xl font-medium text-white">
              Тут скоро что-то будет
            </h2>
          </div>
        </aside>
      </div>
      <Footer />
    </div>
  );
};

export default App;
