import { useState } from 'react';
import { Input } from 'antd';
import '../../../scss/interset/intersetIssue.scss';
const InterestIssue: React.FC = () => {
    const [value, setValue] = useState('');
    const { TextArea } = Input;
    return (
        <div className="issue">
            <div className="issue-top">
                <div className='issue-char'>
                    <TextArea
                        value={value}
                        onChange={e => setValue(e.target.value)}
                        placeholder="填写标题更容易上首页哦
                        
                        分享一下近期种草的宝藏产品吧！"
                        autoSize={{ minRows: 4, maxRows: 12 }}
                    />
                </div>
                <div className='issue-img'>

                </div>
            </div>
            <div className="issue-bottom">
                <div></div>
                <div className='iusse-bottom-box'>发布</div>
            </div>
        </div>
    );
}
export default InterestIssue;