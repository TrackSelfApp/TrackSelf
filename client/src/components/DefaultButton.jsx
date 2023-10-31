import React from 'react'
import "./component-styles.css"

function DefaultButton() {
    function handleClick() {
        window.location.href = "/auth";
    }
  return (
    <div className='default-btn' onClick={() => handleClick()}>
        <span className='gradient-cover'>
            Access
        </span>
    </div>
  )
}

export default DefaultButton