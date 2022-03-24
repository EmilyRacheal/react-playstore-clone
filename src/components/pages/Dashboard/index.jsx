import React from "react";
import LayoutWrapper from "./layout/index";
import GamesPage from "./games/index";
import KidsPage from "./kids/index";
import Apps from "./apps/index";
import Editor from "./editor/index";
import NewRelease from "./layout/index";
import Shop from "./shops/index";
import Home from "./home/index";

import { Route, Routes } from "react-router-dom";

const Index = () => {
  return (
    <>
      <LayoutWrapper>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/games" element={<GamesPage />} />
          <Route path="/kids" element={<KidsPage />} />
          <Route path="/releases" element={<NewRelease />} />
          <Route path="/editor" element={<Editor />} />
          <Route path="/app" element={<Apps />} />
          <Route path="/shops" element={<Shop />} />
        </Routes>
      </LayoutWrapper>
    </>
  );
};

export default Index;
