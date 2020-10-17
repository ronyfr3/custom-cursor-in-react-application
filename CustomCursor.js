import React, { Fragment, useState } from 'react'
import SmoothCursor from 'react-smooth-cursor'
import 'react-smooth-cursor/dist/index.css'

const App = () => {
  const [cursorType] = useState('circle' )
  return (
    <Fragment>
      {cursorType === 'circle' && (
        <SmoothCursor
          fillColor='#fff'
          strokeColor='black'
          strokeWidth={1}
          circleRadius={25}
          shape='circle'
          //alien,circle,square
       />
      )}
    </Fragment>
  )
}

export default App