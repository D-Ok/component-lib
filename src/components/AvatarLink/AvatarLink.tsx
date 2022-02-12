import React, { FC } from 'react';
import classnames from 'classnames'
import { Avatar, Link } from '@mui/material'

import "./AvaterLink.css"
import {IAvatarLink} from "../../domain/interphases/IAvatarLink";

const defaultProps = {
  className: '',
  uniqueId: '',
  nickname: '',
  avatar: '',
  onClickHandler: () => 0,
};

const AvatarLink: FC<IAvatarLink> = ({
  uniqueId,
  nickname,
  avatar,
  className,
  onClickHandler,
}) => {
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

AvatarLink.defaultProps = defaultProps;
export default AvatarLink
