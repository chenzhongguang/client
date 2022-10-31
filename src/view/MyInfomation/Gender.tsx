import type { RadioChangeEvent } from 'antd';
import { Radio } from 'antd';
import React, { useState } from 'react';

const Gender: React.FC = () => {
  const [value, setValue] = useState(1);

  const onChange = (e: RadioChangeEvent) => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };

  return (
    <Radio.Group onChange={onChange} value={value}>
      <Radio value={1}>男</Radio>
      <Radio value={2}>女</Radio>
      <Radio value={3}>保密</Radio>
    </Radio.Group>
  );
};

export default Gender;