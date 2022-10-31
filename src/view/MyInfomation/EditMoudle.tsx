import Nav from "../../Components/Nav";
import Footer from "../../Components/Footer";
import Backtop from "../../Components/Backtop";
import "../../scss/mycanter/infomodule.scss"
import Avatar from "./avatar";
import Gender from "./Gender";
import Birth from "./birthday";
const Info: React.FC = () => {
    return (
        <div>
            <Nav />
            <div className="video-box" style={{ marginTop: "60px" }}>
                <div className="info-container">
                    <div className="infonav">
                        <ul className="info">
                            <li>个人资料</li>
                            <li>账号安全</li>
                            <li>消息设置</li>
                            <li>管理黑名单</li>
                        </ul>
                    </div>

                    <div className="info-bottom">
                        <div className="info-avatar">
                            <Avatar />
                        </div>
                        <div className="info-content">
                            <div className="info-nickname">
                                <div className="nickleft">昵称</div>
                                <div className="nickright">晚风</div>
                            </div>
                            <div className="info-gender">
                                <div className="gender-left">性别</div>
                                <div className="gender-right">
                                    <Gender />
                                </div>
                            </div>
                            <div className="info-gender">
                                <div className="gender-left">出生日期</div>
                                <div className="gender-right">
                                    <Birth />
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
export default Info;
