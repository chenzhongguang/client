import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Checkbox, Form, Input } from 'antd';
import axios from "axios";
import { listenerCount } from "process";
import "../../scss/moudle/login.scss"
const Login: React.FC = () => {
    const [no, setNo] = useState<string>("");
    const [sno, setSno] = useState<string>("");
    const [gno, setGno] = useState<string>("发送验证码");

    const navigate = useNavigate();
    const onFinish = (values: any) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };
    async function getm() {
        setGno("获取验证码");
        // 手机号no 发送请求
        axios.defaults.withCredentials=true;
        const url = "http://localhost:7001/login.do"
        const promise = axios.post(url, { no });
        let res = await promise;
        let list = res.data;
        console.log(list);
        window.localStorage.setItem(list,list)
        
    };
    async function login(e: any) {
        e.preventDefault();
        try {
            //拿到no  sno 进行登录
            axios.defaults.withCredentials=true;
            const url = "http://localhost:7001/susslogin.do"
            const promise = axios.post(url, { no, sno });
            let res = await promise;
            let list = res.data
            console.log(res);
            // if(){

            // }
            // 登录成功，进入主页
            // if(listenerCount.length ==1){
            navigate({ pathname: "/" })

            // }else {
            //     setMsg("登录异常")
            // }
        } catch (e) {
            console.log(e);

        }

    }
    return (
        <div className="login">
            <div className="loginwrap">
                <img className="img1" src={require("../../assets/imgs/src=http___login.webp")} alt="" />
                <div className="loginshow">
                    <img className="logo" src={require("../../../src/assets/imgs/dgtle-logo-2.webp")} alt="" />
                    <p className="yz">手机验证登录</p>
                    <div>
                        <input className="input1" type="tel" value={no} onChange={(e: any) => { setNo(e.target.value) }} placeholder="请输入您的手机号" /><br />
                        <input className="input1 input2" type="text" value={sno} onChange={(e: any) => { setSno(e.target.value) }} placeholder="输入验证码" />
                        <button onClick={getm} className='getcode'>{gno}</button><br />
                        <div onClick={login} className="input1 input3">登录</div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Login;
