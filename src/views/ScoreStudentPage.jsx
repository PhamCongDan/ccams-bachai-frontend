import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SelectBox } from '../components/common/SelectBox';
import { UNIT_LIST } from '../helper/constants';
import { SelectBoxItem } from '../components/common/SelectBoxItem';
import { BaseIcon, IconSearch } from '../components/icon';
import * as filterAction from '../modules/filter';
import ScoreTable from '../components/score-student/ScoreTable';
import { getScoreByClass } from '../modules/score';

function ScoreStudentPage() {
  const [activeUnit, setActiveUnit] = useState('');
  const [activeGrade, setActiveGrade] = useState('');
  const [activeClass, setActiveClass] = useState('');

  const grade = useSelector(({ filterReducers }) => filterReducers.grade);
  const className = useSelector(({ filterReducers }) => filterReducers.class);
  const dispatch = useDispatch(null);
  const changeUnit = (value) => {
    setActiveUnit(value);
    dispatch(filterAction.getGrade(value));
  };

  const changeGrade = (value) => {
    setActiveGrade(value);
    dispatch(filterAction.getClass(value));
  };

  const getCurrentSemesterId = useCallback(() => {
    const semesterData = sessionStorage.getItem('semester');
    if (semesterData) {
      const currentSemesterId = JSON.parse(semesterData);
      return currentSemesterId.slice(-2).map((item) => item.id);
    }
    return null;
  }, []);

  useEffect(() => {
    if (getCurrentSemesterId() && activeClass) {
      console.log('cal api thoi');
      const semesterIds = getCurrentSemesterId();
      dispatch(
        getScoreByClass({
          gradeId: activeClass,
          semesterIds: semesterIds.toString(),
        })
      );
    }
  }, [getCurrentSemesterId, activeClass, dispatch]);

  return (
    <div className='p-4'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2'>
        <SelectBox name='Ngành' value={activeUnit}>
          {UNIT_LIST.map((item) => (
            <SelectBoxItem
              name={item.name}
              value={item.value}
              key={item.value}
              changeSelection={changeUnit}
            />
          ))}
        </SelectBox>
        <SelectBox name='Phân đoàn' value={activeGrade}>
          {grade.map((item) => (
            <SelectBoxItem
              name={item.name}
              value={item.id}
              key={item.id}
              changeSelection={changeGrade}
            />
          ))}
        </SelectBox>
        <SelectBox name='Chi đoàn' value={activeClass}>
          {className.map((item) => (
            <SelectBoxItem
              name={item.name}
              value={`${item.id}`}
              key={item.id}
              changeSelection={setActiveClass}
            />
          ))}
        </SelectBox>
      </div>
      <ScoreTable />
    </div>
  );
}

export default ScoreStudentPage;
