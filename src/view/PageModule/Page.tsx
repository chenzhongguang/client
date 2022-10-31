import Nav from "../../Components/Nav"; //导航栏
import Footer from "../../Components/Footer";
import Backtop from "../../Components/Backtop";
import PageBottom from "./moudle/PageBottom"; //闲置
import Slideshow from "./moudle/Slideshow"; //闲置
import "../../scss/Pagemoudle/page.scss";

import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";

const Page: React.FC = () => {
  const [slist, setSlist] = useState<string[]>([
    require("../../assets/img/1.jpeg"),
    require("../../assets/img/2.jpeg"),
    require("../../assets/img/3.jpeg"),
    require("../../assets/img/4.jpeg"),
    require("../../assets/img/5.jpeg"),
  ]);
  // function get_next(){
  // 	let arr = [...slist];
  // 	let a = arr[0];
  // 	arr.shift();
  // 	arr.push(a);
  // 	setSlist(arr);
  // }
  // let myint:any;
  // function set(){
  // 	clearInterval(myint)
  // 	myint = setInterval(get_next,6000);
  // }
  // useEffect(() => {
  // 	set();
  // })
  return (
    <div className="page1">
      <Nav />
      <div className="page-box" >
        <div className="page-top">
          <div className="page-big">
            <Slideshow></Slideshow>
            {/* <ul>
              {slist.map((v, i) => {
                console.log(v);
                return (
                  <li key={i} className={"img-box" + i}>
                    <img src={v} alt=""></img>
                  </li>
                );
              })}
            </ul> */}
          </div>
          <div className="page-top-bottom">
            <PageBottom></PageBottom>
          </div>
        </div>
        <div className="page-bottom"></div>
      </div>
      <Backtop />
      <Footer />
    </div>
  );
};
export default Page;
