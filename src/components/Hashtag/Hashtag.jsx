import React from 'react'
import propTypes from 'prop-types'
import { Link } from '@mui/material'

import "./Hashtag.css"

const Hashtag = function ({ name, disabled }) {
  return (
    <span className="hashtag">
      <Link component="button" href="#" disabled={disabled} underline="hover">
        #
        {name}
      </Link>
    </span>
  )
}

Hashtag.defaultProps = {
  name: '',
  disabled: true,
}

Hashtag.propTypes = {
  name: propTypes.string,
  disabled: propTypes.bool,
}

export default Hashtag
