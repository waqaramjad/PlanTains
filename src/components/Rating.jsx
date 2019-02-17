import React from 'react'
import PropTypes from 'prop-types'


import rate_1 from 'media/1plantains.png'
import rate_2 from 'media/2plantains.png'
import rate_3 from 'media/3plantains.png'
import rate_4 from 'media/4plantains.png'
import rate_5 from 'media/5plantains.png'

const Rating = ({ rate }) => {
	const rated = parseFloat(rate)
  let src = rate_1
	if (rated > 90) {
		src = rate_5
	}
	else if (rated > 80) {
		src = rate_4
	}
	else if (rated > 60) {
		src = rate_3
	}
	else if (rated > 40) {
		src = rate_2
	}

	return (
		<div className="rating-rate">
			<span className="pull-right">
				<img src={src} width="65" />
				&nbsp;{rate}%
			</span>
		</div>
  )
}

// will be add size later
Rating.propTypes = {
  rate: PropTypes.number,
}

export default Rating