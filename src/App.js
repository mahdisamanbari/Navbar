import React from 'react';
import { useState } from 'react';

const App = () => {
  const [active,setActive]=useState(false);
  return (
    <>
    <nav>
      <div className='logo'>
        Mahdi Samanbari
      </div>
      <ul className={active ? 'active': ''}>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Services</li>
      </ul>
      <div onClick={()=>setActive(!active)} className='menus'>
        <i class="fa-solid fa-bars"></i>
      </div>
    </nav>
      
    </>
  );
};

export default App;