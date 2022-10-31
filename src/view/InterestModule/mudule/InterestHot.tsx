import '../../../scss/interset/interesthot.scss';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
interface hotI{
	aid:number,
	category:number,
	content:string,
	mainpic:string,
	title:string,
	uid:number,
	avatar:string,
	username:string,
}
const InterestHot: React.FC = () => {
	const [hot, sethot] = useState<hotI[]>([]);
	async function getData() {
		axios.defaults.withCredentials = true;
		const url = "http://localhost:7001/hot.do";
		const promise = axios.get(url);
		let res = await promise;
		sethot(res.data);
		console.log(res);
	}
	useEffect(function () {
		getData();
	}, []);
	// {/* 热门 */}
	return (
		<div className="hot">
			{
				hot.map((v, i) => {
					return (
						<div className="hot-box" key={i}>
							<Link to={{ pathname: `/interestpersonage/${hot[i].aid}` }}>
								<div className="hot-top">
									<div className="hot-top-left">
										<div className='hot-img'>
											<img src={hot[i].avatar} alt="" />
										</div>
										<div className='hot-user'>
											<div className='user-box'>
												<span>{hot[i].username}</span>
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
									<div className='hot-title'>
										{hot[i].title}
									</div>
									<div className='hot-title-img'>
										<div><img src="" alt="" /></div>
										<div><img src="" alt="" /></div>
										<div><img src="" alt="" /></div>
										<div><img src="" alt="" /></div>
										<div><img src="" alt="" /></div>
									</div>
								</div>
							</Link>

						</div>
					);
				})
			}

		</div>
	);
}
export default InterestHot;