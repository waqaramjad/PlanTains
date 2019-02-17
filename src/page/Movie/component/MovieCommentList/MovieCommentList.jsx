import React from 'react'
import PropTypes from 'prop-types'

import { defaultState, componentDidMount } from './method'

class MovieCommentList extends React.PureComponent {
  constructor(props) {
    super(props)

    this.state = defaultState
    this.componentDidMount = componentDidMount(this)
  }

  renderItem (item, i) {
  	return (
		  <div className="list-group-item movie-comment-item" key={i}>
			  <div className="d-flex w-100 justify-content-between" >
			    <h5 className="mb-1">{item.n}</h5>
			    <small>{item.d}</small>
			  </div>
			  <p className="mb-1">{item.c}</p>
			</div>
		)
  }

  render () {
	  return (
			<div className="list-group">
        {this.state.comments.map(this.renderItem)}
			</div>
	  )
  }
}

MovieCommentList.propTypes = {
	movieID: PropTypes.string
}

export default MovieCommentList


