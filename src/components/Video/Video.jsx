import React, { useEffect, useState } from 'react'
import propTypes from 'prop-types'
import classnames from 'classnames'
import { useInView } from 'react-intersection-observer'

import "./Video.css"
import VideoElement from '../VideoElement'

const Video = function ({
  muted,
  playOnView,
  videoUrl,
  className,
}) {
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

Video.defaultProps = {
  playOnView: false,
  className: '',
  muted: true,
  videoUrl: '',
}

Video.propTypes = {
  videoUrl: propTypes.string,
  className: propTypes.string,
  playOnView: propTypes.bool,
  muted: propTypes.bool,
}

export default Video
