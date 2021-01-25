import React, { useEffect, useState } from 'react'
import { animalsApi } from '../../../../ApiInfo'
import "./modal.sass"

function Modal({ modal, setModal, accessor }) {
  const [animationPlay, setAnimationPlay] = useState(false)
  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    function onScroll() {
      let currentPosition = window.pageYOffset
      if (currentPosition > scrollTop && modal) {
        setAnimationPlay(true) 
        setTimeout(() => setModal(false), 400)
      } else {
        setModal(true);
      }
      setScrollTop(currentPosition <= 0 ? 0 : currentPosition);
    }

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  return (
    <div className='modal-container'>
      <div className='modal-outside-bg' onClick={() => {
        setAnimationPlay(true)
        setTimeout(() => setModal(false), 400)
      }} />
      <div className={`modal-bg ${animationPlay ? 'modal-bg-deactivate' : 'modal-bg-activate'}`}>

        <div style={{ width: '30%' }}>
          <div className='facts'>
            <h2>Species: </h2>
            <h4>{animalsApi[accessor].Name}</h4>
            <h2>Location: </h2>
            <h4>{animalsApi[accessor].Location}</h4>
            <h2>Estimated Population: </h2>
            <h4>{animalsApi[accessor].Population}</h4>
            <h2>Status: </h2>
            <h4>{animalsApi[accessor].Status}</h4>
          </div>
        </div >

        <div style={{ width: '60%', marginLeft: '2vw' }}>
          <h2 className='desc'>Description:</h2>
          <h4 style={{ width: '100%' }}>{animalsApi[accessor].Description}</h4>
        </div>
      </div>
    </div>
  )
}

export default Modal
