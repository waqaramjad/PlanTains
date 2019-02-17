import React from 'react'
import PropTypes from 'prop-types'

// this must be static url
import rate_1 from 'media/1plantains.png'
import rate_2 from 'media/2plantains.png'
import rate_3 from 'media/3plantains.png'
import rate_4 from 'media/4plantains.png'
import rate_5 from 'media/5plantains.png'

const RateGroup = ({ rate, imageUrl, size }) => {

	return (
		<div>
			<button type="button" className="btn btn-outline-link rateg-btn"><img src={rate_1} width={size} /></button>
			<button type="button" className="btn btn-outline-link rateg-btn"><img src={rate_2} width={size} /></button>
			<button type="button" className="btn btn-outline-link rateg-btn"><img src={rate_3} width={size} /></button>
			<button type="button" className="btn btn-outline-link rateg-btn"><img src={rate_4} width={size} /></button>
			<button type="button" className="btn btn-outline-link rateg-btn"><img src={rate_5} width={size} /></button>
		</div>
  )
}

RateGroup.propTypes = {
  rate: PropTypes.string,
  imageUrl: PropTypes.string,
  size: PropTypes.number,
}

RateGroup.defaultProps = {
	size: 65
}

export default RateGroup