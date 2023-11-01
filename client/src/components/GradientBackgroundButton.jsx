import React from 'react'

function GradientBackgroundButton(props) {
    function handleClick() {
        window.location.href = `/${props.route}`;
    }
  return (
    <div className='gradient-btn' onClick={() => handleClick()}>
        <span className='gradient-span'>
            <span className='gradient-btn-layer'>
            {props.msg}
            </span>
        </span>
    </div>
  )
}

export default GradientBackgroundButton
