import React from 'react'
import { FaTimes } from 'react-icons/fa'
import { useGlobalContext } from './context';

const Modal = () => {
  const {openModal,CloseModal} = useGlobalContext();
  return (
    <div className={`${openModal ? 'modal-overlay show-modal':'modal-overlay'}`}>
      <div className='modal-container'>
        <h3>modal content</h3>
        <button className='close-modal-btn' onClick={CloseModal}>
          <FaTimes />
        </button>
      </div>
    </div>
  )
}

export default Modal
