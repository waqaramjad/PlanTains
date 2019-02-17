import React from 'react'
import PropTypes from 'prop-types'
import RateGroup from 'components/RateGroup' 

const PictureHolder = ({ rate, imageUrl }) => {

	return (
	  <div className="col-4 p-0">
      <div className="row movie-tumbsnail-c">
		    <img
		      className="movie-tumbsnail" 
		      src={imageUrl}
		      alt="Card image cap"
		    />
	    </div>
      <div className="row movie-rtm"><div>Rate this Movie</div></div>
      <div className="row movie-rtm"><RateGroup size={60} /></div>
	  </div>
  )
}

PictureHolder.propTypes = {
	imageUrl: PropTypes.string
}

PictureHolder.defaultProps = {
}

export default PictureHolder