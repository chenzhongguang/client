import { Carousel } from 'antd';
import React from 'react';

const contentStyle: React.CSSProperties = {
    height: '510px',
    color: '#fff',
    lineHeight: '510px',
    textAlign: 'center',
    background: '#364d79',
    
};

const App: React.FC = () => (
    <Carousel autoplay>
        <div style={{width:"1200px",
                    height:"510px",
                    
                    }}>
        <h3 style={contentStyle}><img src={require(`../../assets/images/vl1.jpeg`)} alt="" /></h3>
        </div>
        <div>
            <h3 style={contentStyle}><img src={require(`../../assets/images/vl2.jpeg`)} alt="" /></h3>
        </div>
    </Carousel>
);

export default App;