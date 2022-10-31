import axios from "axios";
import { useEffect, useState } from "react";
import "../../../scss/manymoudle/manyenjoy.scss";
interface arrI {
  aid: number,
  category: number,
  title: string,
  mainpic: string,
  content: string,
}
const ManyEnjoy: React.FC = () => {
  const [arr, setarr] = useState<arrI[]>([]);
  let arr1 = new Array;
  async function getData() {
    axios.defaults.withCredentials = true;
    const url = "http://localhost:7001/leavedata.do";
    let len = arr.length;
    console.log(len);

    const promise = axios.post(url, { len });
    let res = await promise;
    let arr1 = res.data;
    console.log(arr1);
    setarr(arr.concat(arr1));
  }
  useEffect(function () {
    getData();
  }, []);
  function clickFn() {
    getData();
  };
  function manydown() {
    return;
  }
  function arrFn(v: any, i: any) {
    if (arr[i].category == 8) {
      // 文章
      return <li className="manyli1">
        <a href="" className="manyimga1">
          <img
            className="img11"
            src={arr[i].mainpic}
            alt=""
          />
        </a>
        <div className="manysmalltitle">{arr[i].title}</div>
        <p className="manyfooter">
          {arr[i].title}
        </p>
        <div className="manylast">
          <div className="manyprice2">
            <span>小艾同学</span>
            <span className="many00">. 一个月前</span>
          </div>
          <div className="manyprice">
            <div>
              <span>图标</span>
              <span>点赞11</span>
            </div>
            <div>
              <span>图标</span>
              <span>聊天9</span>
            </div>
          </div>
        </div>
      </li>
    }
  }

  return (
    <div className="manylist1">
      <div className="manypro">
        <p className="manytitle">众测体验</p>
        <a className="manymore">更多体验&nbsp; &gt;</a>
      </div>
      <ul className="manymorepro">
        {
          arr.map((v, i) => {
            let div = arrFn(v, i);
            return div;
          })
        }
      </ul>
      <div className="manydown" onClick={manydown}>
        <span onClick={clickFn}>加载更多</span>
      </div>
    </div>
  );
};
export default ManyEnjoy;
