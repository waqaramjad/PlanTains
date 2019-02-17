import React from 'react'
import PropTypes from 'prop-types'

import FBicon from 'media/fbsvg.svg'
import Twittericon from 'media/twittersvg.svg'
import Instaicon from 'media/insta.svg'

const styles = {
	icon: {
		width: 40,
		height: 40
	}
}

const NetworkGroup = () => {

	return (
	  <div className="row">
	    <ul className="nav justify-content-center">
	      <li className="nav-item">
	        <a href="#">
	          <img src={FBicon} style={styles.icon} />
	        </a>
	      </li>
	      <li className="nav-item">
	        <a href="#">
	        <img src={Twittericon} style={styles.icon} />
	        </a>
	      </li>
	      <li className="nav-item">
	        <a href="#">
	        <img src={Instaicon} style={styles.icon} />
	        </a>
	      </li>
	    </ul>
	  </div>
		)
}

NetworkGroup.propTypes = {
}


export default NetworkGroup