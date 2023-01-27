import React from 'react'
import { Dialog } from '../common/Dialog'
import { StudentCardItem } from './StudentCardItem';

export const StudentCardModal = (props) => {
  const { isShow, closeModal } = props;
  const printStudentCard = () => {
    var printContents = document.getElementById('student-card-page');
    closeModal();
     var originalContents = document.body.innerHTML;
    printContents.scrollTop = 100;
    // document.body.innerHTML = printContents;
    window.print();
    //  document.body.innerHTML = originalContents;
    // const printContents = document.getElementById('student-card-page').innerHTML;
    // // const originalContents = document.body.innerHTML;
    // const printArea = window.open()
    // printArea.document.write(printContents.html())
    // printArea.print();
    // // document.body.innerHTML = printContents;
    // // window.print();
    // // document.body.innerHTML = originalContents;
    // const prtContent = document.getElementById('student-card-page');
    // console.log(prtContent);
    // const winPrint = window.open('search', 'search', 'left=0,top=0,width=3000,height=3000,toolbar=0,scrollbars=0,status=0');
    // // winPrint.document.write(prtContent.innerHTML);
    // winPrint.document.write('<html><head><title>Print Me</title>');
    // winPrint.document.write('<link rel="stylesheet" type="text/css" href="./styles/print.css" media="print" /></head>')
    // winPrint.document.write('<body onafterprint="self.close()">');
    // winPrint.document.write(prtContent.innerHTML);
    // winPrint.document.write('<button>print</button>')
    // winPrint.document.write('</body></html>');
    // console.log(winPrint.document);
    // winPrint.document.close();
    // winPrint.print();
    // winPrint.close();
  }
  const lstStudentCard = [
    {
      id: '1',
      name: 'Pham Cong Dan',
      attentClass: 'A18',
      phoneNumber: '0345202984'
    },
    {
      id: '2',
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
          <p>Preview:</p>
          <button onClick={printStudentCard}>print</button>
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
