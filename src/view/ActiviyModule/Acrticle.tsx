import Nav from "../../Components/Nav"; //导航栏
import Footer from "../../Components/Footer";
import Backtop from "../../Components/Backtop";
import "../../scss/action/actionnav.scss";
import "../../scss/video/vidnav.scss";
import axios from "axios";
import { useEffect, useState } from "react";

interface arrI {
  aid: number;
  category: number;
  title: string;
  mainpic: string;
  content: string;
}
const Activiy: React.FC = () => {
  const [arr, setarr] = useState<arrI[]>([]);
  let arr1 = new Array();
  async function getData() {
    axios.defaults.withCredentials = true;
    const url = "http://localhost:7001/leavedata.do";
    let len = arr.length;
    console.log(len);

    const promise = axios.post(url, { len });
    let res = await promise;
    let arr1 = res.data;
    console.log(arr1);
    setarr(arr.concat(arr1));
  }
  useEffect(function () {
    getData();
  }, []);
  function clickFn() {
    getData();
  }
  function manydown() {
    return;
  }
  function arrFn(v: any, i: any) {
    if (arr[i].category == 8) {
      // 文章
      return (
        <div className="list-left">
          <img src={arr[i].mainpic} alt="" />
          <h4>{arr[i].title}</h4>
          <div className="list-bot">
            <span className="bottime">2小时前</span>
            <span className="botnick">深夜俱乐部</span>
          </div>
        </div>
      );
    }
  }
  function vedioMore(arg0: () => void, arg1: never[]) {
    throw new Error("Function not implemented.");
  }
  return (
    <div>
      <Nav />
      <div className="activiy-box" style={{ marginTop: "60px" }}>
        <div className="bbox">
          <div className="idle-top-wap">
            <div className="idle-top">
              <div className="left">
                <h5>活动</h5>
                <span>欢聚·分享·兴趣</span>
              </div>
            </div>
          </div>
          <div className="action-content">
            <div className="action-container">
              <ul className="activities_index-nav">
                <li>全部</li>
                <li>专题活动</li>
                <li>线下活动</li>
                <li>线上活动</li>
              </ul>
              <div className="action-article">
                {arr.map((v, i) => {
                  let div = arrFn(v, i);
                  return div;
                })}

                <div className="load-more">
                  <div className="loading">加载更多</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Backtop />
      <Footer />
    </div>
  );
};
export default Activiy;
