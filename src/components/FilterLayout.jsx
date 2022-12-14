import React, { useMemo, useState } from 'react'
import { SelectBox } from './common/SelectBox'
import { SelectBoxItem } from './common/SelectBoxItem'
import DatePicker, { DateObject } from "react-multi-date-picker"
import { useDispatch, useSelector } from 'react-redux'
import * as filterAction from '../modules/filter'
import * as reportAction from '../modules/report'

export const FilterLayout = () => {
  const [activeUnit, setActiveUnit] = useState('');
  const [activeGrade, setActiveGrade] = useState('');
  const [activeClass, setActiveClass] = useState('')
  const [rangeDate, setRangeDate] = useState([
    new DateObject().subtract(7, 'days'),
    new DateObject()
  ])
  const grade = useSelector(({ filterReducers }) => filterReducers.grade)
  const className = useSelector(({ filterReducers }) => filterReducers.class)
  const dispatch = useDispatch(null)

  const changeUnit = (value) => {
    setActiveUnit(value);
    dispatch(filterAction.getGrade(value));
  }

  const changeGrade = (value) => {
    setActiveGrade(value);
    dispatch(filterAction.getClass(value));
  }

  const getStartDate = (rangeDate) => {
    return rangeDate?.[0]?.format('YYYY-MM-DD') || ''
  }

  const getEndDate = (rangeDate) => {
    return rangeDate?.[1]?.format('YYYY-MM-DD') || ''
  }

  const startDate = useMemo(() => getStartDate(rangeDate), [rangeDate])
  const endDate = useMemo(() => getEndDate(rangeDate), [rangeDate])

  const getRequestParam = () => {
    let gradeIds = [];
    if (activeClass === 'all') {
      gradeIds = className
        .filter(item => Number(item.id))
        .map(item => item.id);
    } else {
      gradeIds.push(activeClass)
    }
    return gradeIds
  }
  const handleSearch = () => {
    const gradeIds = getRequestParam();

    // call api
    dispatch(reportAction.getReportByClass({
      gradeIds,
      startDate,
      endDate
    }))
  }

  const downloadReport = () => {
    const gradeIds = getRequestParam();

    // call api
    dispatch(reportAction.downloadReportByClass({
      gradeIds,
      startDate,
      endDate
    }))
  }

  return (
    <div className='grid grid-rows-2 md:grid-cols-5 gap-4'>
      <div className='w-full'>
        <SelectBox name="Ng??nh" value={activeUnit} >
          <SelectBoxItem name='Ng??nh Chi??n' value='chien' changeSelection={changeUnit} />
          <SelectBoxItem name='Ng??nh ???u' value='au' changeSelection={changeUnit} />
          <SelectBoxItem name='Ng??nh Thi???u' value='thieu' changeSelection={changeUnit} />
          <SelectBoxItem name='Ng??nh Ngh??a' value='nghia' changeSelection={changeUnit} />
          <SelectBoxItem name='Ng??nh Hi???p' value='hiep' changeSelection={changeUnit} />
        </SelectBox>
      </div>
      <div className='w-full'>
        <SelectBox name="Kh???i" value={activeGrade} >
          {grade.map((item) => {
            return (<SelectBoxItem name={item.name} value={item.id} key={item.id} changeSelection={changeGrade} />)
          })}
          {/* {unit.length > 0 &&
            <SelectBoxItem name='T???t c???' value={unit.map(x => x.id).toString()} changeSelection={changeUnit} /> 
          } */}
        </SelectBox>
      </div>
      <div className='w-full'>
        <SelectBox name="L???p" value={activeClass} >
          {className.map((item) => {
            return (<SelectBoxItem name={item.name} value={`${item.id}`} key={item.id} changeSelection={setActiveClass} />)
          })}
          {/* {grade.length > 0 &&
            <SelectBoxItem name='T???t c???' value={grade.map(x => x.id).toString()} changeSelection={setActiveGrade} /> 
          } */}
        </SelectBox>
      </div>
      <DatePicker
        inputClass='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
        placeholder='Kho???ng th???i gian'
        range
        numberOfMonths={2}
        maxDate={new Date()}
        value={rangeDate}
        onChange={setRangeDate}
        format='DD/MM/YYYY'
      />
      <button
        type="button" 
        disabled={!activeClass}
        className="w-full text-gray-900 bg-gray-300 border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 transition ease-in-out"
        onClick={handleSearch}
      >
        T??m
      </button>

      <button
        type="button" 
        disabled={!activeClass}
        className="w-full text-gray-900 bg-gray-300 border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 transition ease-in-out"
        onClick={downloadReport}
      >
        Download Report
      </button>

    </div>
  )
}
