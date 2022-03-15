import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './components/navbar';
import Main from './components/main';

export default function App () {
    return (
        <div className='container'>
            <Navbar />
            <Main />
        </div>
    )
}