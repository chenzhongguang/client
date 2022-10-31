import React from "react";
import { useNavigate } from "react-router-dom";

const NavCenter: React.FC = () => {
  const navigate = useNavigate();
  function toPage() {
    navigate({ pathname: "/" });
  }
  function toWhale() {
    navigate({ pathname: "/whale" });
  }
  function toArticle() {
    navigate({ pathname: "/article" });
  }
  function toInterest() {
    navigate({ pathname: "/interest" });
  }
  function toVideo() {
    navigate({ pathname: "/video" });
  }
  function toMany() {
    navigate({ pathname: "/many" });
  }
  function toActiviy() {
    navigate({ pathname: "/activiy" });
  }
  function toLeave() {
    navigate({ pathname: "/leave" });
  }
  return (
    <div className="navcenter-box">
      <div onClick={toPage}>首页</div>
      <div onClick={toWhale}>鲸闻</div>
      <div onClick={toArticle}>文章</div>
      <div onClick={toInterest}>兴趣</div>
      <div onClick={toVideo}>视频</div>
      <div onClick={toMany}>众测</div>
      <div onClick={toActiviy}>活动</div>
      <div onClick={toLeave}>闲着</div>
    </div>
  );
};
export default NavCenter;
