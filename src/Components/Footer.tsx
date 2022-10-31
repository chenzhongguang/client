import React from "react";
import {
  SignalFilled,
  WechatFilled,
  WeiboSquareFilled,
} from "@ant-design/icons";
import "../styles/Footer.scss";
export default function Footer() {
  return (
    <div className="footer">
      <div className="fo-content">
        <div className="l">
          <div className="logo">
            <h1>数字尾巴</h1>
          </div>
          <div className="footer-icon">
            <SignalFilled />
            <WechatFilled style={{ margin: "0 10px" }} />
            <WeiboSquareFilled />
          </div>
          <div className="footer-link">
            <span>02010-2022DGtle.com</span>
            <span>CC BY-NC-SA 4.0</span>
            <span>粤ICP备13000416号</span>
            <span>粤公网安备 44030502003857 号</span>
          </div>
        </div>
        <div className="r">
          <ul>
            <li>
              <p>合作伙伴</p>
              <span>又拍云</span>
              <span>七牛云</span>
              <span>GEETEST</span>
              <span>上直播</span>
            </li>
            <li>
              <p>商务合作</p>
              <span>联系我们</span>
              <span>为什么选择数字尾巴？</span>
            </li>
            <li>
              <p>关于我们</p>
              <span>关于数字尾巴</span>
              <span>客户端下载</span>
              <span>软件许可及服务协议</span>
              <span>隐私保护政策</span>
              <span>社区准则</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
