import React from "react";
import logo from "../assets/img/logo_xoa_phong.png";

export const Header = () => {
  return (
    <div className="header h-16 ring ring-slate-100 flex justify-between">
      <div className="flex items-center">
        <img alt="" src={logo} width={48} height={48} />
        <h2 className="pl-2 font-bold text-2xl uppercase">Dự án thế kỷ</h2>
      </div>
    </div>
  );
};
