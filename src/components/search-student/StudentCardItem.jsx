import React from 'react';
import logo from '../../assets/img/logo-thieu-nhi-thanh-the.png';
import { QRCodeSVG } from 'qrcode.react';

export const StudentCardItem = (props) => {
  const { studentInfo: { id } } = props
  return (
    <div className='border border-black w-[86mm] h-[54mm] py-1 px-2 relative'>
      {/* 1 cai the co id {id} */}
      <div className='flex justify-between items-center'>
        <img className='rounded-full border border-[#ff0000]' width={48} height={48} alt="" src={logo} />
        <div className='text-center block'>
          <p className='capitalize'>giáo xứ bắc hải</p>
          <label className='uppercase font-bold text-[18px]'>thẻ học viên</label>
          <div className='w-24 border-b border-black m-auto pt-1'></div>
        </div>
        <div className='w-12' />
      </div>
      <div className='text-center pt-1 font-bold text-[#00008b] text-[18px]'>Maria Trần Nhã Uyên</div>
      <div className='text-[12px] font-serif'>
        <div className='flex'>
          <label className='flex w-8'>Lớp:</label>
          <label className='font-bold'>A3</label>
        </div>
        <div className='flex'>
          <label className='flex w-8'>Khối:</label>
          <label className='font-bold capitalize'>Ấu nhi 2</label>
        </div>
        <div className='flex'>
          <label className='flex w-8'>Mã:</label>
          <label className='font-bold'>{id}</label>
        </div>
        <div className='flex'>
          <label className='flex w-16'>ĐT Liên lạc:</label>
          <label className='font-bold'>0123456789</label>
        </div>
        <div className='flex'>
          <label className='flex w-12'>GL Viên:</label>
          <label className='font-bold'>Đaminh Phạm Công Dân - <br />0345202984</label>
        </div>
      </div>
      <div className='absolute right-5 top-[45%] bottom-10'>
        <QRCodeSVG value={`https://ccams.thongtinxuanloc.com/GXBACHAI/${id}`} size={60} />
      </div>
    </div>
  )
}
