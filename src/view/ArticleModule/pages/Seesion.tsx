import React from "react";
import { useNavigate, Link } from "react-router-dom";
import Icon, { EditFilled } from "@ant-design/icons";

export default function Seesion() {
  const navigate = useNavigate();
  function toPublish() {
    navigate({ pathname: "/publish" });
  }
  return (
    <div className="article_top">
      <div className="article_nav">
        <ul>
          <li>
            <h4>尾巴文章</h4>
          </li>
          <li>
            <span className="shu"></span>
          </li>
          <li>
            <p>数字生活美文</p>
          </li>
        </ul>
        <div className="write" onClick={toPublish}>
          <EditFilled style={{ fontSize: "20px" }} />
          <h5>写文章</h5>
        </div>
      </div>
    </div>
  );
}
