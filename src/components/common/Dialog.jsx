import React from 'react'

export const Dialog = (props) => {
  const { isShow, closeModal, children } = props;

  const clickOutside = () => {
    closeModal();
  }

  return (
    isShow && (
      <div className='transition ease-in-out'>
        <div className='fixed top-0 left-0 bottom-0 right-0 bg-black opacity-50'></div>
        <div className='fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center' onClick={clickOutside}>
          <div className='m-10 w-[1200px] h-[800px] bg-white rounded-md overflow-hidden' onClick={(e) => e.stopPropagation()}>
            {children}
          </div>
        </div>
      </div>
    )
  )
}
