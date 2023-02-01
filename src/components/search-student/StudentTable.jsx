import React from "react";
import { useSelector } from "react-redux";
import { Table, Column } from "react-virtualized/dist/es/Table";
import 'react-virtualized/styles.css';

export const StudentTable = () => {
  const studentList = useSelector(({ studentReducers }) => studentReducers.students )
  return (
    <Table
      width={1440}
      height={700}
      headerHeight={20}
      rowHeight={30}
      rowCount={studentList.length}
      rowGetter={({ index }) => studentList[index]}
    >
      <Column label="STT" dataKey="id" cellRenderer={({ rowIndex }) => rowIndex + 1} width={50} />
      <Column label="Name" dataKey="id" width={100} />
      <Column label="Name" dataKey="fullName" width={300} />
      <Column width={300} label="Họ tên Cha" dataKey="father" />
      <Column width={300} label="Họ tên Mẹ" dataKey="mother" />
      <Column width={100} label="Giáo họ" dataKey="diocese" />
      <Column width={100} label="Khối" dataKey="grade" />
      <Column width={100} label="Chi đoàn" dataKey="unit" />
      <Column width={50} label="" dataKey="action" cellRenderer={() => (<button>add to print list</button>)} />
    </Table>
  );
};
