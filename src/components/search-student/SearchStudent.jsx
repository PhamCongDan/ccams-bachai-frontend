import { debounce } from "debounce";
import React, { useCallback, useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BaseIcon, IconSearch } from "../icon";
import { StudentTable } from "./StudentTable";
import * as studentAction from '../../modules/student'
import { LstPrintCard } from "./LstPrintCard";
import { useNavigate } from "react-router-dom";

const SearchStudent = () => {
  const dispatch = useDispatch();
  const printList = useSelector(({ studentReducers }) => studentReducers.lstPrintCard);
  const [strSearch, setStrSearch] = useState('');
  const navigate = useNavigate();

  const changeSearch = debounce((e) => {
    setStrSearch(e);
  }, 300);

  const queryStudent = useCallback(() => {
    if (strSearch.length) {
      // call api
      dispatch(studentAction.searchStudent({
        name: strSearch
      }))
    }
  }, [strSearch, dispatch]);

  const clearPrintList = useCallback(() => {
    dispatch(studentAction.studentUpdateStatus({ lstPrintCard: [] }));
  }, [dispatch]);

  useEffect(() => {
    queryStudent();
  }, [strSearch, queryStudent]);

  return (
    <>
      <div className="grid grid-cols-5 p-4 gap-4 no-print">
        <div className={`${"col-span-5 md:col-span-4"}`}>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <BaseIcon>
                <IconSearch />
              </BaseIcon>
            </div>
            <input
              type="search"
              id="search"
              className="block w-96 p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 outline-none"
              placeholder="Họ tên không dấu"
              required
              onChange={(e) => changeSearch(e.target.value)}
            />
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
        </div>
      </div>
    </>
  );
};

export { SearchStudent };
