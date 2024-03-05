import React from 'react'
import './Main.css'

function Main(props) {
  console.log(props.children)
  const children = props.children

  return <div className='main'>{children}</div>
}

export default Main
