import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import 'react-virtualized/styles.css';
import { Table, Column } from 'react-virtualized/dist/es/Table';
import * as studentAction from '../../modules/student';
import { NotificationDialog } from '../common/NotificationDialog';

export function StudentTable() {
  const dispatch = useDispatch();
  const studentList = useSelector(
    ({ studentReducers }) => studentReducers.students,
  );

  const isLoading = useSelector(
    ({ studentReducers }) => studentReducers.isLoading,
  );

  const lstPrintCard = useSelector(
    ({ studentReducers }) => studentReducers.lstPrintCard,
  );

  const [isShowError, setIsShowError] = useState(false);
  const [errMessage, setErrMessage] = useState('');

  const closeErrorDialog = () => {
    setIsShowError(false);
  };

  const addToPrint = (data) => {
    const index = lstPrintCard.findIndex((item) => item.id === data.id);
    if (index !== -1) {
      setErrMessage('Thẻ này đã thêm rồi!');
      setIsShowError(true);
    } else {
      dispatch(studentAction.addOneStudentCard(data));
    }
  };

  const printButton = (e) => {
    if (e.rowData.status === 1) {
      return (
        <button
          className='flex items-center justify-center font-bold text-blue-500 text-lg'
          onClick={() => addToPrint(e.rowData)}>
          ＋
        </button>
      );
    }
  };

  const renderPhoneNumber = (data) => (
    <div dangerouslySetInnerHTML={{ __html: data.join('<br />') }} />
  );

  const formatDate = (bod) => {
    const date = new Date(bod);
    return `${date.getDate().toString().padStart(2, '0')}/${(
      date.getMonth() + 1
    )
      .toString()
      .padStart(2, '0')}/${date.getFullYear()}`;
  };

  const loadingDom = (
    <div className='h-[700px] w-[1500px] max-w-full'>
      <div className='w-full h-full flex items-center justify-center relative'>
        <div className='absolute top-0 left-0 right-0 bottom-0 bg-black opacity-20' />
        <div role='status' className=''>
          <svg
            className='inline mr-2 w-16 h-16 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600'
            viewBox='0 0 100 101'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z'
              fill='currentColor'
            />
            <path
              d='M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z'
              fill='currentFill'
            />
          </svg>
          <span className='sr-only'>Loading...</span>
        </div>
      </div>
    </div>
  );
  const emptyText = (
    <div className='h-full w-full flex items-center justify-center font-bold'>
      <h2>Không tìm thấy kết quả</h2>
    </div>
  );
  return (
    <>
      <div className='border max-w-max mt-4'>
        {/* {loadingDom} */}
        {isLoading ? (
          loadingDom
        ) : (
          <Table
            className='overflow-auto relative text-md text-left text-gray-500 z-0'
            width={1500}
            height={700}
            headerHeight={44}
            rowHeight={50}
            rowCount={studentList.length}
            rowGetter={({ index }) => studentList[index]}
            noRowsRenderer={() => emptyText}
            headerClassName='text-sm text-gray-700 uppercase bg-gray-50 h-11 flex items-center justify-center'
            headerStyle={{ margin: 0 }}
            rowStyle={{ margin: 0 }}
            rowClassName='border-b'>
            <Column
              label='STT'
              dataKey='id'
              cellRenderer={({ rowIndex, rowData }) => (
                <span
                  className={`w-full h-full flex justify-center items-center ${
                    rowData.status === 1
                      ? 'bg-white'
                      : 'bg-gray-400 bg-opacity-30'
                  }`}>
                  {rowData.status === 1 ? rowIndex + 1 : ''}
                </span>
              )}
              width={50}
              className='flex justify-center items-center w-full h-full !m-0 first-of-type:!mx-0'
            />
            <Column
              label='Họ tên'
              dataKey='fullName'
              width={300}
              maxWidth={400}
              className='flex items-center w-full h-full !m-0 first-of-type:!mx-0'
              cellRenderer={({ rowData }) => (
                <span
                  className={`w-full h-full flex items-center ${
                    rowData.status === 1
                      ? 'bg-white'
                      : 'bg-gray-400 bg-opacity-30'
                  }`}>
                  {rowData.fullName}
                </span>
              )}
            />
            <Column
              width={100}
              label='Phân đoàn'
              headerClassName='text-center'
              dataKey='unit'
              className='flex justify-center items-center w-full h-full !m-0 first-of-type:!mx-0'
              cellRenderer={({ rowData }) => (
                <span
                  className={`w-full h-full flex justify-center items-center ${
                    rowData.status === 1
                      ? 'bg-white'
                      : 'bg-gray-400 bg-opacity-30'
                  }`}>
                  {rowData.unit}
                </span>
              )}
            />
            <Column
              width={100}
              label='Chi đoàn'
              dataKey='grade'
              headerClassName='text-center'
              className='flex justify-center items-center w-full h-full !m-0 first-of-type:!mx-0'
              cellRenderer={({ rowData }) => (
                <span
                  className={`w-full h-full flex justify-center items-center ${
                    rowData.status === 1
                      ? 'bg-white'
                      : 'bg-gray-400 bg-opacity-30'
                  }`}>
                  {rowData.grade}
                </span>
              )}
            />
            <Column
              width={150}
              label='Ngày sinh'
              dataKey='bod'
              headerClassName='text-center'
              cellDataGetter={({ rowData, dataKey }) =>
                formatDate(rowData[dataKey])
              }
              className='flex justify-center items-center w-full h-full !m-0 first-of-type:!mx-0'
              cellRenderer={({ rowData }) => (
                <span
                  className={`w-full h-full flex justify-center items-center ${
                    rowData.status === 1
                      ? 'bg-white'
                      : 'bg-gray-400 bg-opacity-30'
                  }`}>
                  {formatDate(rowData.bod)}
                </span>
              )}
            />
            <Column
              width={250}
              label='Họ tên Cha'
              dataKey='father'
              className='flex items-center w-full h-full !m-0 first-of-type:!mx-0'
              cellRenderer={({ rowData }) => (
                <span
                  className={`w-full h-full flex items-center ${
                    rowData.status === 1
                      ? 'bg-white'
                      : 'bg-gray-400 bg-opacity-30'
                  }`}>
                  {rowData.father}
                </span>
              )}
            />
            <Column
              width={250}
              label='Họ tên Mẹ'
              dataKey='mother'
              className='flex items-center w-full h-full !m-0 first-of-type:!mx-0'
              cellRenderer={({ rowData }) => (
                <span
                  className={`w-full h-full flex items-center ${
                    rowData.status === 1
                      ? 'bg-white'
                      : 'bg-gray-400 bg-opacity-30'
                  }`}>
                  {rowData.mother}
                </span>
              )}
            />
            <Column
              width={100}
              label='Giáo họ'
              dataKey='diocese'
              className='flex justify-center items-center w-full h-full !m-0 first-of-type:!mx-0'
              cellRenderer={({ rowData }) => (
                <span
                  className={`w-full h-full flex justify-center items-center ${
                    rowData.status === 1
                      ? 'bg-white'
                      : 'bg-gray-400 bg-opacity-30'
                  }`}>
                  {rowData.diocese}
                </span>
              )}
            />
            <Column
              width={200}
              label='Điện thoại'
              dataKey='phoneNumbers'
              className='flex justify-center items-center w-full h-full !m-0 first-of-type:!mx-0'
              cellRenderer={({ rowData }) => (
                <span
                  className={`w-full h-full flex justify-center items-center ${
                    rowData.status === 1
                      ? 'bg-white'
                      : 'bg-gray-400 bg-opacity-30'
                  }`}>
                  {renderPhoneNumber(rowData.phoneNumbers)}
                </span>
              )}
            />
            {!window.isMobile() && (
              <Column
                width={50}
                label='In thẻ'
                dataKey='action'
                headerClassName='md:flex md:visible justify-center invisible'
                className='md:flex md:visible justify-center invisible'
                cellRenderer={(e) => printButton(e)}
              />
            )}
          </Table>
        )}
      </div>
      <NotificationDialog
        isShow={isShowError}
        closeModal={closeErrorDialog}
        message={errMessage}
      />
    </>
  );
}
