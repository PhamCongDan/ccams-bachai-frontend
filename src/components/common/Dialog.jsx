import React from 'react'

const Dialog = (props) => {
  const { isShow, closeModal, children, size } = props;
  const typeModal = {
    sm: {
      width: 'w-sm',
      height: 'h-sm',
    },
    md: {
      width: 'w-md',
      height: 'h-md',
    },
  };

  const clickOutside = () => {
    closeModal();
  }

  return (
    isShow && (
      <div className='transition ease-in-out'>
        <div className='fixed top-0 left-0 bottom-0 right-0 bg-black opacity-50'></div>
        <div className='fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center' onClick={clickOutside}>
          <div className={`m-10 ${typeModal[size].width} ${typeModal[size].height} bg-white rounded-md overflow-hidden`} onClick={(e) => e.stopPropagation()}>
            {children}
          </div>
        </div>
      </div>
    )
  )
}

Dialog.defaultProps = {
  isShow: false,
  closeModal: () => null,
  size: 'md',
}

export default Dialog;
