import React, { useState } from "react";

export const SelectBox = (props) => {
  const { value, children, name, nonSelected } = props;
  const [isShow, setIsShow] = useState(false);

  const toggleSelectBox = () => {
    setIsShow(!isShow)
  }

  const activeItem = children?.find(x => x?.props?.value === value)
  return (
    <div className="rounded relative w-full">
      <button
        className="flex justify-between items-center w-full btn-primary--contained font-medium rounded-lg text-sm px-5 py-2.5"
        onClick={toggleSelectBox}
      >
        {!nonSelected && activeItem ? activeItem.props.name : name}
        <svg className="ml-2 w-4 h-4" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd">
          </path>
        </svg>
      </button>
      {isShow && (
        <>
          <div className="fixed top-0 left-0 right-0 bottom-0 z-10" onClick={toggleSelectBox}></div>
          <div className="absolute w-full border-4 rounded-md z-20" onClick={toggleSelectBox}>{children}</div>
        </>
      )}
    </div>
  );
};
