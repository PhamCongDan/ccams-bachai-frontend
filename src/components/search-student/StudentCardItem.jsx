import React from 'react'

export const StudentCardItem = (props) => {
  const { studentInfo: { id } } = props
  return (
    <div className='border border-black w-[86mm] h-[54mm] p-1 test break-before-page'>
      1 cai the co id {id}
    </div>
  )
}
