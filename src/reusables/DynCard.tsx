import React, { useState } from 'react'
import { VscCircleFilled, VscCircleOutline } from 'react-icons/vsc'

export interface DynCardT {
  name, name2, img, img2, number, number2
}
export const DynCard = ({ cardData, setAccessor, setModal }: any) => {
  const [whichClicked, setWhichClicked] = useState(0)

  return (
    <div style={{ marginLeft: '20vw' }}>
      <div className={`flip-card ${whichClicked === 0 ? 'flip-card-active' : 'flip-card'}`}>
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img
              className='myImage'
              src={cardData.img}
            />
            {whichClicked === 0 ?
              <div className='hover-animal' onClick={() => {
                setAccessor(cardData.number)
                setModal(true)
              }}>
                <h1>dsafsdf</h1>
                {/* <p className='animal-name'>{cardData.name}</p> */}
              </div>
              : null}
          </div>


          <div className="flip-card-back">
            <img
              className='myImage'
              src={cardData.img2}
            />
            {whichClicked === 1 ?
              <div className='hover-animal' onClick={() => {
                setAccessor(cardData.number2)
                setModal(true)
              }}>
                {/* <p className='animal-name1'>{cardData.name2}</p> */}
              </div>
              : null}
          </div>
        </div>
      </div>


      <div style={{ margin: 20 }}>
        {whichClicked === 1 ?
          <VscCircleFilled style={{ marginRight: 10 }} color='white' size={30} />
          :
          <VscCircleOutline onClick={() => setWhichClicked(1)} style={{ marginRight: 10 }} color='white' size={30} />
        }
        {whichClicked === 0 ?
          <VscCircleFilled style={{ marginRight: 10 }} color='white' size={30} />
          :
          <VscCircleOutline onClick={() => setWhichClicked(0)} style={{ marginRight: 10 }} color='white' size={30} />
        }
      </div>
    </div>
  )
}
