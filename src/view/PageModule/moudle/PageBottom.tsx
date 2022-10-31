import '../../../scss/Pagemoudle/pagebottom.scss';
import {
    Link,
} from 'react-router-dom';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
interface arrI {
    aid: number,
    category: number,
    title: string,
    mainpic: string,
}
const PageBottom: React.FC = () => {
    const [arr, setarr] = useState<arrI[]>([]);
    let arr1 = new Array;
    async function getData() {
        axios.defaults.withCredentials = true;
        const url = "http://localhost:7001/alldata.do";
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
    function arrFn(v: any, i: any) {
        if (arr[i].category == 1) {
            // 文章
            return <div key={i} className="big-box1">
                <div className='big-tilte'>
                    <img src={arr[i].mainpic} alt="" />
                    <div className='big-tilte-box'>
                        {arr[i].title}
                    </div>
                    <div className='big-tilte-acrtile'>文章</div>
                    <div className='big-tilte-bottom'><span>泡菜坛子哥哥 · 1小时前</span></div>
                </div>
            </div>
        } else if (arr[i].category == 2) {
            // 兴趣
            return <div key={i} className="big-box2">
                <div className='big-tilte'>
                    <img src={arr[i].mainpic} alt="" />
                    <div className='big-tilte-box'>
                        {arr[i].title}
                    </div>
                    <div className='big-tilte-acrtile'>兴趣动态</div>
                    <div className='big-tilte-bottom'><span>泡菜坛子哥哥 · 1小时前</span></div>
                </div>
            </div>
        }
        else if (arr[i].category == 3) {
            // 咨讯
            return <div key={i} className="big-box3">
                <img src={arr[i].mainpic} alt="" />
                <div className='big-tilte'>
                    <div className='big-tilte-box'>
                        {arr[i].title}
                    </div>
                    <div className='big-tilte-acrtile'>咨讯</div>
                    <div className='big-tilte-bottom'><span>泡菜坛子哥哥 · 1小时前</span></div>
                </div>
                <div className='big-black'></div>
            </div>
        }
    }
    return (
        <div className='page-center'>
            <div className='page-center-box1'>
                <div className='box1-left'>
                    <Link to={{ pathname: '/whale' }}>
                    <div className='black-box'></div>
                        <div className='span-img'>
                            <img src={require('../../../assets/img/6.jpeg')} alt="" />
                        </div>
                        <div className='span-ip1'>
                            <div className='box-21'>21</div>
                            <div className='box-22'>
                                <span>Oct</span>
                                <span>2022</span>
                            </div>
                        </div>
                        <div className='span-ip2'>
                            苹果 iPad 10 和 iPad Pro 2022 首批订单进入「准备发货」状态
                        </div>
                        <div className='span-ip3'>——相关新闻报道</div>
                    </Link>
                </div>
                <div className='box1-rigth'>
                    <div className='box1-rigth-a'>
                        <div className='rigth-a-top'>
                            <div className='rigth-m'>
                                <Link to={{ pathname: '/whale' }}>
                                    <div className='span-img'>
                                    <div className='black-box'></div>
                                        <img src={require('../../../assets/img/7.jpeg')} alt="" />
                                        <span>#鲸闻</span>
                                    </div>
                                </Link>
                                <Link to={{ pathname: '/many' }}>
                                    <div className='span-img'>
                                        <div className='black-box'></div>
                                        <img src={require('../../../assets/img/8.jpeg')} alt="" />
                                        <span>#众测</span>
                                    </div>
                                </Link>
                            </div>
                            <div className='rigth-n'>
                                <Link to={{ pathname: '/leave' }}>
                                    <div className='span-img'>
                                    <div className='black-box'></div>
                                        <img src={require('../../../assets/img/9.jpeg')} alt="" />
                                        <span>#尾巴收回</span>
                                    </div>
                                </Link>

                            </div>
                        </div>
                        <div className='rigth-a-bottom'>
                            <Link to={{ pathname: '/interest' }}>
                                <div className='span-img'>
                                <div className='black-box'></div>
                                    <img src={require('../../../assets/img/10.jpeg')} alt="" />
                                    <span>#分享人生第一辆车</span>
                                </div>
                            </Link>

                        </div>
                    </div>
                    <div className='box1-rigth-b'>
                        <div className='rigth-b-img'>
                        <div className='black-box'></div>
                            <img src={require('../../../assets/img/11.jpeg')} alt="" />
                        </div>
                        <div className='character'>
                            <i></i>
                            <div>
                                <h5>拍了629张照片，我们终于对比出天玑和高通的影像区别</h5>
                                <span>视频</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='page-center-box2'>
                {
                    arr.map((v, i) => {
                        let div = arrFn(v, i);
                        return div;
                    })
                }
            </div>
            <div className='loading-box'>
                <div className='loading-content' onClick={clickFn}>加载更多</div>
            </div>
        </div>
    );
}
export default PageBottom;
