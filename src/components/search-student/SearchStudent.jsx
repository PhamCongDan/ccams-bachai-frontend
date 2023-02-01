import { debounce } from "debounce";
import React, { useCallback, useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BaseIcon, IconSearch } from "../icon";
import { StudentCardModal } from "./StudentCardModal";
import { StudentTable } from "./StudentTable";
import * as studentAction from '../../modules/student'

const SearchStudent = () => {
  const dispatch = useDispatch();
  const [isShowDialog, setIsShowDialog] = useState(false);
  const [isShowPrintList, setIsShowPrintList] = useState(false);
  const [strSearch, setStrSearch] = useState('');

  const toggleDialog = () => {
    setIsShowDialog(!isShowDialog);
  };

  const toggleShowPrintList = () => {
    setIsShowPrintList(!isShowPrintList);
  };

  const closeModal = () => {
    setIsShowDialog(false);
  };

  const changeSearch = debounce((e) => {
    setStrSearch(e);
  }, 300);

  const queryStudent = useCallback(() => {
    // call api
    dispatch(studentAction.searchStudent({
      name: strSearch
    }))
  }, [strSearch, dispatch]);

  useEffect(() => {
    queryStudent();
  }, [strSearch, queryStudent]);

  return (
    <>
      <div className="grid grid-cols-5 p-4 gap-4">
        <div className={`${isShowPrintList ? "col-span-4" : "col-span-5"}`}>
          {/* <FilterLayout /> */}
          filter va list
          <button
            className="text-gray-900 bg-gray-300 border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 transition ease-in-out"
            onClick={toggleShowPrintList}
          >
            Danh sách in thẻ
          </button>
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
            {/* <button
              type="submit"
              className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 "
            >
              Search
            </button> */}
          </div>
          <StudentTable />
        </div>
        <div className={`${isShowPrintList ? "col-span-1" : "hidden"}`}>
          <button
            className="text-gray-900 bg-gray-300 border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 transition ease-in-out"
            onClick={toggleDialog}
          >
            Print
          </button>
          list
        </div>
      </div>
      <StudentCardModal isShow={isShowDialog} closeModal={closeModal} />
    </>
  );
};

export { SearchStudent };
