import React from "react";
import Tabs from "../../components/Tabs";
import { useParams } from "react-router-dom";
import Dashboard from "./Dashboard";
import AboutCompany from "./AboutCompany";
import GalleryCompany from "./GalleryCompany";

import { useTranslation } from "react-i18next";
import dataCompany from "../../utils/data";

const Company = () => {
  const { t } = useTranslation();
  const { _id } = useParams();

  const data = dataCompany.find((item) => item.key === _id);

  return (
    <div>
      <Tabs data={data}>
        <div label={t("home")}>
          <Dashboard data={data} />
        </div>
        <div label={t("about")}>
          <AboutCompany data={data} />
        </div>
        <div label={t("gallery")}>
          <GalleryCompany data={data} />
        </div>
      </Tabs>
    </div>
  );
};

export default Company;
