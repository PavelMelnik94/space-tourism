import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";

import Home from "./pages/Home/Home";
import Crew from "./pages/Crew/Crew";
import NotFound from "./pages/NotFound";
import Technology from "./pages/Technology/Technology";
import Destination from "./pages/Destination/Destination";


const App = () => {
  return (
    <div className="App" style={{ background: "#181818" }}>
      <Routes>
        <Route path="/" element={<Home children={<Header className="" />} />} />
        <Route
          path="/destination"
          element={<Destination children={<Header className="" />} />}
        />
        <Route
          path="/crew"
          element={<Crew children={<Header className="" />} />}
        />
        <Route
          path="/technology"
          element={<Technology children={<Header className="" />} />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
