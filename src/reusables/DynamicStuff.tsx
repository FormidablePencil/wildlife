import React from 'react'

export interface DynamicImageT {
  image, alt, name
}
export const DynamicImage = ({ imageData }: { imageData: DynamicImageT }) => {
  return (
    // <a href="/linkedPage">

    <div>
      <img className='myImage' src={imageData.image} alt={imageData.alt} />
      <p className='nameText'>{imageData.name}</p>
    </div>
    // </a>
  )
}

export interface DynArticleT {
  title, description, link
}
export const DynArticle = ({ articleData }: { articleData: DynArticleT }) => {
  return (
    <div className='article-box'>
      <p className='title'>{articleData.title}</p>
      <p className='description'>{articleData.description}</p>

      <a href={articleData.link}>
        <button className='link-button'>Go to Article</button>
      </a>
    </div>
  )
}
