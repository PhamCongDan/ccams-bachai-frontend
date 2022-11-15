import React from 'react'

export const SelectBoxItem = (props) => {
  const { name, value, changeSelection } = props
  const onchange = (value) => {
    changeSelection(value)
  }
  return (
    <button onClick={() => onchange(value)} className='w-full block py-2 px-4 hover:bg-gray-100 text-left'>
      {name}
    </button>
  )
}
