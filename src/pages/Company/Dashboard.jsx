import React from "react";
import ContactCompany from "../../components/sectionCompany/ContactCompany";
import HeroCompany from "../../components/sectionCompany/HeroCompany";
import MapCompany from "../../components/sectionCompany/MapCompany";
import ServicesCompany from "../../components/sectionCompany/ServicesCompany";
import { Helmet } from "react-helmet-async";

const Dashboard = ({ data }) => {
  console.log("data", data);
  return (
    <>
      <Helmet>
        <title>{data.nama}</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
        <meta name="description" content={data.deskripsiPendek} />
      </Helmet>
      <HeroCompany data={data} />
      <ServicesCompany data={data} />
      <MapCompany data={data} />
      <ContactCompany data={data} />
    </>
  );
};

export default Dashboard;
