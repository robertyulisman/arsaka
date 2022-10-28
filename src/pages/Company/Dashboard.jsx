import React from "react";
import { useParams, useLocation } from "react-router-dom";
import NavbarDetail from "../../components/NavbarDetail";
import ContactCompany from "../../components/sectionCompany/ContactCompany";
import HeroCompany from "../../components/sectionCompany/HeroCompany";
import MapCompany from "../../components/sectionCompany/MapCompany";
import ServicesCompany from "../../components/sectionCompany/ServicesCompany";

import Logo from "../../assets/logo.png";
import Madiha from "../../assets/logoMadiha.png";

const Dashboard = ({ data }) => {
  // const { _id } = useParams();
  // const { state } = useLocation();
  // const { data } = state;

  // console.log("data ==========xxxxxxxxxxx", data);

  return (
    <>
      {/* <NavbarDetail home title={_id} data={data} /> */}
      <HeroCompany data={data} />
      <ServicesCompany data={data} />
      <MapCompany data={data} />
      <ContactCompany data={data} />
    </>
  );
};

export default Dashboard;
