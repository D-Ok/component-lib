import React from 'react'
import propTypes from 'prop-types'
import classnames from 'classnames'
import { Avatar, Link } from '@mui/material'

import "./AvaterLink.css"

const AvatarLink = function ({
  uniqueId,
  nickname,
  avatar,
  className,
  onClickHandler,
}) {
  const avatarClickHandler = () => onClickHandler(uniqueId)

  const avatarLinkClasses = classnames(
    { [`${className}`]: true },
    'avatar-link-container',
  )

  return (
    <div
      className={avatarLinkClasses}
      onClick={avatarClickHandler}
    >
      <Avatar alt={nickname} src={avatar} className="avatar-icon" />
      <div className="avatar-text">
        <Link href="#" underline="hover">
          {uniqueId}
        </Link>
        <span className="avatar-nickname">{nickname}</span>
      </div>
    </div>
  )
}

AvatarLink.defaultProps = {
  className: '',
  uniqueId: '',
  nickname: '',
  avatar: '',
  onClickHandler: () => 0,
}

AvatarLink.propTypes = {
  uniqueId: propTypes.string,
  nickname: propTypes.string,
  avatar: propTypes.string,
  className: propTypes.string,
  onClickHandler: propTypes.func,
}

export default AvatarLink
