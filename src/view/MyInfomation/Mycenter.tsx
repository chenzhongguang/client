import { useNavigate } from "react-router-dom";
import "../../scss/mycanter/infomation.scss";
const Mycenter: React.FC = () => {
  const navigate = useNavigate();
  function mycenter(){
    navigate({ pathname: "/editinfo" })
  }
  return (
    <div className="my-infomation">
      <div className="mycover">
        <img src={require(`../../assets/images/my1.jpg`)} alt="" />
        <div className="myrevise">修改封面</div>
      </div>
      <div className="my-content">
        <div className="content-left">
          <div className="myavatar">
            <img src={require(`../../assets/images/avatar.gif`)} alt="" />
          </div>
          <div className="ueser-name">晚风</div>
        </div>
        <div className="content-right" onClick={mycenter}>编辑个人资料</div>
        <div className="myinfomodule">
          <div className="myfan">
            <div className="ss">粉丝</div>
            <div className="ww">0</div>
          </div>
          <div className="myattion">
            <div className="ss">我的关注</div>
            <div className="ww">0</div>
          </div>
        </div>
      </div>
      <div className="mytitle">
        <ul className="items">
          <li>文章</li>
          <li>兴趣</li>
          <li>众测</li>
          <li>活动</li>
          <li>闲置</li>
          <li>关注</li>
          <li>收藏</li>
        </ul>
      </div>
    </div>
  );
};
export default Mycenter;
