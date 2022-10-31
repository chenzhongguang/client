import axios from "axios";
import { useEffect, useState } from "react";

interface userinter{
    uid:number,
    username:string,
    avatar:string,
}
//你可能感兴趣的标签
const IntersetTitle1: React.FC = () => {
    const [userinter, setuserinter] = useState<userinter[]>([]);
    async function getData() {
        axios.defaults.withCredentials = true;
        const url = "http://localhost:7001/userinter.do";
        const promise = axios.get(url);
        let res = await promise;
        setuserinter(res.data);
    }
    function userinterFn() {
        getData();
    }
    function daleteFn(e:any) {
        console.log((e.target as HTMLElement).dataset.key);
        let a = (e.target as HTMLElement).dataset.key as unknown as number;
        let arr = [...userinter];
        arr.splice(a,1);
        setuserinter(arr);  
    }
    useEffect(function () {
        getData();
        console.log(111);

    }, []);
    return (
        <div className='intersettitle'>
            <div className='interset-title'>
                <div>你可能感兴趣的标签</div>
                <div>
                    <span>图</span>
                    <span onClick={userinterFn}>换一组</span>
                </div>
            </div>
            <div className='interset-space'>
                {
                    userinter.map((v, i) => {
                        return (
                            <div className='user' key={i}>
                                <div className='user-head'>
                                    <div className='img-box'>
                                        <img src={userinter[i].avatar} alt="" />
                                    </div>
                                    <div className='img-char'>
                                        <span>
                                        {userinter[i].username}
                                        </span>
                                        <span>41672关注</span>
                                    </div>
                                </div>
                                <div className='user-attention'>
                                    <div className='attention-box'>关注</div>
                                    <div className='x' onClick={daleteFn} data-key={i}>X</div>
                                </div>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    );
}
export default IntersetTitle1;