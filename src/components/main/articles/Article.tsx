import React from 'react'
import { DynArticle, DynArticleT } from '../../../reusables/DynamicStuff'
import './article.sass'

function Article() {

  const articleData: DynArticleT[] = [
    {
      title: 'Stories on our success on animal conservation so far',
      description: 'm ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolor',
      link: 'https://www.weforum.org/agenda/2020/03/conservation-stories-on-world-wildlife-day/',
    },
    {
      title: 'How we can help animals',
      description: 'm ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolor',
      link: 'https://www.worldwildlife.org/how-to-help',
    },
    {
      title: 'Articles on wildlife conservation',
      description: 'm ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolor',
      link: 'https://theconversation.com/us/topics/wildlife-conservation-4235'
    },
  ]


  return (
    <div className='articleContainer'>
      <p className='article-header'>Articles to Learn More</p>

      <DynArticle articleData={articleData[0]} />

      <DynArticle articleData={articleData[1]} />

      <DynArticle articleData={articleData[2]} />


    </div>
  )
}

export default Article
