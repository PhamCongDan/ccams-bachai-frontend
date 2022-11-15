import React, { useState } from 'react'
import { SelectBox } from './common/SelectBox'
import { SelectBoxItem } from './common/SelectBoxItem'
import DatePicker from "react-multi-date-picker"

export const FilterLayout = () => {
  const [activeNganh, setActiveNganh] = useState('au');
  const [activeKhoi, setActiveKhoi] = useState('');
  const [activeLop, setActiveLop] = useState('')

  return (
    <div className='grid grid-rows-2 md:grid-cols-5 gap-4'>
      <div className='w-full'>
        <SelectBox name="Ngành" value={activeNganh} >
          <SelectBoxItem name='Ngành Ấu' value='au' changeSelection={setActiveNganh} />
          <SelectBoxItem name='Ngành Thiếu' value='thieu' changeSelection={setActiveNganh} />
          <SelectBoxItem name='Ngành Nghĩa' value='nghia' changeSelection={setActiveNganh} />
        </SelectBox>
      </div>
      <div className='w-full'>
        <SelectBox name="Khối" value={activeKhoi} >
          <SelectBoxItem name='Ấu Nhi 1' value='au_1' changeSelection={setActiveKhoi} />
          <SelectBoxItem name='Ấu Nhi 2' value='au_2' changeSelection={setActiveKhoi} />
          <SelectBoxItem name='Ấu Nhi 3' value='au_3' changeSelection={setActiveKhoi} />
        </SelectBox>
      </div>
      <div className='w-full'>
        <SelectBox name="Lớp" value={activeLop} >
          <SelectBoxItem name='A1' value='A1' changeSelection={setActiveLop} />
          <SelectBoxItem name='A2' value='A2' changeSelection={setActiveLop} />
          <SelectBoxItem name='A3' value='A3' changeSelection={setActiveLop} />
        </SelectBox>
      </div>
      <DatePicker
        inputClass='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
        placeholder='Khoảng thời gian'
        range
        numberOfMonths={2}
        maxDate={new Date()}
      />
      <div>
        <button type="button" className="w-full text-gray-900 bg-gray-300 border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2">
          Tìm
        </button>
      </div>
    </div>
  )
}
