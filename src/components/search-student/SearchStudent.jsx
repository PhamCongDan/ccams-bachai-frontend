import { debounce } from "debounce";
import React, { useCallback, useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BaseIcon, IconSearch } from "../icon";
import { StudentTable } from "./StudentTable";
import * as studentAction from '../../modules/student'
import { LstPrintCard } from "./LstPrintCard";
import { useNavigate } from "react-router-dom";
import { LstRequestedStudentCard } from "./LstRequestedStudentCard";
import { SelectBox } from "../common/SelectBox";
import { SelectBoxItem } from "../common/SelectBoxItem";
import * as filterAction from '../../modules/filter'
import { UNIT_LIST } from "../../helper/constants";

const SearchStudent = () => {
  const dispatch = useDispatch();
  const printList = useSelector(({ studentReducers }) => studentReducers.lstPrintCard);
  const isNganhAu = useSelector(({ appReducers }) => appReducers.isNganhAu);
  const grade = useSelector(({ filterReducers }) => filterReducers.grade)
  const className = useSelector(({ filterReducers }) => filterReducers.class)
  const [strSearch, setStrSearch] = useState('');
  const [activeUnit, setActiveUnit] = useState('');
  const [activeGrade, setActiveGrade] = useState('');
  const [activeClass, setActiveClass] = useState('');
  const navigate = useNavigate();

  const changeSearch = debounce((e) => {
    setStrSearch(e);
  }, 300);

  const queryStudent = useCallback(() => {
    if (strSearch.length || activeClass) {
      // call api
      dispatch(studentAction.searchStudent({
        name: strSearch ?? '',
        gradeId: activeClass ?? undefined
      }))
    }
  }, [strSearch, activeClass, dispatch]);

  const clearPrintList = useCallback(() => {
    dispatch(studentAction.studentUpdateStatus({ lstPrintCard: [] }));
  }, [dispatch]);

  const changeUnit = (value) => {
    setActiveUnit(value);
    dispatch(filterAction.getGrade(value));
  }

  const changeGrade = (value) => {
    setActiveGrade(value);
    dispatch(filterAction.getClass(value));
  }

  useEffect(() => {
    queryStudent();
  }, [strSearch, queryStudent]);

  return (
    <>
      <div className="grid grid-cols-5 p-4 gap-4 no-print">
        <div className={`${"col-span-5 md:col-span-4"}`}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
            <SelectBox name="Ngành" value={activeUnit}>
            {UNIT_LIST.map((item) => {
              return (<SelectBoxItem name={item.name} value={item.value} key={item.value} changeSelection={changeUnit} />)
            })}
            </SelectBox>
            <SelectBox name="Phân đoàn" value={activeGrade} >
              {grade.map((item) => {
                return (<SelectBoxItem name={item.name} value={item.id} key={item.id} changeSelection={changeGrade} />)
              })}
            </SelectBox>
            <SelectBox name="Chi đoàn" value={activeClass} >
              {className.map((item) => {
                return (<SelectBoxItem name={item.name} value={`${item.id}`} key={item.id} changeSelection={setActiveClass} />)
              })}
            </SelectBox>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <BaseIcon>
                  <IconSearch />
                </BaseIcon>
              </div>
              <input
                type="search"
                id="search"
                className="w-full h-full block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 outline-none"
                placeholder="Họ tên không dấu"
                required
                onChange={(e) => changeSearch(e.target.value)}
              />
            </div>
          </div>
          <StudentTable />
        </div>
        <div className={`${"hidden md:block md:col-span-1"}`}>
          <button
            className="btn-primary--contained"
            onClick={() => navigate('/print')}
            disabled={!printList.length}
          >
            Print
          </button>
          <button
            className="ml-2 btn-primary--contained"
            onClick={clearPrintList}
            disabled={!printList.length}
          >
            Clear
          </button>
          
          <LstPrintCard />
          {isNganhAu && <LstRequestedStudentCard />}
        </div>
      </div>
    </>
  );
};

export { SearchStudent };
