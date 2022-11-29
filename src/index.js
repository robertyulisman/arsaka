import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Helmet, HelmetProvider } from "react-helmet-async";

import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    supportedLngs: ["en", "id"],
    fallbackLng: "id",
    detection: {
      order: ["cookie", "localStorage", "path", "subdomain"],
      caches: ["cookie"],
    },
    backend: {
      loadPath: "/assets/locales/{{lng}}/translation.json",
    },
    react: { useSuspense: false },
  });

const loadingMarkup = (
  <div>
    <h2>Loading</h2>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <HelmetProvider>
    <Suspense fallback={loadingMarkup}>
      <App>
        <Helmet prioritizeSeoTags>
          <title>Arsaka</title>
          <meta
            name="description"
            content="Arsaka Group Pelayaran - Berpengalaman Dalam Mobilisasi Proyek, Bongkar Muat serta Pengurusan
      Sertifikasi Kapal ( Endorsment ) untuk mendukung Mitra Perusahaan
      Lokal dan Asing"
          />
        </Helmet>
      </App>
    </Suspense>
  </HelmetProvider>
);
