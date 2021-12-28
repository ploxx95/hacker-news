import React from 'react'
import { Outlet } from 'react-router-dom';
import Sectioner from '../Sectioner'
import './Home.css';

function Home() {
  return (
    <div className="App">
      <header className=" header">
        <span className="HACKER-NEWS">HACKER NEWS</span>
      </header>
      <section className='container-home' >
        <div className='wrapper-sectioner'>
          <Sectioner to="/">All</Sectioner>
          <Sectioner to="/favorites" >My faves</Sectioner>
        </div>
        <Outlet />
      </section>
    </div>
  )
}

export default Home
