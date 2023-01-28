import React from "react";

export const ItemStudent = (props) => {
  const { student, index } = props;
  const {
    holyName,
    lastName,
    firstName,
    gradeName,
    attendClass,
    sunday,
    weekDay,
    id,
  } = student;
  return (

      <tr className="bg-white border-b ">
        <th
          scope="row"
          className="px-6 py-1 font-medium text-gray-900 whitespace-nowrap "
        >
          {index + 1}
        </th>
        <td className="px-6">{id}</td>
        <td className="px-6">{holyName}</td>
        <td className="px-6">{lastName}</td>
        <td className="px-6">{firstName}</td>
        <td className="px-6 text-center">{gradeName}</td>
        <td className="px-6 text-center">{attendClass}</td>
        <td className="px-6 text-center">{sunday}</td>
        <td className="px-6 text-center">{weekDay}</td>
        <td className="px-6 text-center">{weekDay + sunday}</td>
      </tr>
  );
};
