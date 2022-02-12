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
  videoUrl: ''
}

VideoElement.propTypes = {
  videoUrl: propTypes.string,
  playOnView: propTypes.bool,
  muted: propTypes.bool,
  isLoad: propTypes.bool,
}

export default VideoElement
