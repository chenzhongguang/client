import React, { useState} from "react";
import New from "./New";
import Footer from "../../../Components/Footer";

export default function Content() {
  return (
    <div className="main">
      <div className="content">
          <New />
      </div>
      <Footer />
    </div>
  );
}
