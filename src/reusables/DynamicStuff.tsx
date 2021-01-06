import React from 'react'

export interface DynamicImageT {
image, alt, name
}
export const DynamicImage = ({ imageData }: { imageData: DynamicImageT }) => {
  return (
    <a href="/linkedPage">
    <div>
      <img src={imageData.image} alt={imageData.alt} />
      <p className='nameText'>{imageData.name}</p>
    </div>
  </a>
  )
}
