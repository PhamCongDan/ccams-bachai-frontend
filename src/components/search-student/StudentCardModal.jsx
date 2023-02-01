import React from 'react'
import { useSelector } from 'react-redux';
import Dialog from '../common/Dialog'
import { BaseIcon, IconClose, IconPrint } from '../icon';
import { StudentCardItem } from './StudentCardItem';

export const StudentCardModal = (props) => {
  const { isShow, closeModal } = props;
  const printStudentCard = () => {
    window.print();
  };
  const lstPrintCard = useSelector(({ studentReducers }) => studentReducers.lstPrintCard);

  // useEffect(() => {
  //   window.addEventListener('afterprint', clearData)
  //   return () => {
  //     window.removeEventListener('afterprint', clearData, true);
  //   }
  // }, [clearData]);
  return (
    <Dialog isShow={isShow} closeModal={closeModal}>
      <div className='bg-slate-50 h-full mb-4'>
        <div className='print-preview'>
          <div className='p-4 flex items-center justify-between'>
            <label className='font-bold text-lg'>In thẻ học viên</label>
            <button onClick={closeModal}>
              <BaseIcon>
                <IconClose />
              </BaseIcon>
            </button>
          </div>
          <div className='border-b' />
          <div className='p-4 flex items-center justify-between my-2'>
            <p>Preview:</p>
            <button
              className='text-gray-900 bg-gray-300 border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 transition ease-in-out'
              onClick={printStudentCard}
            >
              <BaseIcon>
                <IconPrint />
              </BaseIcon>
            </button>
          </div>
        </div>
        {/* print area */}
        <div className='h-[80%] w-max overflow-y-scroll m-auto'>
          <div id='student-card-page' className='print-area w-[210mm] h-[297mm] bg-white'>
            <div className=' grid grid-cols-2 grid-rows-5 grid-flow-col gap-4 px-[15mm]'>
              {lstPrintCard.map((item, index) => {
                return (
                  <StudentCardItem key={item.id} studentInfo={item} />
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </Dialog>
  )
}
