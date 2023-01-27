import React from "react";
import logo from "../assets/img/logo_xoa_phong.png";
import { useNavigate } from 'react-router-dom'

export const Header = () => {
  const navigate = useNavigate();
  return (
    <header className="header h-16 ring ring-slate-100 flex justify-between items-center px-4">
      <div className="flex items-center">
        <img alt="" src={logo} width={48} height={48} />
        <h2 className="pl-2 font-bold text-2xl uppercase">CCAMS BẮC HẢI</h2>
      </div>
      <div className="flex gap-2">
        <button
          className="px-3 py-2 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 shadow-none"
          onClick={() => navigate('/report')}>
          Report
        </button>
        <button
          className="px-3 py-2 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 shadow-none"
          onClick={() => navigate('/search')}>
          Search
        </button>
      </div>
    </header>
  );
};
