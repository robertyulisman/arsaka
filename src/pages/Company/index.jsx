import React from "react";
import Tabs from "../../components/Tabs";
import { useParams, useLocation } from "react-router-dom";
import Dashboard from "./Dashboard";
import AboutCompany from "./AboutCompany";
import GalleryCompany from "./GalleryCompany";

const Company = () => {
  const { state } = useLocation();
  const { data } = state;

  return (
    <div>
      <Tabs data={data}>
        <div label="Home">
          <Dashboard data={data} />
        </div>
        <div label="About">
          <AboutCompany data={data} />
        </div>
        <div label="Gallery">
          <GalleryCompany data={data} />
        </div>
        <div label="Fleets">
          Nothing to see here, this tab is <em>extinct</em>!
        </div>
      </Tabs>
    </div>
  );
};

export default Company;