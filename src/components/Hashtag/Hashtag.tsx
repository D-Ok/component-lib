import React, {FC} from 'react'
import { Link } from '@mui/material'

import "./Hashtag.css";
import {IHashtag} from "../../domain/interphases/IHashtag";

const defaultProps = {
    name: '',
    disabled: true,
};

const Hashtag: FC<IHashtag> = ({ name, disabled }) => {
  return (
    <span className="hashtag">
      <Link component="button" href="#" disabled={disabled} underline="hover">
        #
        {name}
      </Link>
    </span>
  )
}

Hashtag.defaultProps = defaultProps

export default Hashtag
