import React, { useState, useRef, useEffect } from "react";
import Waterfall from "waterfalljs-layout/react";
import Loading from "../../../Components/Loading";
import "../../../styles/card.scss";
import axios from "axios";
import format from "../../../utils/format";

const customStyleGrid = `#react-waterfall-grid-comps li>div {
  border-radius: 8px;
  font-size: 20px;
  overflow: hidden;
  color: rgba(0, 0, 0, 0.6);
  margin-bottom: 30px;
  padding: 6px;
  background: rgb(255, 255, 255);
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
  transition: all 0.5s
}
#react-waterfall-grid-comps li>div:hover {
  transform: translateY(-6px);
  box-shadow: 0 30px 50px rgba(0, 0, 0, 0.3);
  transition: all 0.3s
}
#react-waterfall-grid-comps li>div>img {
  width: 100%
}`;

interface Iarticles {
  aid: number;
  title: string;
  content: string;
  mainpic: string;
  addtime: string;
  status: number;
  username: string;
  avatar:string;
}

export default function New() {
  const [article, setArticle] = useState<Iarticles[]>([]);
  const [page,sertPage] = useState<number>(1)
  const [size,sertSize] = useState<number>(20)
  const ulMaxHRef = useRef<number>(0);

  async function getArticles(page:number,size:number) {
    axios.defaults.withCredentials = true;
    //axios请求得到文章
    let res = await axios.get("http://localhost:7001/articleData",{params:{page,size}});
    console.log(res);
    let alist = res.data;
    alist.forEach((item: any) => {
      item.addtime = format(item.addtime);
    });
    setArticle(alist); //修改了状态，触发组件的刷新
    return alist;
  }
  const handleSearchImage = async () => {

    const arr: any[] = [];
    sertSize(page+1)
    let prev = getArticles(page,size);
    [...await prev].forEach((item) => {
      arr.push(item);
    });
    console.log(prev);
    setArticle((p) => [...p, ...arr]);
  };
  useEffect(function () {
    //只监听组件的加载
    getArticles(page,size);
  }, []);

  return (
    <div className="content-box">
      <Waterfall
        mode="grid"
        el="#react-waterfall-grid-comps"
        columnWidth={295}
        columnCount={4}
        columnGap={10}
        rowGap={24}
        customStyle={customStyleGrid}
        onChangeUlMaxH={(h) => (ulMaxHRef.current = h)}
      >
        {article.map((item: any, index) => {
          return (
            <li key={index} onClick={() => alert("图片地址为:" + item)}>
              <div>
                <img src={item.mainpic} alt="" />
                <div className="card">
                  <h5>{item.title}</h5>
                  <div
                    className="card-p"
                    dangerouslySetInnerHTML={{ __html: item.content }}
                  ></div>
                  <div className="user-info">
                    <a href="" className="avatar">
                      <img src={item.mainpic} alt="" className="avatar-pic" />
                    </a>
                    <a href="" className="username">
                      {item.username}
                    </a>
                    <span className="spot"></span>
                    <span className="time">{item.addtime}前</span>
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </Waterfall>
      <div
        style={{ textAlign: "center" }}
        className="loading-box"
        onClick={handleSearchImage}
      >
        <Loading />
      </div>
    </div>
  );
}
