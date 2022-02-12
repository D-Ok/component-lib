import React, { useEffect, useState, FC } from 'react'
import classnames from 'classnames'
import { useInView } from 'react-intersection-observer'

import "./Video.css"
import VideoElement from '../VideoElement'
import {IVideoContainer} from "../../domain/interphases/IVideo";

const defaultProps = {
  playOnView: false,
  className: '',
  muted: true,
  videoUrl: '',
}

const Video: FC<IVideoContainer> = ({
  muted,
  playOnView,
  videoUrl,
  className,
}) => {
  const [isLoad, setIsLoad] = useState(false)

  const { ref, inView } = useInView({
    rootMargin: '100px',
    triggerOnce: true,
  })

  useEffect(() => {
    if (inView && !isLoad) setIsLoad(true)
  }, [inView, isLoad])

  const containerClasses = classnames(
    { [className]: true },
    'video-container',
  )

  return (
    <div className={containerClasses} ref={ref}>
      <VideoElement
        videoUrl={videoUrl}
        isLoad={isLoad}
        playOnView={playOnView}
        muted={muted}
      />
    </div>
  )
}

Video.defaultProps = defaultProps

export default Video
