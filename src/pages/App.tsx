import React from "react";
import { BrowserRouter } from "react-router-dom";
import Router from "../navigation";

import "../styles/commom.scss";

export default function App() {
  return (
    <div className="body-container">
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </div>
  );
}
