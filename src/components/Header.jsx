import React from "react";
import logo from "../assets/img/logo_xoa_phong.png";
import { useLocation, useNavigate } from 'react-router-dom'

export const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <header className="header h-16 ring ring-slate-100 flex justify-between items-center px-4">
      <div className="flex items-center">
        <img alt="" src={logo} width={48} height={48} />
        <h2 className="pl-2 font-bold text-2xl uppercase">CCAMS BẮC HẢI</h2>
      </div>
      <div className="flex gap-2">
        <button
          className={location.pathname === '/' ? 'btn-primary--contained' : 'btn-primary--outlined'}
          onClick={() => navigate('/')}>
          Report
        </button>
        <button
          className={location.pathname === '/search' ? 'btn-primary--contained' : 'btn-primary--outlined'}
          onClick={() => navigate('/search')}
        >
          Search
        </button>
      </div>
    </header>
  );
};
