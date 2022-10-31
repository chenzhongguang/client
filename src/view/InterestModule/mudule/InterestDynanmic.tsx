import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../../scss/interset/interesthot.scss";
interface dynanmicI{
	aid:number,
	category:number,
	content:string,
	mainpic:string,
	title:string,
	uid:number,
	avatar:string,
	username:string,
}
const InterestDynanmic: React.FC = () => {
        const [dynanmic, setdynanmic] = useState<dynanmicI[]>([]);
	async function getData() {
		axios.defaults.withCredentials = true;
		const url = "http://localhost:7001/dynanmic.do";
		const promise = axios.get(url);
		let res = await promise;
		setdynanmic(res.data);
		console.log(res);
	}
	useEffect(function () {
		getData();
	}, []);
  return (
    <div className="hot">
      {dynanmic.map((v, i) => {
        return (
          <div className="hot-box" key={i}>
            <Link to={{ pathname: "/interestpersonage" }}>
              <div className="hot-top">
                <div className="hot-top-left">
                  <div className="hot-img">
                    <img src={dynanmic[i].avatar} alt="" />
                  </div>
                  <div className="hot-user">
                    <div className="user-box">
                      <span>{dynanmic[i].username}</span>
                    </div>
                    <div className="user-time">
                      <span>4小时前</span>
                    </div>
                  </div>
                </div>
                <div className="hot-top-rigth">
                  <div className="hot-top-rigth-g">关注</div>
                  <div className="hot-top-rigth-d">
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                </div>
              </div>
              <div className="hot-bottom">
                <div className="hot-title">{dynanmic[i].title}</div>
                <div className="hot-title-img">
                  <div>
                    <img src="" alt="" />
                  </div>
                  <div>
                    <img src="" alt="" />
                  </div>
                  <div>
                    <img src="" alt="" />
                  </div>
                  <div>
                    <img src="" alt="" />
                  </div>
                  <div>
                    <img src="" alt="" />
                  </div>
                </div>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
};
export default InterestDynanmic;
