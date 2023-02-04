import { debounce } from "debounce";
import React, { useCallback, useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BaseIcon, IconSearch } from "../icon";
// import { StudentCardModal } from "./StudentCardModal";
import { StudentTable } from "./StudentTable";
import * as studentAction from '../../modules/student'
import { LstPrintCard } from "./LstPrintCard";
import { useNavigate } from "react-router-dom";

const SearchStudent = () => {
  const dispatch = useDispatch();
  const printList = useSelector(({ studentReducers }) => studentReducers.lstPrintCard);
  // const [isShowDialog, setIsShowDialog] = useState(false);
  const [strSearch, setStrSearch] = useState('');
  const navigate = useNavigate();
  // const toggleDialog = () => {
  //   setIsShowDialog(!isShowDialog);
  // };

  // const closeModal = () => {
  //   setIsShowDialog(false);
  // };

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
              className="block max-w-96 w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 outline-none"
              placeholder="Họ tên không dấu"
              required
              onChange={(e) => changeSearch(e.target.value)}
            />
          </div>
          <StudentTable />
        </div>
        <div className={`${"hidden md:block md:col-span-1"}`}>
          <button
            className="text-gray-900 bg-gray-300 border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 transition ease-in-out"
            onClick={() => navigate('/print')}
            disabled={!printList.length}
          >
            Print
          </button>
          <button
            className="ml-2 text-gray-900 bg-gray-300 border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 transition ease-in-out"
            onClick={clearPrintList}
          >
            Clear
          </button>
          
          <LstPrintCard />
        </div>
      </div>
      {/* <StudentCardModal isShow={isShowDialog} closeModal={closeModal} /> */}
    </>
  );
};

export { SearchStudent };
