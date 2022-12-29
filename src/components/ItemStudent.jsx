import React from 'react'

export const ItemStudent = (props) => {
  const { student, index } = props;
  const { holyName, lastName, firstName, gradeName,
    attendClass, sunday, weekDay, id } = student;
  return (
    <div className="grid grid-cols-12 p-1 min-w-[800px]">
      <div className="col-span-1">{index + 1}</div>
      <div className="col-span-1">{holyName}</div>
      <div className="col-span-3">{lastName}</div>
      <div className="col-span-1">{firstName}</div>
      <div className="col-span-1">{gradeName}</div>
      <div className="col-span-1 text-center">{attendClass}</div>
      <div className="col-span-1 text-center">{sunday}</div>
      <div className="col-span-1 text-center">{weekDay}</div>
      <div className="col-span-1 text-center">{weekDay + sunday}</div>
      <div className="col-span-1 text-center">{id}</div>
    </div>
  )
}
