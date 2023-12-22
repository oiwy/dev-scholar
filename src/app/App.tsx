import { Header, Footer } from "@/widgets";
import { Route, Routes } from "react-router-dom";
import { Home, NoMatch } from "@/pages";

const App = () => {
  return (
    <div className="flex h-screen flex-col justify-between">
      <Header />
      <div className="container flex gap-10 pb-6 pt-3">
        <main className="w-full basis-10/12">
          <Routes>
            <Route index element={<Home />} />
            <Route path="*" element={<NoMatch />} />
          </Routes>
        </main>
        <aside className="h-[700px] basis-1/2 bg-black"></aside>
      </div>
      <Footer />
    </div>
  );
};

export default App;
