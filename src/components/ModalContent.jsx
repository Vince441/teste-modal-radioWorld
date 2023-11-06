import React from 'react'


export default function ModalContent({ closeModal }) {
  const handleIntContentClick = (e) => {
    e.stopPropagation();
  };

  
  return (
    <>
    
    <div onClick={closeModal} className='container-radio'>
    
    <div className='int-content' onClick={handleIntContentClick}>
    <button onClick={closeModal} className='button'>X</button>
    </div>
    </div>
    
    </>
  )
}
