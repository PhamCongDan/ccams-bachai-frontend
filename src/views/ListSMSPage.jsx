import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Table, Column } from 'react-virtualized/dist/es/Table';
import { debounce } from 'debounce';
import FilterSMS from '../components/list-sms/FilterSMS';

const API_URL_LIST = ['0vennslltfu2q', 'bp2pfsowh7nom', '7h3rsv9amdal3'];

export function ListSMSPage() {
  const [searchText, setSearchText] = useState('');
  const [type, setType] = useState('name');
  const [isLoading, setIsLoading] = useState(false);
  const [lstData, setLstData] = useState([]);
  const [tableHeight, setTableHeight] = useState(0);

  const getUrlApi = () => {
    const today = new Date().getDate();
    const indexApiUrl = today % API_URL_LIST.length;
    return API_URL_LIST[indexApiUrl];
  };

  const queryData = (params = null) => {
    setIsLoading(true);
    const urlApi = getUrlApi();
    axios
      .get(`https://sheetdb.io/api/v1/${urlApi}/${params ? 'search' : ''}`, {
        params,
      })
      .then((res) => {
        const data = res.data.sort((a, b) => {
          const first = a?.['TÊN']?.toLowerCase();
          const second = b?.['TÊN']?.toLowerCase();
          return first.localeCompare(second);
        });
        setLstData(data);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const changeType = (filterType) => {
    setType(filterType);
  };

  const changeSearchText = (text) => {
    setSearchText(text);
  };

  const searchSMS = () => {
    let params = null;
    // handle request
    switch (type) {
      case 'id':
        params = { 'Mã SMS': searchText };
        break;
      case 'parish':
        params = { 'GIÁO XỨ': `*${searchText}*` };
        break;
      case 'name': {
        const fortmatedName = searchText.trim();
        const firstNameIndex = fortmatedName.lastIndexOf(' ');
        const firstName = fortmatedName.slice(firstNameIndex + 1);
        const lastName =
          firstNameIndex > -1 ? fortmatedName.slice(0, firstNameIndex) : '';
        params = {
          'HỌ VÀ TÊN ĐỆM': lastName ? `*${lastName}*` : undefined,
          TÊN: `*${firstName}*`,
        };
        break;
      }
      case 'course':
        params = { 'SA MẠC': `*${searchText}*` };
        break;
      default:
        break;
    }

    queryData(params);
  };

  const emptyText = (
    <div className='h-full w-full flex items-center justify-center font-bold'>
      <h2>Không tìm thấy kết quả</h2>
    </div>
  );
  const loadingDom = (
    <div className='h-[calc(100vh_-_186px)]'>
      <div className='h-full w-[1300px] max-w-full m-auto'>
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
    </div>
  );

  useEffect(() => {
    const getTableHeight = window.innerHeight - 188;
    setTableHeight(getTableHeight);

    const onResize = debounce(() => {
      setTableHeight(getTableHeight);
    }, 500);
    window.addEventListener('resize', onResize, true);
    return () => {
      window.removeEventListener('resize', onResize, true);
    };
  }, []);

  return (
    <div className='m-auto mt-2 p-4'>
      <FilterSMS
        type={type}
        searchText={searchText}
        changeType={changeType}
        changeSearchText={changeSearchText}
        actionSearch={searchSMS}
      />
      {isLoading ? (
        loadingDom
      ) : (
        <div className='overflow-hidden'>
          <Table
            className='overflow-auto relative text-md text-left text-gray-500 z-0 border m-auto w-auto max-w-fit h-[calc(100vh_-_186px)]'
            width={1300}
            height={tableHeight}
            headerHeight={44}
            rowHeight={33}
            rowCount={lstData.length}
            rowGetter={({ index }) => lstData[index]}
            noRowsRenderer={() => emptyText}
            headerClassName='text-sm text-gray-700 uppercase bg-gray-50 h-11 flex items-center justify-center'
            headerStyle={{ margin: 0 }}
            rowStyle={{ margin: 0 }}
            rowClassName='border-b'>
            <Column
              label='STT'
              dataKey='id'
              cellRenderer={({ rowIndex }) => rowIndex + 1}
              width={50}
              className='flex justify-center'
            />
            <Column label='SA MẠC' dataKey='SA MẠC' width={130} />
            <Column label='CHỨNG CHỈ' dataKey='SỐ CHỨNG CHỈ' width={130} />
            <Column
              width={120}
              label='Mã SMS'
              className='flex justify-center'
              headerClassName='text-center'
              dataKey='Mã SMS'
            />
            <Column
              width={110}
              label='TÊN THÁNH'
              className='flex justify-center'
              headerClassName='text-center'
              dataKey='TÊN THÁNH'
            />
            <Column
              width={260}
              flexGrow={1}
              flexShrink={1}
              label='HỌ TÊN'
              dataKey='HỌ VÀ TÊN ĐỆM'
              cellDataGetter={({ rowData }) =>
                `${rowData['HỌ VÀ TÊN ĐỆM']} ${rowData['TÊN']}`
              }
            />
            {/* <Column width={150} label='TÊN' dataKey='TÊN' className='pl-8' /> */}
            <Column
              width={102}
              flexGrow={1}
              label='NGÀY SINH'
              dataKey='NGÀY SINH'
              className='flex justify-center'
            />
            <Column
              width={200}
              // flexGrow={1}
              label='GIÁO XỨ'
              dataKey='GIÁO XỨ'
              className='flex justify-center'
            />
            <Column
              width={120}
              label='GIÁO HẠT'
              dataKey='GIÁO HẠT'
              className='flex justify-center'
            />
            <Column label='TUYÊN HỨA' dataKey='TUYÊN HỨA' width={120} />
            <Column label='TÌNH TRẠNG' dataKey='Tình Trạng' width={120} />
          </Table>
        </div>
      )}
    </div>
  );
}
