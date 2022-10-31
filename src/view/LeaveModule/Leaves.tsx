import Nav from "../../Components/Nav";
import Footer from "../../Components/Footer";
import Backtop from "../../Components/Backtop";
import "../../scss/leavemoud/leavem.scss";
import "../../scss/manymoudle/many.scss";
import LeaveCon from "../LeaveModule/LeaveCon";

const Leave: React.FC = () => {
	function manydown1() {

	}
	return (
		<div>
			<Nav />
			<div className="leave-box" style={{ marginTop: "60px" }}>
				<div className="manyboxx">
					<div className="many-nav">
						<div className="many-left">
							<h5>闲置</h5>
							<span>交易闲置好物</span>
						</div>
						<div className="many-right">
							<div className="manydown1" onClick={manydown1}>
								<span>发表闲置</span>
							</div>
						</div>
					</div>
				</div>
				<div className="leave-banner">
					<ul>
						<li>
							<a href="">
								<img src={require("../../assets/imgs/le1.png")} alt="" />
							</a>
						</li>
						<li>
							<a href="">
								<img src={require("../../assets/imgs/le2.jpeg")} alt="" />
							</a>
						</li>
						<li>
							<a href="">
								<img src={require("../../assets/imgs/le3.jpeg")} alt="" />
							</a>
						</li>
					</ul>
				</div>
				<div className="leave-content">
					<ul className="leave-nav">
						<li className="before">全部</li>
						<li>手机</li>
						<li>电脑</li>
						<li>平板</li>
						<li>外设</li>
						<li>影音</li>
						<li>相机</li>
						<li>生活</li>
						<li>汽车</li>
					</ul>
					<div className="leave-list">
						<LeaveCon />
					</div>
				</div>
			</div>
			<Backtop />
			<Footer />
		</div>
	);
};
export default Leave;
