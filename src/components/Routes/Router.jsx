import React from "react";
import {} from "react-router";
import Home from "../Layout/Home";
import TRated from "../Layout/TRated";
import View from "../Layout/View";
import Upcoming from "../Layout/Upcoming";
import { HashRouter, Route, Routes } from "react-router-dom";

function Router() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/view/:id" element={<View />} />
          <Route path="/Upcoming" element={<Upcoming />} />
          <Route path="/Toprated" element={<TRated />} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default Router;
