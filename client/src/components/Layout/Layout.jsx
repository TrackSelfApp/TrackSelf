import React from 'react'

function Layout({children}) {
  return (
    <div className='w-full'>
        <main>{children}</main>
    </div>
  )
}

export default Layout
