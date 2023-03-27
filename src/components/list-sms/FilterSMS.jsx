import React from "react";
import { BaseIcon, IconSearch } from "../icon";

const TYPE_ACTIONS = [
  {
    label: "Tên",
    value: "name",
  },
  {
    label: "Giáo xứ",
    value: "parish",
  },
  {
    label: "Mã SMS",
    value: "id",
  },
  {
    label: "Sa mạc",
    value: "course",
  },
];

const FilterSMS = (props) => {
  const { type, changeType, changeSearchText, actionSearch, searchText } =
    props;
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
        <button
          className="btn-primary--contained"
          disabled={!searchText}
          onClick={actionSearch}
        >
          Search
        </button>
      </div>
      {/* radio group */}
      <ul className="flex justify-center items-center w-full text-sm font-medium text-gray-900 bg-white rounded-lg sm:flex">
        {TYPE_ACTIONS.map((item, index) => {
          return (
            <li key={item.value} className="">
              <div className="flex items-center pl-3">
                <input
                  id={`option-${item.value}`}
                  type="radio"
                  value={item.value}
                  name="list-radio"
                  className=" w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
                  onChange={(e) => changeType(e.target.value)}
                  checked={type === item.value}
                />
                <label
                  htmlFor={`option-${item.value}`}
                  className="w-full py-3 pl-2 text-sm font-medium text-gray-900 whitespace-pre"
                >
                  {item.label}
                </label>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default FilterSMS;
