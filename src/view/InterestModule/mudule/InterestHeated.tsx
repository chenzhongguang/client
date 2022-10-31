import '../../../scss/interset/interestheated.scss';
import { Link } from 'react-router-dom';
const InterestHeated: React.FC = () => {
    return (
        <div className='theated'>
            <div className='theated-box'>
                <span>正在热议</span>
            </div>
            <div className='theated-img'>
                <Link to={{ pathname: '/' }}>
                    <div>
                        <img src={require('../../../assets/img/10.jpeg')} alt="" />
                        <span>人生第一辆车</span>
                    </div>
                </Link>
                <Link to={{ pathname: '/' }}>
                    <div>
                    <img src={require('../../../assets/img/21.png')} alt="" />
                        <span>iphone 14 专区</span>
                    </div>
                </Link>
                <Link to={{ pathname: '/' }}>
                    <div>
                        <img src={require('../../../assets/img/22.png')} alt="" />
                        <span>尾巴车友会</span>
                    </div>
                </Link>
                 <Link to={{ pathname: '/' }}>
                    <div>
                        <img src={require('../../../assets/img/23.png')} alt="" />
                        <span>户外骑行</span>
                    </div>
                </Link>
            </div>
        </div>
    );

}
export default InterestHeated;
