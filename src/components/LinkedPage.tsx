import React from 'react'
import koala from '../assets/koala.jpg'
// import koala2nd from '../assets/koala2nd.jpg'
import '../components/style.sass'

function LinkedPage() {
  return (
    <div className='container'>
        <div className='orangeBoxLink'>
          <h1>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, ssse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</h1>
        </div>
        <img src={koala} alt="koala" className='half-vw' />

      <div className='card'>
        <img src={koala} alt="another koala" className='sideImage' />
        <div className='grayBoxLink'>
          <h2>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, ssse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</h2>
     
        </div>
      </div>
    </div>
  )
}

export default LinkedPage
