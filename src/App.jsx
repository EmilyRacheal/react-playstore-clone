import React, { useState } from "react";
import "./index.css";
import "./App.css";
import Dashboard from "./components/pages/Dashboard/index";
import MyApps from "./components/pages/myapps/index";
import Shops from "./components/pages/shops/index";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  // const [count, setCount] = useState(1)

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MyApps />} />
          <Route path="/shops" element={<Shops />} />
          <Route path={"/dashboard/*"} element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
