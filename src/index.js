import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Layout } from "components/Layout/Layout";
import { DataProvider } from "./services/Context";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename="/rip_russianwarship">
    <DataProvider>
      <Layout />
    </DataProvider>
    </BrowserRouter>
  </React.StrictMode>
);
