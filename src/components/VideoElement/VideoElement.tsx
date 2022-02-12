import React, { useEffect, useRef, useState, FC } from 'react'
import { useInView } from 'react-intersection-observer'
import classnames from 'classnames'

import "./VideoElement.css"

import InfoIcon from '../InfoIcon'
import videoController from '../../helpers/videoController'
import {IVideoElement} from "../../domain/interphases/IVideo";
import {InfoIconColors} from "../../domain/enums/InfoIcomColors";

const defaultProps = {
  muted: true,
  isLoad: false,
  playOnView: true,
  videoUrl: ''
}

const VideoElement: FC<IVideoElement> = ({
  videoUrl, isLoad, playOnView, muted,
}) => {
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
          color={InfoIconColors.default}
          icon="play_arrow"
          iconSize={100}
        />
      </div>
    </div>
  )
}

VideoElement.defaultProps = defaultProps

export default VideoElement
