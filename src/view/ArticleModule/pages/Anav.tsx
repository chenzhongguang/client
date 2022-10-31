import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
export default function Anav() {
  return (
    <div className="anav">
      <div className="swiper-container">
        <Swiper
          slidesPerView={10.4}
          spaceBetween={20}
          pagination={{
            clickable: true,
          }}
          className="mySwiper"
        >
          <SwiperSlide>
            <div
              style={{
                background: `url(${require("../../../assets/anav/all.png")})`,
                width: "81px",
                height: "50px",
                backgroundSize: "100% 100%",
              }}
            >
              <h3>全部</h3>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              style={{
                background: `url(${require("../../../assets/anav/shuma.png")})`,
                width: "81px",
                height: "50px",
                backgroundSize: "100% 100%",
              }}
            >
              <h3>数码</h3>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              style={{
                background: `url(${require("../../../assets/anav/yun.png")})`,
                width: "81px",
                height: "50px",
                backgroundSize: "100% 100%",
              }}
            >
              <h3>平板</h3>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              style={{
                background: `url(${require("../../../assets/anav/diannao.png")})`,
                width: "81px",
                height: "50px",
                backgroundSize: "100% 100%",
              }}
            >
              <h3>笔电</h3>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              style={{
                background: `url(${require("../../../assets/anav/shexj.png")})`,
                width: "81px",
                height: "50px",
                backgroundSize: "100% 100%",
              }}
            >
              <h3>周边</h3>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              style={{
                background: `url(${require("../../../assets/anav/shexj.png")})`,
                width: "81px",
                height: "50px",
                backgroundSize: "100% 100%",
              }}
            >
              <h3>视频</h3>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              style={{
                background: `url(${require("../../../assets/anav/sse.png")})`,
                width: "81px",
                height: "50px",
                backgroundSize: "100% 100%",
              }}
            >
              <h3>摄影</h3>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              style={{
                background: `url(${require("../../../assets/anav/che.jpeg")})`,
                width: "81px",
                height: "50px",
                backgroundSize: "100% 100%",
              }}
            >
              <h3>汽车</h3>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              style={{
                background: `url(${require("../../../assets/anav/jiaz.jpeg")})`,
                width: "81px",
                height: "50px",
                backgroundSize: "100% 100%",
              }}
            >
              <h3>家装</h3>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              style={{
                background: `url(${require("../../../assets/anav/yund.jpeg")})`,
                width: "81px",
                height: "50px",
                backgroundSize: "100% 100%",
              }}
            >
              <h3>活动</h3>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              style={{
                background: `url(${require("../../../assets/anav/gaung.png")})`,
                width: "81px",
                height: "50px",
                backgroundSize: "100% 100%",
              }}
            >
              <h3>官方</h3>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              style={{
                background: `url(${require("../../../assets/anav/lvxing.png")})`,
                width: "81px",
                height: "50px",
                backgroundSize: "100% 100%",
              }}
            >
              <h3>旅行</h3>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              style={{
                background: `url(${require("../../../assets/anav/pengzai.png")})`,
                width: "81px",
                height: "50px",
                backgroundSize: "100% 100%",
              }}
            >
              <h3>其他</h3>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              style={{
                background: `url(${require("../../../assets/anav/yingyong.png")})`,
                width: "81px",
                height: "50px",
                backgroundSize: "100% 100%",
              }}
            >
              <h3>应用</h3>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              style={{
                background: `url(${require("../../../assets/anav/wanju.png")})`,
                width: "81px",
                height: "50px",
                backgroundSize: "100% 100%",
              }}
            >
              <h3>玩物</h3>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              style={{
                background: `url(${require("../../../assets/anav/beizi.png")})`,
                width: "81px",
                height: "50px",
                backgroundSize: "100% 100%",
              }}
            >
              <h3>生活</h3>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              style={{
                background: `url(${require("../../../assets/anav/wanju.png")})`,
                width: "81px",
                height: "50px",
                backgroundSize: "100% 100%",
              }}
            >
              <h3>文具</h3>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              style={{
                background: `url(${require("../../../assets/anav/yy.png")})`,
                width: "81px",
                height: "50px",
                backgroundSize: "100% 100%",
              }}
            >
              <h3>影音</h3>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              style={{
                background: `url(${require("../../../assets/anav/mao.jpeg")})`,
                width: "81px",
                height: "50px",
                backgroundSize: "100% 100%",
              }}
            >
              <h3>萌宠</h3>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              style={{
                background: `url(${require("../../../assets/anav/yifu.png")})`,
                width: "81px",
                height: "50px",
                backgroundSize: "100% 100%",
              }}
            >
              <h3>穿搭</h3>
            </div>
          </SwiperSlide> <SwiperSlide>
            <div
              style={{
                background: `url(${require("../../../assets/anav/cher.png")})`,
                width: "81px",
                height: "50px",
                backgroundSize: "100% 100%",
              }}
            >
              <h3>露营</h3>
            </div>
          </SwiperSlide> <SwiperSlide>
            <div
              style={{
                background: `url(${require("../../../assets/anav/yund.jpeg")})`,
                width: "81px",
                height: "50px",
                backgroundSize: "100% 100%",
              }}
            >
              <h3>活动</h3>
            </div>
          </SwiperSlide> <SwiperSlide>
            <div
              style={{
                background: `url(${require("../../../assets/anav/all.png")})`,
                width: "81px",
                height: "50px",
                backgroundSize: "100% 100%",
              }}
            >
              <h3>沙龙</h3>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
