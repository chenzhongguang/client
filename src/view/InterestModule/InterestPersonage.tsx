import { useState, useEffect } from 'react';
import axios from 'axios';
import Nav from "../../Components/Nav";
import Footer from "../../Components/Footer";
import Backtop from "../../Components/Backtop";
import '../../scss/interset/interset.scss';
import {
    Link, useParams,
} from 'react-router-dom';
interface messageI {
    aid: number,
    avatar: string,
    category: string,
    content: string,
    mainpic: string,
    title: string,
    uid: string,
    username: string,
    introduce:string
}

const Interest: React.FC = () => {
    let person = useParams().aid;
    const [show, setshow] = useState<boolean>(true);
    const [message, setmessage] = useState<messageI[]>([]);
    async function getMessage() {
        console.log(111);

        axios.defaults.withCredentials = true;
        const url = "http://localhost:7001/message.do";
        const promise = axios.post(url, { person });
        let res = await promise;
        console.log(res);
        setmessage(res.data);
        let list = res.data;
    }
    useEffect(function () {
        getMessage();
    }, []);
    return (
        <div className='interest-box'>
            <Nav />
            <div className='idle-top'>
                <div className='inter'>
                    <div className='inter-box'>
                        <div>兴趣</div>
                        <span>|</span>
                        <span>随时.发现.分享</span>
                    </div>
                    <div className='inter-box1'>
                        <Link to={{ pathname: '/interest' }}>
                            兴趣首页
                        </Link>
                    </div>
                </div>
            </div>
            <div className='idle-bottom'>
                <div className='interest-index'>
                    {
                        message.map((v, i) => {
                            return (
                                <>
                                    <div className='interest-left'>
                                        <div className='interest-five1'>
                                            <div className="hot-box">
                                                <div className="hot-top">
                                                    <div className="hot-top-left">
                                                        <div className='hot-img'>
                                                            <img src={message[i].avatar} alt="" />
                                                        </div>
                                                        <div className='hot-user'>
                                                            <div className='user-box'>
                                                                <span>{message[i].username}</span>
                                                            </div>
                                                            <div className='user-time'>
                                                                <span>4小时前</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="hot-top-rigth">
                                                        <div className='hot-top-rigth-g'>关注</div>
                                                        <div className='hot-top-rigth-d'>
                                                            <div></div>
                                                            <div></div>
                                                            <div></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="hot-bottom">
                                                    <div className='hot-title'>{message[i].title}</div>
                                                    <div className='hot-title-img'>
                                                        <div><img src="" alt="" /></div>
                                                        <div><img src="" alt="" /></div>
                                                        <div><img src="" alt="" /></div>
                                                        <div><img src="" alt="" /></div>
                                                        <div><img src="" alt="" /></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='interest-rigth'>
                                        <div className='rigth-one1'>
                                            <div className='user-pop-up'>
                                                <div className="pop-up-img">
                                                    <img src={message[i].avatar} alt="" />
                                                </div>
                                                <div className="pop-up-box">
                                                    <div className="title">{message[i].username}</div>
                                                    <div className="small-box">{message[i].introduce}</div>
                                                </div>
                                            </div>
                                            <div className='user-p'>内容获得249次赞·0次精选</div>
                                            <div className='user-ul'>
                                                <ul>
                                                    <li className='li'>
                                                        <div>粉丝</div>
                                                        <div className='black-box'>100</div>
                                                    </li>
                                                    <li >
                                                        <div>关注</div>
                                                        <div className='black-box'>10</div>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className='user-attention'>
                                                <div className='grenn'>关注</div>
                                                <div className='yeloow'>私信</div>
                                            </div>
                                        </div>
                                    </div>
                                </>

                            )
                        })
                    }

                </div>
            </div>
            <Backtop />
            <Footer />
        </div>
    );
}
export default Interest;
