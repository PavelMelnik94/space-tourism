import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Home from "./pages/Home";
import Destination from './pages/Destination';
import Crew from './pages/Crew';
import Technology from './pages/Technology'
import NotFound from "./pages/NotFound";

import "./App.css";

const App = () => {
  return (
    <div className="App" style={{ background: "#181818" }}>
      {/* <Header className=''/> */}
      <Routes>
        <Route path="/" element={<Home children={<Header className=''/>} />} />
        <Route path="/destination" element={<Destination children={<Header className=''/>} />} />
        <Route path="/crew" element={<Crew children={<Header className=''/>} />} />
        <Route path="/technology" element={<Technology children={<Header className=''/>} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
