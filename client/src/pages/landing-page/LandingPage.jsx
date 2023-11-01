import React from 'react'
import "./landing-page-styles.css";
import LandingPageNav from './LandingPageNav';
import GradientBackgroundButton from '../../components/GradientBackgroundButton';

function LandingPage() {
  return (
    <div className='landing-page-container'>
        <LandingPageNav/>
        <div className='lp-header-container'>
          <span className='lp-header'>Tracking and Goal Setting <br/> that Transforms</span>
          <div className='lp-subtext-container'>
            <span className='lp-subtext'>Accomplish ALL your Goals and achieve your Dream Life <br/> with Consistency and Dedication</span>
          </div>
        </div>
        <div className='start-now'>
          <GradientBackgroundButton msg="Start Now!" route="auth"/>
        </div>
    </div>
  )
}

export default LandingPage