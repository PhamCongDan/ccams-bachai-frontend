import React, { useEffect, useState } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import logo from '../assets/img/logo_xoa_phong.png';
import { SelectBox } from './common/SelectBox';
import { SelectBoxItem } from './common/SelectBoxItem';
import * as appAction from '../modules/app';

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const [activeUnit, setActiveUnit] = useState('');
  const changeUnit = (value) => {
    setActiveUnit(value);
    navigate(`/${value}`);
  };

  const isNganhAu = useSelector(({ appReducers }) => appReducers.isNganhAu);

  useEffect(() => {
    const searchParams1 = new URLSearchParams(location.search);
    const unit = searchParams1.get('nganh');
    if (unit === 'au') {
      dispatch(appAction.appUpdateStatus({ isNganhAu: true }));
    }
  }, [location.search, dispatch]);

  return (
    <>
      <header className='header h-16 ring ring-slate-100 flex justify-between items-center px-4'>
        <div className='flex items-center'>
          <img alt='' src={logo} width={48} height={48} />
          <h2 className='pl-2 font-bold text-xl uppercase'>CCAMS BẮC HẢI</h2>
        </div>
        <div className='flex gap-2'>
          <div className='w-36'>
            <SelectBox name='Menu' value={activeUnit} nonSelected>
              <SelectBoxItem
                name='Tra cứu đi lễ'
                value=''
                changeSelection={changeUnit}
              />
              <SelectBoxItem
                name='Tìm kiếm'
                value='search'
                changeSelection={changeUnit}
              />
              {isNganhAu && (
                <SelectBoxItem
                  name='Cấp lại thẻ'
                  value='request-card'
                  changeSelection={changeUnit}
                />
              )}
            </SelectBox>
          </div>
        </div>
      </header>
      <Outlet />
    </>
  );
}
