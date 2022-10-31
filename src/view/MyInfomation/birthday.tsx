import type { DatePickerProps } from 'antd';
import { DatePicker, Space } from 'antd';
import React from 'react';

const onChange: DatePickerProps['onChange'] = (date, dateString) => {
  console.log(date, dateString);
};

const Birth: React.FC = () => (
  <Space direction="vertical">
    <DatePicker onChange={onChange} />
    
  </Space>
);

export default Birth;