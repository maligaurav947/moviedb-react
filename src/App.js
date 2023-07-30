import Home from "./components/Home.jsx";
import TRated from "./components/TRated";
import Upcoming from "./components/Upcoming";
import Header from "./components/extra/Header";
import View from "./components/extra/View.jsx";
import "./main.css";
import { HashRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/trated" element={<TRated />} />
          <Route path="/view/:id" element={<View />} />
          <Route path="/Upcoming" element={<Upcoming />} />
          <Route path="/Toprated" element={<TRated />} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
