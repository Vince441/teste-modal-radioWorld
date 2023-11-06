import React, { useState } from 'react'
import { createPortal } from "react-dom"
import ModalContent from './ModalContent'

export default function ModalButton() {
const [showModal, setShowModal] = useState(false);

return (
    <>
      <button onClick={() => setShowModal(true)} className='modal'>Open The Modal</button>
      {showModal && createPortal(<ModalContent closeModal={() => setShowModal(false)} />, document.body)}
    </>
  )
}
