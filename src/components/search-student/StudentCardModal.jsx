import React from 'react'
import { Dialog } from '../common/Dialog'
import { StudentCardItem } from './StudentCardItem';

export const StudentCardModal = (props) => {
  const { isShow, closeModal } = props;
  const printStudentCard = () => {
    window.print();
  }
  const lstStudentCard = [
    {
      id: '2018130',
      name: 'Pham Cong Dan',
      attentClass: 'A18',
      phoneNumber: '0345202984'
    },
    {
      id: '2018136',
      name: 'Pham Cong Dan',
      attentClass: 'A18',
      phoneNumber: '0345202984'
    },
    {
      id: '3',
      name: 'Pham Cong Dan',
      attentClass: 'A18',
      phoneNumber: '0345202984'
    },
    {
      id: '4',
      name: 'Pham Cong Dan',
      attentClass: 'A18',
      phoneNumber: '0345202984'
    },
    {
      id: '5',
      name: 'Pham Cong Dan',
      attentClass: 'A18',
      phoneNumber: '0345202984'
    },
    {
      id: '6',
      name: 'Pham Cong Dan',
      attentClass: 'A18',
      phoneNumber: '0345202984'
    },
    {
      id: '7',
      name: 'Pham Cong Dan',
      attentClass: 'A18',
      phoneNumber: '0345202984'
    },
    {
      id: '8',
      name: 'Pham Cong Dan',
      attentClass: 'A18',
      phoneNumber: '0345202984'
    },
    {
      id: '9',
      name: 'Pham Cong Dan',
      attentClass: 'A18',
      phoneNumber: '0345202984'
    },
    {
      id: '10',
      name: 'Pham Cong Dan',
      attentClass: 'A18',
      phoneNumber: '0345202984'
    },
    // {
    //   id: '11',
    //   name: 'Pham Cong Dan',
    //   attentClass: 'A18',
    //   phoneNumber: '0345202984'
    // },
    // {
    //   id: '12',
    //   name: 'Pham Cong Dan',
    //   attentClass: 'A18',
    //   phoneNumber: '0345202984'
    // },
  ]
  return (
    <Dialog isShow={isShow} closeModal={closeModal}>
      <div className='p-4 bg-slate-50 h-full mb-4'>
        <div className='print-preview'>
          <label>In thẻ học viên</label>
          <div className='flex items-center justify-between my-2'>
            <p>Preview:</p>
            <button
              className='text-gray-900 bg-gray-300 border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 transition ease-in-out'
              onClick={printStudentCard}
            >
              Print
            </button>
          </div>
        </div>
        {/* print area */}
        <div className='h-[90%] w-max overflow-y-scroll m-auto'>
          <div id='student-card-page' className='w-[210mm] h-[297mm] bg-white'>
            <div className='print-area grid grid-cols-2 grid-rows-5 grid-flow-col gap-4 px-14'>
              {lstStudentCard.map((item, index) => {
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
