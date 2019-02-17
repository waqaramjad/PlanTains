import React from 'react'
import PropTypes from 'prop-types'

const MovieThumbPreview = ({ src, width, height }) => {

	return (
		<iframe
      src={src}
      frameBorder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen 
     />
		)
}

MovieThumbPreview.propTypes = {
	src: PropTypes.string.isRequired,
	width: PropTypes.number,
	height: PropTypes.number
}

MovieThumbPreview.defaultProps = {
  width: 360,
  height: 360
}

export default MovieThumbPreview