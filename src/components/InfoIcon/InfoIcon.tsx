import React, {FC} from 'react'
import classnames from 'classnames'
import { Icon, IconButton } from '@mui/material'

import "./InfoIcon.css"
import numberToText from '../../helpers/numberToText'
import {InfoIconColors} from "../../domain/enums/InfoIcomColors";
import {InfoIconFonts} from "../../domain/enums/InfoIconFonts";
import {IInfoIcon} from "../../domain/interphases/IInfoIcon";

const defaultProps = {
  icon: 'favorite',
  color: InfoIconColors.error,
  fontSize: InfoIconFonts.medium,
  number: 0,
  text: '',
  iconSize: 0,
  className: '',
  disabled: false,
}


const InfoIcon: FC<IInfoIcon> = ({
  disabled,
  className,
  icon,
  number,
  color,
  text,
  fontSize,
  iconSize,
}) => {
  const sxObject = iconSize ? { fontSize: iconSize } : {}
  const textNumber = numberToText(number)

  return (
    <IconButton
      disableRipple={disabled}
      disableFocusRipple={disabled}
      color={color}
      aria-label="upload picture"
      component="span"
      className={classnames(className, 'info-icon-container')}
    >
      <Icon fontSize={fontSize} sx={sxObject}>
        {icon}
      </Icon>
      {text && (
      <span className="info-icon-text">
        {`${text}:`}
      </span>
      )}
      {textNumber && <span className="info-icon-text">{textNumber}</span>}
    </IconButton>
  )
}

InfoIcon.defaultProps = defaultProps

export default InfoIcon
