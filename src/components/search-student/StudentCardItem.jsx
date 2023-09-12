import React from 'react';
import { QRCodeSVG } from 'qrcode.react';
import logo from '../../assets/img/logo-thieu-nhi-thanh-the.png';

export function StudentCardItem(props) {
  const {
    studentInfo: {
      id,
      fullName,
      grade,
      unit,
      teacher,
      teacherPhoneNumber,
      phoneNumbers,
    },
  } = props;
  return (
    <div className='m-auto border border-black w-[90mm] h-[60mm] py-2 px-3 relative'>
      {/* 1 cai the co id {id} */}
      <div className='flex justify-between items-center'>
        <img
          className='rounded-full border border-[#ff0000]'
          width={48}
          height={48}
          alt=''
          src={logo}
        />
        <div className='text-center block'>
          <p className='capitalize text-black'>giáo xứ bắc hải</p>
          <label className='uppercase font-bold text-[16px]'>
            thẻ học viên
          </label>
          <div className='w-24 border-b border-[#008000] m-auto' />
        </div>
        <div className='w-12' />
      </div>
      <div className='text-center font-bold text-[#00008b] text-[18px] whitespace-pre'>
        {fullName}
      </div>
      <div className='text-[16px] font-serif leading-normal'>
        <div className='flex gap-2'>
          <label className=''>Chi đoàn:</label>
          <label className='font-bold'>{grade}</label>
        </div>
        <div className='flex gap-2'>
          <label className=''>Phân đoàn:</label>
          <label className='font-bold capitalize'>{unit}</label>
        </div>
        <div className='flex gap-2'>
          <label className=''>Mã:</label>
          <label className='font-bold'>{id}</label>
        </div>
        <div className='flex gap-2'>
          <label className='flex'>ĐT Liên lạc:</label>
          <label className='font-bold'>{phoneNumbers.join(' - ')}</label>
        </div>
        <div className='flex gap-2 leading-tight'>
          <label className='w-24'>GL Viên:</label>
          <label className='font-bold'>
            {teacher} -{teacherPhoneNumber}
          </label>
        </div>
      </div>
      <div className='w-[60px] h-[60px] absolute right-4 top-[40%] bottom-10'>
        <QRCodeSVG
          value={`https://ccams.thongtinxuanloc.com/GXBACHAI/${id}`}
          size={60}
        />
      </div>
    </div>
  );
}
