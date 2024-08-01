import React, { useEffect, useState } from 'react';

const UseState = () => {
  const [count, setCount] = useState(1);
  const [text, setText] = useState('');

  const handleClick = () => {
    setCount(count + 1);
  };

  const handleChange = (e) => {
    setText(e.target.value);
  };

  useEffect(() => {
    console.log(text);
  }, [text]); // text 상태가 업데이트 될 때만 체크한다.

  useEffect(() => {
    console.log(count);
  }, [count]); // count 상태가 업데이트 될 때만 체크한다.

  useEffect(() => {
    console.log('update'); // 초기 화면만 체크하고, 이후 상태변화는 체크하지 않음
  }, []);

  // console.log('updated!!');
  return (
    <div>
      <span>숫자: {count}</span>

      <button onClick={handleClick}>Click</button>
      <br />
      <br />

      <input type="text" onChange={handleChange} />
      <br />
      <br />
    </div>
  );
};

export default UseState;
