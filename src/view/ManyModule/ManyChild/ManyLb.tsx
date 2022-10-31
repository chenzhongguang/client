import React from "react";
import { Carousel } from "antd";
import '../../../scss/manymoudle/many.scss'

const contentStyle: React.CSSProperties = {
  height: "510px",
  color: "#fff",
  lineHeight: "510px",
  textAlign: "center",
  background: "#364d79",
};
export default function ManyLb() {
  return (
    <div
      style={{
        width: "1200px",
        height: "510px",
        display: "flex",
        margin: "auto",
      }}
    >
      <Carousel
        autoplay
        arrows={true}
        style={{
          width: "1200px",
          height: "510px",
        }}
      >
        <div>
          <h3 style={contentStyle}><img
              src={require("../../../assets/imgs/02.jpeg")}
              alt=""
            /></h3>
        </div>
        <div>
          <h3 style={contentStyle}><img
              src={require("../../../assets/imgs/00.jpeg")}
              alt=""
            /></h3>
        </div>
        <div>
          <h3 style={contentStyle}><img
              src={require("../../../assets/imgs/00.jpeg")}
              alt=""
            /></h3>
        </div>
        <div>
          <h3 style={contentStyle}><img
              src={require("../../../assets/imgs/00.jpeg")}
              alt=""
            /></h3>
        </div>
      </Carousel>
    </div>
  );
}
