import React from "react";
import { BaseIcon, IconSearch } from "../icon";

const FilterSMS = (props) => {
  const { type, changeType, changeSearchText, actionSearch, searchText } = props;
  return (
    <>
      <div className="flex justify-center gap-2">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <BaseIcon>
              <IconSearch />
            </BaseIcon>
          </div>
          <input
            type="search"
            id="search"
            className="block sm:w-96 p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 outline-none"
            placeholder="Tìm..."
            required
            onChange={(e) => changeSearchText(e.target.value)}
          />
        </div>
        <button className="btn-primary--contained" disabled={!searchText} onClick={actionSearch}>
          Search
        </button>
      </div>
      {/* radio group */}
      <ul className="flex justify-center items-center w-full text-sm font-medium text-gray-900 bg-white rounded-lg sm:flex">
        <li className="">
          <div className="flex items-center pl-3">
            <input
              id="horizontal-list-radio-license"
              type="radio"
              value="name"
              name="list-radio"
              className=" w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
              onChange={(e) => changeType(e.target.value)}
              checked={type === "name"}
            />
            <label
              htmlFor="horizontal-list-radio-license"
              className="w-full py-3 pl-2 text-sm font-medium text-gray-900 whitespace-pre"
            >
              Tên
            </label>
          </div>
        </li>
        <li className="">
          <div className="flex items-center pl-3">
            <input
              id="horizontal-list-radio-id"
              type="radio"
              value="parish"
              name="list-radio"
              className="w-full py-3 pl-2 text-sm font-medium text-gray-900"
              onChange={(e) => changeType(e.target.value)}
              checked={type === "parish"}
            />
            <label
              htmlFor="horizontal-list-radio-id"
              className="w-full py-3 pl-2 text-sm font-medium text-gray-900 whitespace-pre"
            >
              Giáo xứ
            </label>
          </div>
        </li>
        <li className="">
          <div className="flex items-center pl-3">
            <input
              id="horizontal-list-radio-millitary"
              type="radio"
              value="id"
              name="list-radio"
              className="w-full py-3 pl-2 text-sm font-medium text-gray-900"
              onChange={(e) => changeType(e.target.value)}
              checked={type === "id"}
            />
            <label
              htmlFor="horizontal-list-radio-millitary"
              className="w-full py-3 pl-2 text-sm font-medium text-gray-900 whitespace-pre"
            >
              Mã SMS
            </label>
          </div>
        </li>
        <li className="">
          <div className="flex items-center pl-3">
            <input
              id="horizontal-list-radio-sm"
              type="radio"
              value="sm"
              name="list-radio"
              className="w-full py-3 pl-2 text-sm font-medium text-gray-900"
              onChange={(e) => changeType(e.target.value)}
              checked={type === "sm"}
            />
            <label
              htmlFor="horizontal-list-radio-sm"
              className="w-full py-3 pl-2 text-sm font-medium text-gray-900 whitespace-pre"
            >
              Sa mạc
            </label>
          </div>
        </li>
      </ul>
    </>
  );
};

export default FilterSMS;
