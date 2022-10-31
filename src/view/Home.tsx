import React from "react";
import {
  BrowserRouter, //BrowserRouter太长，常常使用别名Router
  Route,
  Routes,
} from "react-router-dom";
import Page from "./PageModule/Page"; // 首页
import Whale from "./WhaleModule/Whale"; // 鲸闻
import Article from "./ArticleModule/Article"; //文章
import Interest from "./InterestModule/Interest"; //兴趣
import Video from "./VideoModule/Video"; //视频
import Many from "./ManyModule/Manys"; //众测
import Activiy from "./ActiviyModule/Acrticle"; //活动
import Leave from "./LeaveModule/Leaves"; //闲置
import Mycenter from "./MyInfomation/Mycenter"; //个人中心
import Publish from "./PublishModule/Publish";
import Info from "./MyInfomation/EditMoudle";
import InterestPersonage from "./InterestModule/InterestPersonage";
import Login from "./Login/Login";
const Home: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Page />} />
        <Route path="/whale" element={<Whale />} />
        <Route path="/article" element={<Article />} />
        <Route path="/interest" element={<Interest />} />
        <Route path="/video" element={<Video />} />
        <Route path="/many" element={<Many />} />
        <Route path="/activiy" element={<Activiy />} />
        <Route path="/leave" element={<Leave />} />
        <Route path="/mycenter" element={<Mycenter />} />
        <Route path="/publish" element={<Publish />} />
        <Route path="/editinfo" element={<Info />} />
        <Route path="/InterestPersonage/:aid" element={<InterestPersonage />} />
      </Routes>
    </BrowserRouter>
  );
};
export default Home;
