import React from 'react'
import './container.scss'

const Container = ({children, auth}) => {
   return (
      <div className="container">
         {/* Navigation bar, banner, other general elements */}
         <div>{children}</div>
      </div>
   )
}

export default Container
