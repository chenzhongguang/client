import { BackTop } from "antd";
import { VerticalAlignTopOutlined } from "@ant-design/icons";
import React from "react";

const style: React.CSSProperties = {
  height: 50,
  width: 50,
  lineHeight: "50px",
  borderRadius: "50%",
  backgroundColor: "#40a9ff",
  boxShadow: "0px 5px 15px 0px rgba(15, 37, 64, 0.1) ",
  color: "#fff",
  textAlign: "center",
  fontSize: 30,
};
const Backtop: React.FC = () => (
  <BackTop>
    <div style={style}>
      <VerticalAlignTopOutlined />
    </div>
  </BackTop>
);

export default Backtop;
