import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Section from './components/Section';
import Sidebar from './components/Sidebar';
import { sectionProps } from './constants/json';
import UseState from './components/UseState';
import Timer from './components/Timer';
import { useState } from 'react';

// console.log(sectionProps);

const App = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="App">
      {/* <Sidebar /> */}
      {/* header */}
      {/* <Header /> */}
      {/* section slider */}
      {/* <Section title="slider" color="lightblue" /> */}
      {/* section product */}
      {/* <Section title="product" color="aqua" /> */}
      {/* section blog */}
      {/* <Section title="blog" color="indigo" contents="slider contents" /> */}
      {/* {sectionProps.map((section, idx) => (
        // <Section key={idx} section={section} />
        <Section
          key={idx}
          title={section.title}
          color={section.color}
          contents={section.contents}
          articles={section.articles}
        />
      ))} */}
      {/* footer */}
      {/* <Footer /> */}

      <UseState />
      <button onClick={() => setShow(!show)}>시계 토글</button>

      {show && <Timer />}
    </div>
  );
};

export default App;
