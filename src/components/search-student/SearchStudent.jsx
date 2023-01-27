import React, { useState } from 'react'
import { Dialog } from '../common/Dialog';
import { StudentCardModal } from './StudentCardModal';

const SearchStudent = () => {
  const [isShowDialog, setIsShowDialog] = useState(false);

  const toggleDialog = () => {
    setIsShowDialog(!isShowDialog);
  }

  const closeModal = () => {
    setIsShowDialog(false);
  }
  return (
    <>
      <div>
        <button
          className='text-gray-900 bg-gray-300 border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 transition ease-in-out'
          onClick={toggleDialog}  
        >
          open modal
        </button>
      </div>
      {/* {isShowDialog && <Dialog />} */}
      <StudentCardModal
        isShow={isShowDialog}
        closeModal={closeModal}
      />
    </>
  )
}

export { SearchStudent };
