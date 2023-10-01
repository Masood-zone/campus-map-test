import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "../components/Layout/index";
import Direction from "./direction";
import Location from "./location";
import Home from "./home";

const MainApp = () => {
  return (
    <div>
      <Layout>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/directions" element={<Direction />} />
          <Route exact path="/locations" element={<Location />} />
        </Routes>
      </Layout>
    </div>
  );
};

export default MainApp;
