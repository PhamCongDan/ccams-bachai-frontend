import React from 'react';

export function SelectBoxItem(props) {
  const { name, value, changeSelection } = props;
  const onchange = (valueChanged) => {
    changeSelection(valueChanged);
  };
  return (
    <button
      onClick={() => onchange(value)}
      className='w-full bg-white z-20 block py-2 px-4 hover:bg-gray-100 text-left rounded-none'>
      {name}
    </button>
  );
}
