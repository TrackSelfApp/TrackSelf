import React from 'react'
import "./landing-page-styles.css";
import DefaultButton from '../../components/DefaultButton';

function LandingPageNav() {
  return (
    <div className='lp-nav'>
      <div className='lp-nav-left'>
        <h3>Logo</h3>
      </div>
      <div className='lp-nav-right'>
        <DefaultButton/>
      </div>
    </div>
  )
}

export default LandingPageNav