import React, { useEffect, useMemo, useState } from 'react'
import { SelectBox } from './common/SelectBox'
import { SelectBoxItem } from './common/SelectBoxItem'
import DatePicker, { DateObject } from "react-multi-date-picker"
import { useDispatch, useSelector } from 'react-redux'
import * as filterAction from '../modules/filter'
import * as reportAction from '../modules/report'
import { UNIT_LIST } from '../helper/constants'

const weekDays = ["CN", "T2", "T3", "T4", "T5", "T6", "T7"]
const months = ["Tháng 1", "Tháng 2", "Tháng 3", "Tháng 4", "Tháng 5", "Tháng 6", "Tháng 7", "Tháng 8", "Tháng 9", "Tháng 10", "Tháng 11", "Tháng 12"]

export const FilterLayout = () => {
  const [activeUnit, setActiveUnit] = useState('');
  const [activeGrade, setActiveGrade] = useState('');
  const [activeClass, setActiveClass] = useState('')
  const [rangeDate, setRangeDate] = useState([
    new DateObject().subtract(7, 'days'),
    new DateObject()
  ])

  const [maxDate, setMaxDate] = useState(new Date());
  const [minDate, setMinDate] = useState(new Date().setMonth(new Date().getMonth() - 3));

  const grade = useSelector(({ filterReducers }) => filterReducers.grade)
  const className = useSelector(({ filterReducers }) => filterReducers.class)
  const reporter = useSelector(({ reportReducers }) => reportReducers.report)
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
  };

  useEffect(() => {
    if (!endDate) {
      const after3MonthFromStartDate = new Date(startDate).setMonth(new Date(startDate).getMonth() + 3);
      const before3MonthFromStartDate = new Date(startDate).setMonth(new Date(startDate).getMonth() -3);

      setMaxDate(Math.min(new Date(after3MonthFromStartDate).getTime(), new Date().getTime()));
      setMinDate(before3MonthFromStartDate)
    }
  }, [endDate, startDate])

  return (
    <div className='grid grid-rows-2 md:grid-cols-5 gap-2'>
      <div className='w-full'>
        <SelectBox name="Ngành" value={activeUnit} >
          {UNIT_LIST.map((item) => {
            return (<SelectBoxItem name={item.name} value={item.value} key={item.value} changeSelection={changeUnit} />)
          })}
        </SelectBox>
      </div>
      <div className='w-full'>
        <SelectBox name="Phân đoàn" value={activeGrade} >
          {grade.map((item) => {
            return (<SelectBoxItem name={item.name} value={item.id} key={item.id} changeSelection={changeGrade} />)
          })}
        </SelectBox>
      </div>
      <div className='w-full'>
        <SelectBox name="Chi đoàn" value={activeClass} >
          {className.map((item) => {
            return (<SelectBoxItem name={item.name} value={`${item.id}`} key={item.id} changeSelection={setActiveClass} />)
          })}
        </SelectBox>
      </div>
      <DatePicker
        inputClass='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
        placeholder='Khoảng thời gian'
        range
        numberOfMonths={window.isMobile() ? 1 : 2}
        maxDate={maxDate}
        minDate={minDate}
        value={rangeDate}
        onChange={setRangeDate}
        format='DD/MM/YYYY'
        weekDays={weekDays}
        months={months}
      />
      <button
        type="button" 
        disabled={!activeClass || !endDate}
        className="w-full btn-primary--contained"
        onClick={handleSearch}
      >
        Tìm
      </button>

      <button
        type="button" 
        disabled={!activeClass || !endDate}
        className="w-full btn-primary--contained"
        onClick={downloadReport}
      >
        Download Report
      </button>
      <div className='hidden md:block' />
      <div className='hidden md:block' />
      <div className='md:text-end'>GLV phụ trách:</div>
      <div className='md:text-end font-bold'>{reporter.length ? reporter[0]?.teacher : ''}</div>
    </div>
  )
}
