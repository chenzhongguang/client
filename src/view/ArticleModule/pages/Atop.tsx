import React from "react";
import { Carousel } from "antd";

const contentStyle: React.CSSProperties = {
  height: "100%",
  width: "610px",
  color: "#fff",
  lineHeight: "406px",
  textAlign: "center",
  background: "#364d79",
};

export default function Atop() {
  return (
    <div className="atop">
      <Carousel
        autoplay
        arrows={true}
        style={{ width: "610px", height: "406px" }}
      >
        <div>
          <h3 style={contentStyle}>
            <div
              className="atop-m"
              style={{
                background: `url(${require("../../../assets/atop/1.jpeg")})`,
                width: "610px",
                height: "406px",
                backgroundSize: "100% 100%",
              }}
            >
              <h4>性能强悍&颜值在线!.敢做硬核承诺的水冷，就服它!难怪13代酷睿首发选择它</h4>
            </div>
          </h3>
        </div>
        <div>
          <h3 style={contentStyle}>
            <div
              className="atop-m"
              style={{
                background: `url(${require("../../../assets/atop/2.jpeg")})`,
                width: "610px",
                height: "406px",
                backgroundSize: "100% 100%",
              }}
            >
              <h4>Vespa劲敌,兰美达G350试驾感受，总结优点和不足</h4>
            </div>
          </h3>
        </div>
        <div>
          <h3 style={contentStyle}>
            <div
              className="atop-m"
              style={{
                background: `url(${require("../../../assets/atop/3.jpeg")})`,
                width: "610px",
                height: "406px",
                backgroundSize: "100% 100%",
              }}
            >
              <h4>双十一买点啥,细数我遇到的那些数码好物</h4>
            </div>
          </h3>
        </div>
        <div>
          <h3 style={contentStyle}>
            <div
              className="atop-m"
              style={{
                background: `url(${require("../../../assets/atop/4.jpeg")})`,
                width: "610px",
                height: "406px",
                backgroundSize: "100% 100%",
              }}
            >
              <h4>给地球装了一颗home键乔布斯的完美作品Apple Park</h4>
            </div>
          </h3>
        </div>
        <div>
          <h3 style={contentStyle}>
            <div
              className="atop-m"
              style={{
                background: `url(${require("../../../assets/atop/5.jpeg")})`,
                width: "610px",
                height: "406px",
                backgroundSize: "100% 100%",
              }}
            >
              <h4>蓝牙音响卷的不只是音质漫步者M10OPlus体验</h4>
            </div>
          </h3>
        </div>
      </Carousel>
      <div className="rtop">
        <div
          style={{
            background: `url(${require("../../../assets/1.jpeg")})`,
            width: "305px",
            height: "203px",
            backgroundSize: "100% 100%",
          }}
        >
          <p>抓住夏天的尾巴</p>
        </div>
        <div
          style={{
            background: `url(${require("../../../assets/2.jpeg")})`,
            width: "305px",
            height: "203px",
            backgroundSize: "100% 100%",
          }}
        >
          <p>iPhone 14——深度体验集合</p>
        </div>
        <div
          style={{
            background: `url(${require("../../../assets/3.jpeg")})`,
            width: "305px",
            height: "203px",
            backgroundSize: "100% 100%",
          }}
        >
          <p>iOS 16 值得升级吗</p>
        </div>
        <div
          style={{
            background: `url(${require("../../../assets/4.jpeg")})`,
            width: "305px",
            height: "203px",
            backgroundSize: "100% 100%",
          }}
        >
          <p>本月宜旅行</p>
        </div>
      </div>
    </div>
  );
}
