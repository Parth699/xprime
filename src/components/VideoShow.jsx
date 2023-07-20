import React from 'react'
import './VideoShow.css'
import video from '../asset/Unreal Abstraction Typography_1080p.mp4'

const VideoShow = () => {
  return (
    <div className='app_video'>
        <video autoPlay={true} muted loop  >
        <source src={video} type='video/mp4' />
        </video>
    </div>
  )
}

export default VideoShow