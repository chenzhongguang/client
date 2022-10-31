import Nav from "../../Components/Nav";
import Footer from "../../Components/Footer";
import Backtop from "../../Components/Backtop";
import Lun from "./Lun"
import "../../scss/video/vidnav.scss";
const Video: React.FC = () => {
  return (
    <div>
      <Nav />
      <div className="video-box" style={{ marginTop: "60px"}}>
        <div className="video-bbox">
          {/*导航栏 */}
          <div className="common-header2-wap">
            <div className="common-header2">
              <div className="left">
                <h5>视频</h5>
                <span>分享你的数字生活</span>
              </div>
            </div>
          </div>

          <div className="video-container">
            {/**轮播图 */}
            <div className="video-lunbo">
              <Lun />
            </div>
            {/**内容*/}
            <div className="video-content">
              <div className="video-title">推荐视频</div>
              <div className="video-list">
                <a href="" className="recommend-video-list-1">
                  <div className="radius-6px">
                    <img
                      src={require(`../../assets/images/v1.jpeg`)}
                      className="img-cover"
                    />
                  </div>
                  <h5 className="p-omit">
                    8 台影像旗舰手机大乱斗，谁是真正的六边形战士？
                  </h5>
                  <p>尾巴视频</p>
                </a>
                <a href="" className="recommend-video-list-1">
                  <div className="radius-6px">
                    <img
                      src={require(`../../assets/images/v2.jpeg`)}
                      className="img-cover"
                    />
                  </div>
                  <h5 className="p-omit">
                    8 台影像旗舰手机大乱斗，谁是真正的六边形战士？
                  </h5>
                  <p>尾巴视频</p>
                </a>
                <a href="" className="recommend-video-list-1">
                  <div className="radius-6px">
                    <img
                      src={require(`../../assets/images/v3.jpeg`)}
                      className="img-cover"
                    />
                  </div>
                  <h5 className="p-omit">
                    8 台影像旗舰手机大乱斗，谁是真正的六边形战士？
                  </h5>
                  <p>尾巴视频</p>
                </a>
              </div>
            </div>

            <div className="load-more">
                <div className="loading">加载更多</div>
            </div>
          </div>
        </div>

        
      </div>
      <Backtop />
      <Footer />
    </div>
  );
};
export default Video;
