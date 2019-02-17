import React from 'react'
import PropTypes from 'prop-types'

const Meta = ({action, text}) => {
  return (
		<div className="row">
			<div className="col-4 movie-meta-item">{action}
			</div>
			<div className="col">{arrayToText(text)}
			</div>
		</div>
  )
}

Meta.propTypes = {
	action: PropTypes.string.isRequired,
	text: PropTypes.array
}

export default Meta

//
// helper
//
function arrayToText(array) {
	if (!array) {
		return ''
	}

	if ( typeof array === 'string' ) {
     return array
	}
  
  if (array.reduce && typeof array.reduce === 'function') {
    return array.reduce((r, n, i) => i === 0 ? (r + n) : (r + ', ' + n), '')
  }
}
