import { Header, Footer } from "@/widgets";
import { Route, Routes } from "react-router-dom";
import { Home, NoMatch } from "@/pages";

const App = () => {
  return (
    <div className="flex h-screen flex-col justify-between gap-y-2">
      <Header />
      <main>
        <Routes>
          <Route index element={<Home />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
