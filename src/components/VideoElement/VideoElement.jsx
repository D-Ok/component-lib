import React, { useEffect, useRef, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import propTypes from 'prop-types'
import classnames from 'classnames'

import "./VideoElement.css"

import InfoIcon from '../InfoIcon'
import videoController from '../../helpers/videoController'

const VideoElement = function ({
  videoUrl, isLoad, playOnView, muted,
}) {
  const [isPlay, setIsPlay] = useState(false)
  const videoElement = useRef(null)

  const { ref, inView, entry } = useInView({
    threshold: 0.6,
  })

  useEffect(() => {
    setIsPlay(isLoad && playOnView)
  }, [isLoad, playOnView])

  useEffect(() => {
    if (!playOnView || !isPlay) return

    videoController(videoElement.current, !inView)
  }, [inView, playOnView, videoUrl, isPlay, entry])

  const onVideoClick = () => {
    videoController(videoElement.current, isPlay)
    setIsPlay(!isPlay)
  }

  const buttonClasses = classnames('video-button', {
    '--display': playOnView && !isPlay && isLoad,
  })

  const videoSource = isLoad ? videoUrl : ''

  return (
    <div className="video-element-container" ref={ref}>
      <video
        muted={muted}
        loop
        onClick={onVideoClick}
        src={videoSource}
        ref={videoElement}
      />
      <div className={buttonClasses} onClick={onVideoClick}>
        <InfoIcon
          color="default"
          icon="play_arrow"
          iconSize={100}
        />
      </div>
    </div>
  )
}

VideoElement.defaultProps = {
  muted: true,
  isLoad: false,
  playOnView: true,
  videoUrl:
        'https://v39-eu.tiktokcdn.com/a2144d6d51de21e456077881018c5f87/61930025/video/tos/useast2a/tos-useast2a-ve-0068c004/c5f6c64a47b04ecd91168fd9d921009c/?a=1233&br=2536&bt=1268&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=wZ~R_F5qkag3-I&l=2021111518492901019021807024301368&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=amxqNjQ6ZjtkNzMzNzczM0ApMzo6OTo1NGU1Nzk2OzczO2dxc2ZzcjRfNGxgLS1kMTZzc2BeMjQxNC02XjUwLS8uYjA6Yw%3D%3D&vl=&vr=',
}

VideoElement.propTypes = {
  videoUrl: propTypes.string,
  playOnView: propTypes.bool,
  muted: propTypes.bool,
  isLoad: propTypes.bool,
}

export default VideoElement
