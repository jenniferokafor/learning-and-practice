import React from 'react';
import ReactDOM from 'react-dom';

import Info from './JS-components/info';
import About from './JS-components/about';
import Footer from './JS-components/footer';

import './CSS/index.css';

export default function App () {
  return (
    <div className='app-container'>
      <Info />
      <About />
      <Footer />
    </div>
  )
}
