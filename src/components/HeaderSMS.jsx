import React from 'react';
import { Outlet } from 'react-router-dom';
import logo from '../assets/img/logo-thieu-nhi-thanh-the.png';

function HeaderSMS() {
  return (
    <>
      <header className='header h-16 ring ring-slate-100 flex justify-between items-center px-4'>
        <div className='flex items-center'>
          <img alt='' src={logo} width={48} height={48} className='' />
          <h2 className='pl-2 font-bold text-base lg:text-xl uppercase'>
            Tra cứu thông tin sa mạc sinh giáo phận Xuân Lộc
          </h2>
        </div>
      </header>
      <Outlet />
    </>
  );
}

export default HeaderSMS;
