import Manypro from "./ManyChild/Manypro";
import ManyLb from "./ManyChild/ManyLb";
import "../../scss/manymoudle/many.scss";
import Nav from "../../Components/Nav";
import Footer from "../../Components/Footer";
import Backtop from "../../Components/Backtop";

const Many: React.FC = () => {
 
  return (
    <div>
      <Nav />
      <div className="many-box">
        <div className="manyboxx">
          <div className="many-nav">
            <div className="many-left">
              <h5>尾巴众测</h5>
              <span>众享数字生活好物</span>
            </div>
            <div className="many-right">
              <a>
                <span>众测首页</span>
              </a>
              <a>
                <span className="many-my">我的众测</span>
              </a>
            </div>
          </div>
        </div>
        <div className="many-content">
          <div className="manyclb">
            <ManyLb />
          </div>
          <div className="manyshow">
            <a href="" className="manyimga">
              <img
                className="img1"
                src={require("../../assets/imgs/9f076202208251158312764.jpeg")}
                alt=""
              />
            </a>
            <a href="" className="manyimga">
              <img
                className="img1"
                src={require("../../assets/imgs/a855a202208251135306738.jpeg")}
                alt=""
              />
            </a>
            <a href="" className="manyimga">
              <img
                className="img1"
                src={require("../../assets/imgs/dc90a20220825115330936.jpeg")}
                alt=""
              />
            </a>
          </div>
          {/* 列表内容  */}
          <Manypro />
        </div>
      </div>
      <Backtop />
      <Footer />
    </div>
  );
};
export default Many;
