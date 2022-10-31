import React,{useState}from 'react';
import { Carousel } from 'antd';
const Slideshow: React.FC = () => {
    const contentStyle: React.CSSProperties = {
        width:'1220px',
        transform:"scale(1.09)",
        height: '510px',
        color: '#fff',
        lineHeight: '510px',
        textAlign: 'center',
        background: '#364d79',
        margin: '50px auto',
    };
    const [slist, setSlist] = useState<string[]>([
        require("../../../assets/img/1.jpeg"),
        require("../../../assets/img/2.jpeg"),
        require("../../../assets/img/3.jpeg"),
        require("../../../assets/img/4.jpeg"),
        require("../../../assets/img/5.jpeg"),
      ]);
    
    return (
        <div className='Slideshow'>
            <Carousel autoplay>
                {slist.map((v, i) => {
                console.log(v);
                return (
                  <div key={i} className={"img-box" + i}>
                    <img src={v} alt="" style={contentStyle}></img>
                  </div>
                );
              })}

            </Carousel>
        </div>
    );
}
export default Slideshow;
