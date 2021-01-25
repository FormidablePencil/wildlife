import React from 'react'

export interface DynArticleT {
  title, description, link
}
export const DynArticle = ({ articleData }: { articleData: DynArticleT }) => {
  return (
    <div className='article-box'>
      <p className='title'>{articleData.title}</p>
      <p className='description'>{articleData.description}</p>

      <a target='__blank' href={articleData.link}>
        <button className='link-button'>Go to Article</button>
      </a>
    </div>
  )
}
