import React, { useState, useEffect } from "react";
import { Spin } from "antd";
export default function Loading() {
  // 加载
  const [load, setLoad] = useState<boolean>(true);
  function updateLoading() {
    if (load) {
      setLoad(false);
    } else {
      setLoad(true);
    }
  }
  function show() {
    if (load) {
      return <div className="loading-content"> 加载更多 </div>;
    } else {
      return (
        <div className="loading-icon">
          <div className="example" style={{ margin: "auto" }}>
            <Spin />
          </div>
        </div>
      );
    }
  }
  function changeLoad() {
    let timer = window.setInterval(() => {
      setLoad(true);
    }, 3000);
    return () => {
      // 关闭定时器
      window.clearInterval(timer);
    };
  }
  // 监听
  useEffect(changeLoad, [load]);

  return (
    <div className="loading-box" onClick={updateLoading}>
      {show()}
    </div>
  );
}
