import React from 'react'
import { DynArticle, DynArticleT } from '../../../reusables/DynamicStuff'
import './article.sass'

function Article() {

  const articleData: DynArticleT[] = [
    {
      title: 'Stories on our success on animal conservation so far',
      description: 'Top stories that proved that wildlife conservation efforts were not in vain. We saved many animals and you see ten of the top stories of how we saved animals like whales, gorillas, the bald eagle and many more.',
      link: 'https://www.weforum.org/agenda/2020/03/conservation-stories-on-world-wildlife-day/',
    },
    {
      title: 'How we can help animals',
      description: 'Ways you can help wildlife, whether it be by donating, joining a team or simply spreading awareness so that bills could be past to better protect wildlife.',
      link: 'https://www.worldwildlife.org/how-to-help',
    },
    {
      title: 'Articles on wildlife conservation',
      description: 'Articles that talk about overall climate changes and the impact of it to the wildlife and other issues on people effecting wildlife, providing solutions on how to stop effecting wildlife',
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
