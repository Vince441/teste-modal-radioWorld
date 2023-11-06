import React from 'react'


export default function ModalContent({ closeModal }) {
  return (
    <>
    <div  className='content'></div>
    <div onClick={closeModal} className='container-radio'>
    
    <div className='int-content'>
    <button onClick={closeModal} className='button'>X</button>
    </div>
    </div>
    </>
  )
}
