import axios from "axios";
import { useEffect, useState } from "react";
import "../../scss/manymoudle/manypro.scss";
interface arrI {
  aid: number,
  category: number,
  title: string,
  mainpic: string,
  content: string,
}
const LeaveCon: React.FC = () => {
  const [arr, setarr] = useState<arrI[]>([]);
  let arr1 = new Array;
  async function getData() {
    axios.defaults.withCredentials = true;
    const url = "http://localhost:7001/manydata.do";
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
    if (arr[i].category == 6) {
      // 文章
      return <li className="manyli">
        <a href="" className="manyimga">
          <img
            className="img1"
            src={arr[i].mainpic}
            alt=""
          />
        </a>
        <div className="manysmalltitle">标题</div>
        <div className="manylast">
          <div className="manyprice">
            ￥299.
            <span className="many00">00</span>
          </div>
        </div>
        <div className="manyfooter">
          <span className="manynamesum">广东省 深圳市</span>
          <span>1分钟前 . 随风</span>
        </div>
      </li>
    }
  }
  return (
    <div>
      <div className="manylist">
        <ul className="manymorepro">
          {
            arr.map((v, i) => {
              let div = arrFn(v, i);
              return div;
            })
          }
        </ul>
        <div className="manydown" onClick={manydown}>
          <span>加载更多</span>
        </div>
      </div>
    </div>
  );
};
export default LeaveCon;
