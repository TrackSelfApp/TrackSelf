import React from 'react'
import "./landing-page-styles.css";
import DefaultButton from '../../components/DefaultButton';

function LandingPageNav() {
  return (
    <div className='lp-nav'>
      <div className='lp-nav-left'>
        <img className='nav-logo'  src='/nav-logo.png'/>
      </div>
      <div className='lp-nav-right'>
        <DefaultButton msg="Access" route="auth"/>
      </div>
    </div>
  )
}

export default LandingPageNav