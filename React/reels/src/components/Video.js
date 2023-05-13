import React from 'react'

import './Video.css'

function Video(props) {
  const handleClick = (e) => {
    e.preventDefault();
  }
  return (
    <video src={props.src} id={props.id}  className='videos-styling' onClick={handleClick} controls></video>
  )
}

export default Video