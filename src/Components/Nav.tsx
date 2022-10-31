import "../scss/moudle/nav.scss";
import "../scss/index.scss";
import React from "react";
import NavCenter from "../Components/NavCenter";
import {
  BellOutlined,
  LogoutOutlined,
  MessageOutlined,
  PlusCircleOutlined,
  SearchOutlined,
  StarOutlined,
  ToolOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
const Nav: React.FC = () => {
  const navigate = useNavigate();
  function mycenter() {
    navigate({ pathname: "/mycenter" });
  }
  function delFn() {
    navigate({ pathname: "/login" });
  }
  return (
    <div className="top">
      <div className="nav-box">
        <div className="nav-left">
          <h1>Numend</h1>
        </div>
        <div className="nav-center">
          <NavCenter></NavCenter>
        </div>
        <div className="nav-rigth">
          {/* <div className="i1">
            <SearchOutlined />
          </div>
          <span>登录</span> */}
          <div className="i2">
            <SearchOutlined  className="iconhover"/>
            <BellOutlined  className="iconhover"/>
            <MessageOutlined  className="iconhover"/>
            <span className="spanm">
              <img
                className="loginavatar"
                src={require("../assets/imgs/noavatar_small.gif")}
                alt=""
              />
              <ul className="usercont">
                <div className="sjx"></div>
                <li onClick={mycenter}>
                  <UserOutlined />
                  <span className="itemi">个人中心</span>
                </li>
                <li>
                  <PlusCircleOutlined />
                 <span className="itemi"> 我的关注</span>
                </li>
                <li>
                  <StarOutlined />
                  <span className="itemi">我的收藏</span>
                </li>
                <li>
                  <ToolOutlined />
                  <span className="itemi">设置</span>
                </li>
                <li>
                  <LogoutOutlined />
                  <span className="itemi" onClick={delFn}>退出</span>
                </li>
              </ul>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Nav;
