import Nav from "../../Components/Nav";
import Footer from "../../Components/Footer";
import Backtop from "../../Components/Backtop";
import { useState } from "react";
import "../../scss/interset/interset.scss";

import InterestIssue from "./mudule/IinterestIssue";
import InterestHeated from "./mudule/InterestHeated";
import InterestDynanmic from "./mudule/InterestDynanmic";
import IntersetTitle1 from "./mudule/IntersetTitle1";
import IntersetTitle2 from "./mudule/IntersetTitle2";
import InterestHot from "./mudule/InterestHot";
const Interest: React.FC = () => {
  const [show, setshow] = useState<boolean>(true);

  return (
    <div className="interest-box">
      <Nav />
      <div className="idle-top">
        <div className="inter">
          <div className="inter-box">
            <div>兴趣</div>
            <span>|</span>
            <span>随时.发现.分享</span>
          </div>
        </div>
      </div>
      <div className="idle-bottom">
        <div className="interest-index">
          <div className="interest-left">
            <div className="interest-one">
              {/* 发布 */}
              <InterestIssue></InterestIssue>
            </div>
            <div className="interest-two">
              {/* 正在热议 */}
              <InterestHeated></InterestHeated>
            </div>
            <div className="interest-three">
              {/* 动态和热门 */}
              <div
                onClick={() => {
                  setshow(false);
                }}
              >
                动态
              </div>
              <div
                onClick={() => {
                  setshow(true);
                }}
              >
                热门
              </div>
            </div>
            <div className="interest-five">
              {/* 动态 */}
              <div
                className="dynanmic"
                style={{ display: show ? "none" : "block" }}
              >
                <InterestDynanmic></InterestDynanmic>
              </div>
              {/* 热门 */}
              <div className="hot" style={{ display: show ? "block" : "none" }}>
                <InterestHot></InterestHot>
              </div>
            </div>
          </div>
          <div className="interest-rigth">
            <div className="rigth-one">
              <ul>
                <li>
                  <span>发布的动态</span>
                  <span className="span">0</span>
                </li>
                <hr />
                <li>
                  <span>我关注的标签</span>
                  <span className="span">0</span>
                </li>
                <hr />
                <li>
                  <span>我关注的人</span>
                  <span>0</span>
                </li>
              </ul>
            </div>
            <div className="rigth-two">
            <IntersetTitle1></IntersetTitle1>
            </div>
            <div className="rigth-two">
            <IntersetTitle2></IntersetTitle2>
              
            </div>
          </div>
        </div>
      </div>
      <Backtop />
      <Footer />
    </div>
  );
};
export default Interest;
