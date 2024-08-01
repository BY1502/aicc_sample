import React from 'react';

const Section = ({ title, color, contents, articles }) => {
  // console.log(section);
  const num = 11;
  return (
    <>
      <div></div>
      <div className="section">
        <h2>{title}</h2>
        <p>{contents}</p>
        <ul>
          {articles.map((article, idx) => (
            <li key={idx}>{article}</li>
          ))}
        </ul>
        <p>
          {num}은 {num % 2 === 0 ? '짝수' : '홀수'} 입니다.
        </p>
      </div>
    </>
  );
};

export default Section;
